<template>
  <div class="w-full bg-white px-5 flex flex-col justify-start items-center md:px-20 py-3 pt-16 shadow-top">
    <!-- top footer -->
    <div class="pb-7 flex lg:flex-row flex-col lg:justify-between lg:items-start items-center w-full gap-12">
      <!-- right bottom footer -->
      <div class="flex flex-col lg:max-w-72 justify-start items-start gap-5 w-full">
        <div class="w-auto h-16 flex items-center gap-3">
          <!-- logo -->
          <CommonLink
            to="/"
            variant="ghost"
            mode="icon"
            class="h-full max-h-12 md:max-h-16 aspect-square flex justify-center items-center overflow-hidden hover:brightness-100"
          >
            <img
              src="@/assets/images/logo.jpg"
              alt="logo"
              class="h-full object-cover scale-[2]"
            />
          </CommonLink>
          <span
            class="text-nowrap font-bold text-dark tracking-tight opacity-85 pointer-events-none block"
            >E-commerce</span
          >
        </div>
        <p class="tracking-tight text-base font-light text-dark opacity-70">
          {{footDesc}}
        </p>
        <Listbox as="div" v-model="selected" class="min-w-40 min-h-8">
          <div class="relative mt-2 h-full">
            <ListboxButton class="relative h-full w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm cursor-pointer border border-gray hover:outline-2 outline-gray sm:text-sm transition-all">
              <span class="ml-3 block truncate text-dark">{{ selected.name }} - {{ selected.value }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions class="absolute bottom-full z-10 mb-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption as="template" v-for="lang in langs" :key="lang.name" :value="lang" v-slot="{ active, selected }">
                  <li :class="[active ? 'bg-slate-100 text-dark' : 'text-dark', 'relative cursor-pointer select-none py-2 pl-3 pr-9']">
                    <span :class="[selected ? 'font-semibold text-green-400' : 'font-normal', 'ml-3 block truncate']">{{ lang.name }}</span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      
      </div>
      <!-- right top footer -->
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-between pt-5">
        <div v-for="sc in shortcuts" :key="sc.title" class="min-w-36 flex flex-col items-center justify-start col-span-1 gap-3 pb-3">
          <span class="text-dark tracking-tight w-full font-semibold text-md mb-1">{{ sc.title }}</span>
          <div class="w-full flex flex-col items-start justify-center gap-1"> 
            <CommonLink
              v-for="link in sc.shortLinks"
              :key="link.goto"
              :to="link.goto"
              variant="ghost"
              mode="normal"
              class=" text-dark p-0 text-base tracking-tight w-full"
            >
              {{ link.name }}
            </CommonLink>
          </div>
        </div>
      </div>
    </div>
    <!-- bottom footer -->
    <div
      class="w-full border-t pt-3 pb-9 border-t-gray flex flex-col md:flex-row justify-between items-center px-1 gap-3 md:px-5"
    >
      <span class="flex justify-center items-center h-full flex-nowrap gap-1">
        <p class="tracking-tight text-dark">Copyright by Store</p>
        <p class="-mt-3 tracking-tight text-dark">&copy;</p>
        <p class="tracking-tight text-dark">{{ date }}</p>
      </span>
      <div class="flex justify-center items-center h-full gap-3">
        <CommonLink
          v-for="(lk, index) in links"
          :key="index"
          :to="lk.goto"
          variant="ghost"
          mode="icon"
          class="rounded-full cursor-pointer"
        >
          <component
            :is="lk.icon"
            class="text-xl md:text-2xl text-dark opacity-90"
          />
        </CommonLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { footerShortcuts, socialLinks, footerDescription, languages } from "~/common";
import { Menu, MenuButton, MenuItem, MenuItems, Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { ChevronDownIcon, CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'


const date = new Date().getFullYear();
const links = socialLinks;
const shortcuts = footerShortcuts;
const footDesc = footerDescription;
const langs = languages;
const selected = ref(langs[23]);

defineComponent({
  components: {
    Menu, MenuButton, MenuItem, MenuItems, Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions,
    ChevronDownIcon, CheckIcon, ChevronUpDownIcon
  }
})


</script>
