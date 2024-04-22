// import {defineStore} from "pinia";
// import {
//   GqlGetCart,
//   GqlAddToCart,
//   GqlUpDateCartQuantity,
//   GqlEmptyCart,
//   GqlChangeShippingMethod,
//   GqlApplyCoupon,
//   GqlRemoveCoupons,
//   type AddToCartInput,
// } from "#gql";
// import {useAuthStore} from "./useAuth";
// import {watch} from "vue";
// import type {
//   Cart,
//   NullType,
//   NumberType,
//   PaymentGateway,
//   StringType,
// } from "~/types";

// export const useCartStore = defineStore("cart", {
//   state: () => ({
//     isShow: false,
//     cart: null as Cart | null,
//     isShowingCart: false,
//     isUpdatingCart: false,
//     isUpdatingCoupon: false,
//     paymentGateways: [] as PaymentGateway[],
//   }),
//   actions: {
//     openCart() {
//       this.isShow = true;
//       console.log(this.isShow);
//     },
//     closeCart() {
//       this.isShow = false;
//       console.log(this.isShow);
//     },

//     async refreshCart() {
//       try {
//         const {cart, customer, viewer, paymentGateways} = await GqlGetCart();

//         const {updateCustomer, updateViewer} = useAuthStore();
//         if (cart) this.updateCart(cart);
//         if (customer) updateCustomer(customer);
//         if (viewer) updateViewer(viewer);
//         if (paymentGateways) this.updatePaymentGateways(paymentGateways.nodes);

//         return cart;
//       } catch (error: any) {
//         console.error(error);
//       }

//       return null;
//     },
//     updateCart(payload: Cart | null) {
//       this.cart = payload;
//     },
//     updatePaymentGateways(payload: PaymentGateway[]) {
//       this.paymentGateways = payload;
//     },
//     toggleCart(state?: boolean) {
//       this.isShowingCart = state ?? !this.isShowingCart;
//     },
//     async addToCart(input: AddToCartInput) {
//       this.isUpdatingCart = true;

//       try {
//         const {addToCart} = await GqlAddToCart({input});
//         this.cart = addToCart?.cart ?? null;
//       } catch (error: any) {
//         const errorMessage = error?.gqlErrors?.[0].message;
//         if (errorMessage) console.error(errorMessage);
//       }
//     },
//     async removeItem(key: string) {
//       this.isUpdatingCart = true;
//       const {updateItemQuantities} = await GqlUpDateCartQuantity({
//         key,
//         quantity: 0,
//       });
//       this.cart = updateItemQuantities?.cart ?? null;
//     },
//     async updateItemQuantity(
//       key: StringType,
//       quantity: NumberType
//     ): Promise<NumberType> {
//       this.isUpdatingCart = true;
//       try {
//         const {updateItemQuantities} = await GqlUpDateCartQuantity({
//           key,
//           quantity,
//         });
//         this.cart = updateItemQuantities?.cart ?? null;
//         return quantity;
//       } catch (error: any) {
//         const errorMessage = error?.gqlErrors?.[0]?.message;
//         if (errorMessage) {
//           console.error(errorMessage);
//           throw new Error(errorMessage);
//         }
//         throw new Error(
//           "An unknown error occurred while updating item quantity"
//         );
//       }
//     },
//     async emptyCart() {
//       try {
//         const {emptyCart} = await GqlEmptyCart();
//         this.updateCart(emptyCart?.cart ?? null);
//       } catch (error: any) {
//         console.log(error);
//       }
//     },
//     async updateShippingMethod(shippingMethods: StringType) {
//       this.isUpdatingCart = true;
//       const {updateShippingMethod} = await GqlChangeShippingMethod({
//         shippingMethods,
//       });
//       this.cart = updateShippingMethod?.cart ?? null;
//     },
//     async applyCoupon(code: string): Promise<{message: StringType | NullType}> {
//       try {
//         this.isUpdatingCoupon = true;
//         const {applyCoupon} = await GqlApplyCoupon({code});
//         this.cart = applyCoupon?.cart ?? null;
//         this.isUpdatingCoupon = false;
//       } catch (error: any) {
//         this.isUpdatingCoupon = false;
//         const gqlErrors = error?.gqlErrors;
//         if (gqlErrors) {
//           const message = gqlErrors[0]?.message;
//           if (message) return {message};
//         }
//       }
//       return {message: null};
//     },
//     async removeCoupon(code: string) {
//       try {
//         this.isUpdatingCart = true;
//         const {removeCoupons} = await GqlRemoveCoupons({codes: [code]});
//         this.cart = removeCoupons?.cart ?? null;
//         this.isUpdatingCart = false;
//       } catch (error) {
//         console.error(error);
//         this.isUpdatingCart = false;
//       }
//     },
//   },
//   watchers: {
//     cart(val) {
//       this.isUpdatingCart = false;
//     },
//   },
// });

