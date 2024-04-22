import {defineStore} from "pinia";
import type {
  CheckoutInput,
  UpdateCustomerInput,
  CreateAccountInput,
} from "#gql";
import {useAuthStore} from "./useAuth";
import {useCartStore} from "./useCart";
import {useHelpersStore} from "./useHelpers";
import {useRouter} from "vue-router";
import {GqlCheckout, GqlUpdateCustomer} from "#gql";
import {products, shipping} from "~/common";
import type {AnyType} from "~/types";

export const useCheckoutStore = defineStore("checkout", {
  state: () => ({
    isShow: false,
    orderInput: {
      customerNote: "",
      paymentMethod: "",
      shipToDifferentAddress: false,
      metaData: [{key: "order_via", value: "WooNuxt"}],
      transactionId: "",
      createAccount: false,
      username: "",
      password: "",
    },
    isProcessingOrder: false,
  }),
  actions: {
    openCheckout() {
      this.isShow = true;
      console.log(this.isShow);
    },
    closeCheckout() {
      this.isShow = false;
      console.log(this.isShow);
    },

    async updateShippingLocation() {
      const {customer, viewer} = useAuthStore();
      const cartStore = useCartStore();

      this.isProcessingOrder = true;
      cartStore.isUpdatingCart = true;

      try {
        const {updateCustomer} = await GqlUpdateCustomer({
          input: {
            id: viewer?.id,
            shipping: this.orderInput.shipToDifferentAddress
              ? customer.shipping
              : customer.billing,
            billing: customer.billing,
          } as UpdateCustomerInput,
        });

        if (updateCustomer) cartStore.refreshCart();
      } catch (error) {
        console.error(error);
      } finally {
        this.isProcessingOrder = false;
      }
    },
    async openPayPalWindow(redirectUrl: string): Promise<boolean> {
      return new Promise((resolve) => {
        // Your implementation for opening PayPal window
      });
    },
    async processCheckout(isPaid = false) {
      const {loginUser} = useAuthStore();
      const router = useRouter();
      const {replaceQueryParam} = useHelpersStore();
      const cartStore = useCartStore();
      const {customer} = useAuthStore();

      this.isProcessingOrder = true;

      const {username, password, shipToDifferentAddress} = this.orderInput;
      const billing = customer?.billing as AnyType;
      const shipping = shipToDifferentAddress ? customer?.shipping : billing;

      try {
        let checkoutPayload: CheckoutInput = {
          billing,
          shipping,
          metaData: this.orderInput.metaData,
          paymentMethod: this.orderInput.paymentMethod,
          customerNote: this.orderInput.customerNote,
          shipToDifferentAddress,
          transactionId: this.orderInput.transactionId,
          isPaid,
        };

        // Create account
        if (this.orderInput.createAccount) {
          checkoutPayload.account = {username, password} as CreateAccountInput;
        }

        const {checkout} = await GqlCheckout(checkoutPayload);

        // Login user if account was created during checkout
        if (this.orderInput.createAccount) {
          await loginUser({username, password});
        }

        const orderId = checkout?.order?.databaseId;
        const orderKey = checkout?.order?.orderKey;
        const isPayPal = this.orderInput.paymentMethod === "paypal";

        // PayPal redirect
        if ((await checkout?.redirect) && isPayPal) {
          // Your implementation for PayPal redirect
        } else {
          router.push(`/checkout/order-received/${orderId}/?key=${orderKey}`);
        }

        if ((await checkout?.result) !== "success") {
          alert("There was an error processing your order. Please try again.");
          window.location.reload();
          return checkout;
        } else {
          await cartStore.emptyCart();
          await cartStore.refreshCart();
        }
      } catch (error: any) {
        this.isProcessingOrder = false;

        const errorMessage = error?.gqlErrors?.[0].message;

        if (
          errorMessage?.includes(
            "An account is already registered with your email address"
          )
        ) {
          alert("An account is already registered with your email address");
          return null;
        }

        alert(errorMessage);
        return null;
      } finally {
        this.isProcessingOrder = false;
      }
    },
  },
  getters: {
    totalOrder() {
      const totalPrice = products.reduce((total, product) => {
        return total + 10 + product.price;
      }, 0);
      return totalPrice.toFixed(2);
    },
    totalOrderPrice() {
      const totalPrice = products.reduce((total, product) => {
        return total + product.price;
      }, 0);
      const total = totalPrice + shipping;
      return total.toFixed(2);
    },
  },
});
