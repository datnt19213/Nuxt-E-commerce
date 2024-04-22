import {defineStore} from "pinia";
import {
  GqlLogin,
  GqlLogout,
  GqlRegisterCustomer,
  GqlResetPasswordEmail,
  GqlGetOrders,
} from "#gql";
import type {RegisterCustomerInput, CreateAccountInput} from "#gql";
import {useCartStore} from "./useCart"; // Đảm bảo import useCart từ đúng vị trí
import type {Customer, Order, Viewer} from "~/types";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    customer: {billing: {}, shipping: {}} as Customer,
    viewer: null as Viewer | null,
    isPending: false,
    orders: null as Order[] | null,
  }),
  actions: {
    async loginUser(credentials: CreateAccountInput) {
      this.isPending = true;

      try {
        const {loginWithCookies} = await GqlLogin(credentials);

        if (loginWithCookies?.status === "SUCCESS") {
          const cart = await useCartStore().refreshCart();
          if (cart && !this.viewer) {
            return {
              success: false,
              error:
                "Password was correct, but there was an error logging in. Please try again later. If the problem persists, please contact support.",
            };
          }
        } else {
          this.isPending = false;
          return {success: false, error: loginWithCookies?.status};
        }
        return {success: true, error: null};
      } catch (error: any) {
        this.isPending = false;
        const gqlError = error?.gqlErrors?.[0];
        return {success: false, error: gqlError?.message};
      }
    },
    async logoutUser() {
      const {clearAllCookies} = useHelpersStore();
      this.isPending = true;
      try {
        const {logout} = await GqlLogout();
        if (logout) {
          this.isPending = false;
          await useCartStore().refreshCart();
          clearAllCookies();
          this.viewer = null;
          this.customer = {billing: {}, shipping: {}};
        }
        return {success: true, error: null};
      } catch (error) {
        this.isPending = false;
        return {success: false, error};
      }
    },
    async registerUser(userInfo: RegisterCustomerInput) {
      this.isPending = true;
      try {
        await GqlRegisterCustomer({input: userInfo});
        return {success: true, error: null};
      } catch (error: any) {
        const gqlError = error?.gqlErrors?.[0];
        this.isPending = false;
        return {success: false, error: gqlError?.message};
      }
    },
    updateCustomer(payload: Customer) {
      const sessionToken = payload?.sessionToken;
      if (sessionToken) {
        useGqlHeaders({"woocommerce-session": `Session ${sessionToken}`});
        const newToken = useCookie("woocommerce-session");
        newToken.value = sessionToken;
      }
      this.customer = payload;
      this.isPending = false;
    },
    updateViewer(payload: Viewer) {
      this.viewer = payload;
      this.isPending = false;
    },
    async sendResetPasswordEmail(email: string) {
      try {
        const {sendPasswordResetEmail} = await GqlResetPasswordEmail({
          username: email,
        });
        if (sendPasswordResetEmail?.success) {
          return {success: true, error: null};
        }
        return {
          success: false,
          error:
            "There was an error sending the reset password email. Please try again later.",
        };
      } catch (error: any) {
        const gqlError = error?.gqlErrors?.[0];
        return {success: false, error: gqlError?.message};
      }
    },
    async getOrders() {
      try {
        const {customer} = await GqlGetOrders();
        if (customer) {
          this.orders = customer.orders?.nodes ?? [];
          return {success: true, error: null};
        }
        return {
          success: false,
          error:
            "There was an error getting your orders. Please try again later.",
        };
      } catch (error: any) {
        const gqlError = error?.gqlErrors?.[0];
        return {success: false, error: gqlError?.message};
      }
    },
  },
});
