<template>
  <div class="w-full">
    <TransitionRoot as="template" :show="isShow">
      <Dialog as="div" class="relative z-50">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-transdark transition-opacity"
          />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 z-50 flex max-w-full"
            >
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <div
                    class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                  >
                    <div class="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
                      <div class="flex items-center justify-between">
                        <DialogTitle
                          class="text-xl tracking-tight font-medium text-dark"
                          >Shopping cart</DialogTitle
                        >
                          <CommonButton
                            variant="ghost"
                            type="button"
                            class="relative group p-3"
                            @click="closeCart"
                          >
                            <IconsCloseIcon
                              class="text-3xl text-dark transition-all"
                              aria-hidden="true"
                            />
                          </CommonButton>
                      </div>
                      <div class="w-full flex justify-start">
                        <CommonButton
                        variant="outline"
                        type="button"
                        class="relative group border-none ring-1 ring-semired p-1 rounded-md hover:opacity-80 transition-all mt-5 flex justify-center items-center px-1.5 gap-1"
                        @click="closeCart"
                      >
                        <span class="text-sm font-light text-semired">Delete All</span>
                        <IconsTrashIcon
                          class="text-2xl transition-all"
                          aria-hidden="true"
                        />
                      </CommonButton>
                      </div>
                      <div class="mt-8">
                        <div class="flow-root">
                          <ul role="list" class="-my-6 divide-y divide-gray">
                            <li
                              v-for="product in products"
                              :key="product.id"
                              class="flex items-start py-6 gap-5"
                            >
                              <div
                                class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray"
                              >
                                <img
                                  :src="imageSample[0]"
                                  :alt="product.name"
                                  class="h-full w-full object-cover object-center"
                                />
                              </div>
  
                              <div class="flex flex-1 flex-col gap-5">
                                <div>
                                  <div
                                    class="flex justify-between text-base font-medium text-dark"
                                  >
                                    <h3>
                                      <CommonLink
                                        variant="ghost"
                                        :to="`/product/${replacing(
                                          product.name
                                        )}`"
                                        class="hover:no-underline rounded-none hover:text-semigreen transition-all"
                                      >
                                        {{ product.name }}
                                      </CommonLink>
                                    </h3>
                                    <p class="ml-4 text-semiblue">
                                      ${{ product.price }}
                                    </p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">
                                    {{ product.name }}
                                  </p>
                                </div>
                                <div
                                  class="flex flex-row items-center justify-between text-sm"
                                >
                                  <div
                                    class="text-dark text-sm flex gap-1 items-center"
                                  >
                                    <span class="text-dark opacity-50">Qty:</span>
                                    <span>10</span>
                                  </div>
                                  <div class="flex h-7 items-center gap-1">
                                    <CommonButton
                                      variant="outline"
                                      class="border-gray h-7 aspect-square flex justify-center items-center ring-1 border-none ring-gray rounded-tl rounded-bl hover:ring-semigreen group"
                                    >
                                      <IconsArrowDownIcon
                                        class="rotate-90 text-2xl group-hover:ring-semigreen"
                                      />
                                    </CommonButton>
                                    <input
                                      type="number"
                                      name="qty"
                                      class="block w-full outline-none border-0 p-3 py-[0.3rem] max-h-7 h-full max-w-12 min-w-8 text-dark ring-1 text-sm ring-semigray bg-white placeholder:text-gray-400 focus:ring-1 focus:ring-semigreen [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center"
                                      placeholder="0"
                                      maxlength="7"
                                    />
                                    <CommonButton
                                      variant="outline"
                                      class="border-gray h-7 aspect-square flex justify-center items-center ring-1 border-none ring-gray rounded-tr rounded-br hover:ring-semigreen group"
                                    >
                                      <IconsArrowDownIcon
                                        class="-rotate-90 text-2xl group-hover:ring-semigreen"
                                      />
                                    </CommonButton>
                                  </div>
                                  <div class="flex">
                                    <CommonButton
                                      type="button"
                                      variant="ghost"
                                      class="font-medium text-semired hover:opacity-80"
                                    >
                                      Remove
                                    </CommonButton>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
  
                    <div class="shadow-top px-3 py-5 sm:px-5 flex flex-col gap-3">
                      <div
                        class="flex justify-between text-base font-medium text-gray-900"
                      >
                        <span class="text-lg">Total</span>
                        <span class="text-lg">$262.00</span>
                      </div>
                      <span class="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </span>
                      <div class="mt-6">
                        <CommonLink
                          to="/cart/checkout"
                          variant="ghost"
                          class="flex items-center justify-center w-full rounded-md bg-dark p-3 text-base font-medium text-white shadow-sm hover:bg-opacity-80 hover:no-underline transition-all"
                          @click="closeCart">
                          Checkout
                          </CommonLink
                        >
                      </div>
                      <div
                        class="py-3 flex justify-center items-center text-center text-sm text-dark gap-1"
                      >
                        <span>or</span>
                        <CommonButton
                          variant="ghost"
                          type="button"
                          class="flex justify-center items-center hover:opacity-80 transition-all"
                          @click="closeCart"
                        >
                          <span class="font-medium text-sm text-semiblue"
                            >Continue Shopping</span
                          >
                          <IconsArrowRightIcon class="text-2xl mt-0.5" />
                        </CommonButton>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {XMarkIcon} from "@heroicons/vue/24/outline";
import {products, imageSample, replacing} from "~/common";
import {useCartStore} from "../../stores/useCart";
import {useCheckoutStore} from "../../stores/useCheckout";

const cartStore = useCartStore();
const checkoutStore = useCheckoutStore();
const isShow = computed(() => cartStore.isShow);
const isCheckoutShow = computed(() => checkoutStore.isShow);

const openCheckout = () => {
  checkoutStore.openCheckout();
};
const closeCheckout = () => {
  checkoutStore.closeCheckout();
};
const closeCart = () => {
  cartStore.closeCart();
};
</script>
