<template>
    <div class="w-full col-span-10 lg:col-span-7 flex flex-col gap-5">
      <div class="w-full flex flex-col gap-3 bg-slate-50 p-3 rounded-lg">
        <div class=" flex items-center flex-nowrap gap-3">
          <div class="rounded-full aspect-square h-12 md:h-16 overflow-hidden">
            <img :src="imageSample[0]" alt="imageAvt" />
          </div>
          <div class="flex flex-col justify-center gap-1">
            <div class="flex gap-1">
                <span class="font-semibold text-sm md:text-base tracking-tight">John Smith</span>
                <i class="font-light text-sm md:text-base opacity-50 tracking-tight">- March 10, 2024</i>
            </div>
            <div class="flex">
                <IconsStarFillIcon v-for="(rate, index) in 3" :key="index" class="text-xl" />
            </div>
          </div>
        </div>
        <p class="font-light text-sm md:text-base opacity-80 tracking-tight">So cool</p>
      </div>
      
    </div>
</template>

<script setup lang="ts">
import { imageSample } from '~/common';
</script>