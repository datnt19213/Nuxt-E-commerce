<template>
  <div class="w-auto bg-white h-12 md:h-16">
    <Popover class="relative h-full">
      <PopoverButton class="flex items-center text-base font-normal lg:px-3 text-dark h-full gap-1 group outline-none">
        <span class="text-dark tracking-tight font-normal group-hover:text-semigreen transition-all">Category</span>
        <IconsArrowDownIcon class="text-2xl group-hover:text-semigreen transition-all" aria-hidden="true" />
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
          class="absolute left-1/2 z-[9999] mt-3 flex min-w-40 max-w-72 -translate-x-1/2 px-3s"
        >
          <div
            class="w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white shadow-2xl"
          >
            <div class="py-3">
              <div
                v-for="item in categories"
                :key="item.name"
                class="group relative flex gap-x-6 hover:bg-gray-50"
              >
                <CommonLink
                  :to="`/category/${item.id}`"
                  class="font-normal text-dark w-full h-12 hover:no-underline group bg-transparent flex justify-start items-center px-3"
                >
                  <p class="text-dark group-hover:text-semigreen">
                    {{ item.name }}
                  </p>
                </CommonLink>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/vue/24/outline'
import { defineComponent } from 'vue';
import { Categories } from "~/common";

defineComponent({
  components: {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    Popover, PopoverButton, PopoverPanel,
    ChevronDownIcon, PhoneIcon, PlayCircleIcon
  }
})

const categories = Categories;
</script>
