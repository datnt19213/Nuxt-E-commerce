<template>
  <div
    class="w-full h-12 md:h-16 bg-white flex justify-between items-center px-3 md:px-6"
  >
    <!-- left nav -->
    <div class="w-auto h-full flex justify-center items-center gap-6">
      <!-- nav toggle -->
      <CommonButton
        variant="ghost"
        mode="normal"
        style="color: #333"
        class="lg:hidden h-full group aspect-square rounded-full hover:bg-none flex justify-center items-center gap-1"
        @click="open = true"
      >
        <IconsMenuIcon class="text-dark text-3xl" />
      </CommonButton>
      <div class="hidden w-auto h-full md:flex items-center gap-3">
        <!-- logo -->
        <CommonLink
          variant="ghost"
          mode="normal"
          to="/"
          class="h-full max-h-12 md:max-h-16 rounded-full aspect-square flex justify-center items-center overflow-hidden"
        >
          <img
            src="@/assets/images/logo.jpg"
            alt="logo"
            class="h-full object-cover scale-[2]"
          />
        </CommonLink>
        <span
          class="text-nowrap font-bold text-dark tracking-tight opacity-85 pointer-events-none hidden lg:block"
          >E-commerce</span
        >
      </div>
      <!-- menu -->
      <div class="lg:flex justify-center items-center h-full hidden">
        <CommonLink
          variant="ghost"
          mode="normal"
          to="/"
          class="h-full hover:no-underline group text-dark tracking-tight text-base flex justify-center items-center px-3 transition-all"
          ><p class="group-hover:text-semigreen transition-all">
            Home
          </p></CommonLink
        >
        <CommonLink
          variant="ghost"
          mode="normal"
          to="/category"
          class="h-full hover:no-underline group text-dark tracking-tight text-base flex justify-center items-center px-3 transition-all"
          ><p class="group-hover:text-semigreen transition-all">
            Category
          </p></CommonLink
        >
        <!-- sub menu -->
        <!-- <CategoryItem /> -->
        <CommonLink
          variant="ghost"
          mode="normal"
          to="/products"
          class="h-full hover:no-underline hover:text-semigreen text-dark tracking-tight text-base flex justify-center items-center px-3 group"
          ><p class="group-hover:text-semigreen transition-all">
            Product
          </p></CommonLink
        >
        <CommonLink
          variant="ghost"
          mode="normal"
          to="/contact"
          class="h-full hover:no-underline hover:text-semigreen text-dark tracking-tight text-base flex justify-center items-center px-3 group"
          ><p class="group-hover:text-semigreen transition-all">
            Contact
          </p></CommonLink
        >
      </div>
    </div>
    <!-- right nav -->
    <div class="w-auto h-full flex justify-center items-center gap-7">
      <form
        method="post"
        class="hidden md:flex justify-center group items-center h-3/5 relative"
      >
        <input
          type="search"
          placeholder="Search..."
          class="pl-3 pr-12 h-full group text-dark transition-all outline-none bg-slate-50 border rounded-md border-semigray focus:ring-semigreen focus:ring-1 focus:border-none ring-opacity-70 max-w-52 w-full"
        />
        <CommonButton
          type="submit"
          variant="ghost"
          mode="icon"
          class="bg-transparent absolute h-full px-1 aspect-square border-none right-0 rounded-tr-md rounded-br-md flex justify-center items-center"
        >
          <IconsSearchIcon
            class="text-dark text-3xl opacity-70 group-focus:text-semigreen"
          />
        </CommonButton>
      </form>
      <div
        class="flex justify-center items-center md:gap-6 sm:gap-3 gap-3 px-3 md:px-0"
      >
        <!-- popup search bar -->
        <Popover class="relative h-full w-4/5 md:hidden">
          <PopoverButton
            class="flex items-center text-base font-normal text-dark h-full group"
          >
            <IconsSearchIcon
              class="text-3xl text-dark group-hover:text-semigreen"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute right-full translate-x-1/2 z-[9999] mt-5 flex max-w-64"
            >
              <div
                class="w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white shadow-2xl"
              >
                <div class="p-3">
                  <form
                    method="post"
                    class="flex justify-center items-center h-9 relative group"
                  >
                    <input
                      type="search"
                      placeholder="Search..."
                      class="pl-3 pr-12 h-full group text-dark transition-all outline-none bg-slate-50 border rounded-md border-semigray focus:ring-green-500 focus:ring-1 focus:border-none ring-opacity-70 w-full"
                    />
                    <CommonButton
                      variant="ghost"
                      mode="normal"
                      type="submit"
                      class="bg-transparent absolute h-full px-1 aspect-square border-none right-0 rounded-tr-md rounded-br-md flex justify-center items-center"
                    >
                      <IconsSearchIcon
                        class="text-dark text-3xl opacity-70 group-focus:text-semigreen"
                      />
                    </CommonButton>
                  </form>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <CommonLink
          variant="ghost"
          mode="icon"
          to="/wishlist"
          class="aspect-square h-full flex group"
        >
          <IconsFavoriteLineIcon
            class="text-3xl text-dark group-hover:text-semigreen"
          />
        </CommonLink>
        <CommonButton
          variant="ghost"
          mode="icon"
          class="aspect-square h-full flex group"
          @click="openCart"
        >
          <IconsCartIcon
            class="text-3xl text-dark group-hover:text-semigreen"
          />
        </CommonButton>
        <!-- user and login -->
        <CommonLink
          variant="ghost"
          mode="icon"
          to="/profile"
          class="h-full aspect-square rounded-full hover:bg-none flex justify-center items-center gap-1 group"
        >
          <IconsUserIcon
            class="text-dark text-3xl group-hover:text-semigreen"
          />
        </CommonLink>
        <CommonLink
          variant="ghost"
          mode="normal"
          to="/authentication"
          class="text-dark tracking-tight text-base transition-all hover:no-underline rounded-md py-1 px-3 group flex justify-center items-center"
          ><p class="group-hover:text-semigreen select-none">
            Login
          </p></CommonLink
        >
      </div>
    </div>
    <div class="fixed">
      <!-- cart -->
      <Cart />
    </div>
    <!-- mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-50" @close="open = false">
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
            class="fixed inset-0 bg-gray-500 z-50 bg-opacity-75 transition-opacity"
          ></div>
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden bg-transdark z-50">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full"
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
                <DialogPanel
                  class="pointer-events-auto relative w-screen max-w-md"
                >
                  <div
                    class="flex h-full flex-col items-start px-7 overflow-y-scroll bg-white py-6 shadow-xl"
                  >
                    <div
                      class="flex justify-center items-center h-16 cursor-pointer aspect-square transition-all rounded-md group"
                      @click="open = false"
                    >
                      <IconsCloseIcon
                        class="text-3xl pointer-events-none text-dark group-hover:text-semigreen"
                      />
                    </div>
                    <div class="relative mt-6 flex-1 px-3 w-full">
                      <div
                        class="lg:hidden w-full flex flex-col justify-start items-start h-full px-3"
                      >
                        <CommonLink
                          variant="ghost"
                          mode="normal"
                          to="/"
                          class="w-full h-12 text-dark tracking-tight text-base flex justify-start items-center hover:no-underline group"
                        >
                          <p class="group-hover:text-semigreen">Home</p>
                        </CommonLink>
                        <CommonLink
                          variant="ghost"
                          mode="normal"
                          to="/category"
                          class="w-full h-12 text-dark tracking-tight text-base flex justify-start items-center hover:no-underline group"
                        >
                          <p class="group-hover:text-semigreen">Category</p>
                        </CommonLink>
                        <!-- <div class="w-full h-12">
                          <CategoryItem class="w-full" />
                        </div> -->
                        <CommonLink
                          variant="ghost"
                          mode="normal"
                          to="/product"
                          class="w-full h-12 text-dark tracking-tight text-base flex justify-start items-center hover:no-underline group"
                        >
                          <p class="group-hover:text-semigreen">Product</p>
                        </CommonLink>
                        <CommonLink
                          variant="ghost"
                          mode="normal"
                          to="/contact"
                          class="w-full h-12 text-dark tracking-tight text-base flex justify-start items-center hover:no-underline group"
                        >
                          <p class="group-hover:text-semigreen">Contact</p>
                        </CommonLink>
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
import {ref, onMounted, onUnmounted, defineComponent} from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/vue";
import {useCartStore} from "../../stores/useCart";

let open = ref(false);
const cartStore = useCartStore();

const handleResize = () => {
  if (window.innerWidth >= 768) {
    open.value = false;
  }
};

const openCart = () => {
  cartStore.openCart();
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

defineComponent({
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    Popover,
    PopoverButton,
    PopoverPanel,
  },
});
</script>
