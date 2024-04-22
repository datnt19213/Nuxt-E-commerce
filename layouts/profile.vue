<template>
  <div class="w-full pb-3 xl:px-16 lg:px-12 px-6 bg-white">
    <CommonButton
      variant="ghost"
      mode="icon"
      @click="openProfileMenu"
      class="lg:hidden"
    >
      <IconsMenuIcon class="text-3xl" />
    </CommonButton>
    <div class="w-full grid grid-cols-10 gap-5">
      <div class="hidden lg:col-span-3 lg:flex flex-col w-full gap-7">
        <ProfileSidebar />
      </div>
      <div class="col-span-10 lg:col-span-7 w-full" id="">
        <slot />
      </div>
    </div>
    <!-- mobile -->
    <TransitionRoot as="template" :show="isShow">
      <Dialog as="div" class="relative" @close="closeProfileMenu">
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
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden bg-transdark z-50">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full"
            >
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="-translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="-translate-x-full"
              >
                <DialogPanel
                  class="pointer-events-auto relative w-screen max-w-md"
                >
                  <div
                    class="flex h-full flex-col items-end overflow-y-scroll bg-white shadow-xl"
                  >
                    <div
                      class="flex justify-center items-center w-16 h-16 cursor-pointer aspect-square transition-all rounded-md group"
                      @click="closeProfileMenu"
                    >
                      <IconsCloseIcon
                        class="text-3xl pointer-events-none text-dark group-hover:text-green-500"
                      />
                    </div>
                    <div class="relative flex-1 px-3 w-full py-3">
                      <ProfileSidebar />
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
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Popover,
  PopoverButton,
  PopoverPanel,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Disclosure,
  DisclosureButton,
} from "@headlessui/vue";
import {computed, ref} from "vue";
import {useProfileStore} from "../stores/useProfile";
import type {StringType} from "~/types/old.index";

const profileStore = useProfileStore();
const isShow = computed(() => profileStore.isShow);

const openProfileMenu = () => {
  profileStore.openProfileMenu();
};
const closeProfileMenu = () => {
  profileStore.closeProfileMenu();
};
</script>