import {defineStore} from "pinia";
import {
  GqlGetCart,
  GqlAddToCart,
  GqlUpDateCartQuantity,
  GqlEmptyCart,
  GqlChangeShippingMethod,
  GqlApplyCoupon,
  GqlRemoveCoupons,
  type AddToCartInput,
} from "#gql";
import {useAuthStore} from "./useAuth";
import {watch} from "vue";
import type {
  BooleanType,
  Cart,
  NullType,
  NumberType,
  PaymentGateway,
  StringType,
  VoidType,
} from "~/types";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    isShow: false,
    cart: null as Cart | null,
    isShowingCart: false,
    isUpdatingCart: false,
    isUpdatingCoupon: false,
    paymentGateways: [] as PaymentGateway[],
  }),
  actions: {
    openCart(this: {isShow: BooleanType}) {
      this.isShow = true;
      console.log(this.isShow);
    },
    closeCart(this: {isShow: BooleanType}) {
      this.isShow = false;
      console.log(this.isShow);
    },
    async refreshCart(this: {
      updateCart: (payload: Cart | null) => void;
      updatePaymentGateways: (payload: PaymentGateway[]) => void;
      cart: Cart;
    }) {
      try {
        const {cart, customer, viewer, paymentGateways} = await GqlGetCart();

        const authStore = useAuthStore();
        if (cart) this.updateCart(this.cart);
        if (customer) authStore.updateCustomer(customer);
        if (viewer) authStore.updateViewer(viewer);
        if (paymentGateways) this.updatePaymentGateways(paymentGateways.nodes);

        return cart;
      } catch (error: any) {
        console.error(error);
      }

      return null;
    },

    updateCart(this: {cart: Cart | NullType}, payload: Cart | NullType) {
      this.cart = payload;
    },
    updatePaymentGateways(
      this: {paymentGateways: PaymentGateway[]},
      payload: PaymentGateway[]
    ) {
      this.paymentGateways = payload;
    },

    toggleCart(this: {isShowingCart: BooleanType}, state?: BooleanType) {
      this.isShowingCart = state ?? !this.isShowingCart;
    },

    async addToCart(
      this: {isUpdatingCart: BooleanType; cart: Cart | NullType},
      input: AddToCartInput
    ) {
      this.isUpdatingCart = true;

      try {
        const {addToCart} = await GqlAddToCart({input});
        if (addToCart) {
          this.cart = addToCart.cart as Cart;
        }
      } catch (error: any) {
        const errorMessage = error?.gqlErrors?.[0]?.message;
        if (errorMessage) {
          console.error(errorMessage);
        }
      } finally {
        this.isUpdatingCart = false;
      }
    },

    async removeItem(
      this: {isUpdatingCart: BooleanType; cart: Cart | NullType},
      key: StringType
    ) {
      this.isUpdatingCart = true;
      try {
        const {updateItemQuantities} = await GqlUpDateCartQuantity({
          key,
          quantity: 0,
        });
        if (updateItemQuantities) {
          this.cart = updateItemQuantities.cart as Cart;
        }
      } catch (error: any) {
        console.error(error);
      } finally {
        this.isUpdatingCart = false;
      }
    },

    async updateItemQuantity(
      this: {isUpdatingCart: BooleanType; cart: Cart | NullType},
      key: StringType,
      quantity: NumberType
    ): Promise<NumberType> {
      this.isUpdatingCart = true;
      try {
        const {updateItemQuantities} = await GqlUpDateCartQuantity({
          key,
          quantity,
        });
        if (updateItemQuantities) {
          this.cart = updateItemQuantities.cart as Cart;
        }
        return quantity;
      } catch (error: any) {
        const errorMessage = error?.gqlErrors?.[0]?.message;
        if (errorMessage) {
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        throw new Error(
          "An unknown error occurred while updating item quantity"
        );
      } finally {
        this.isUpdatingCart = false;
      }
    },

    async emptyCart(this: {
      updateCart: (payload: Cart | NullType) => VoidType;
    }) {
      try {
        const {emptyCart} = await GqlEmptyCart();
        if (emptyCart) {
          this.updateCart(emptyCart.cart as Cart);
        }
      } catch (error: any) {
        console.error(error);
      }
    },

    async updateShippingMethod(
      this: {isUpdatingCart: BooleanType; cart: Cart | NullType},
      shippingMethods: StringType
    ) {
      this.isUpdatingCart = true;
      try {
        const {updateShippingMethod} = await GqlChangeShippingMethod({
          shippingMethods,
        });
        if (updateShippingMethod) {
          this.cart = updateShippingMethod.cart as Cart;
        }
      } catch (error: any) {
        console.error(error);
      } finally {
        this.isUpdatingCart = false;
      }
    },

    async applyCoupon(
      this: {isUpdatingCoupon: boolean; cart: Cart | NullType},
      code: StringType
    ): Promise<{message: StringType | NullType}> {
      try {
        this.isUpdatingCoupon = true;
        const {applyCoupon} = await GqlApplyCoupon({code});
        if (applyCoupon) {
          this.cart = applyCoupon.cart as Cart;
        }
        this.isUpdatingCoupon = false;
      } catch (error: any) {
        this.isUpdatingCoupon = false;
        const gqlErrors = error?.gqlErrors;
        if (gqlErrors) {
          const message = gqlErrors[0]?.message;
          if (message) return {message};
        }
      }
      return {message: null};
    },

    async removeCoupon(
      this: {isUpdatingCart: BooleanType; cart: Cart | NullType},
      code: string
    ) {
      try {
        this.isUpdatingCart = true;
        const {removeCoupons} = await GqlRemoveCoupons({codes: [code]});
        if (removeCoupons) {
          this.cart = removeCoupons.cart as Cart;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.isUpdatingCart = false;
      }
    },
  },

  // do it in where this store is called
  //   watch(
  //   () => cartStore.cart,
  //   (newVal, oldVal) => {
  //     cartStore.isUpdatingCart = false; // Logic to execute when `cart` changes.
  //   },
  //   { deep: true } // Use this if you need to deeply watch objects within cart.
  // );
});
