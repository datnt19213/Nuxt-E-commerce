<template>
  <div class="w-full">
    <!-- category -->
    <div class="w-full px-3 md:px-5 lg:px-7 py-5 flex flex-col gap-7">
    <h1 class="py-7 text-2xl font-semibold text-dark tracking-tight border-b border-gray">Categories of product</h1>
    <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5 lg:gap-7">
      <div v-for="(category, index) in Categories" :key="index" class="col-span-1 min-w-36 w-full aspect-[0.7] rounded-lg lg:rounded-xl relative overflow-hidden flex flex-col justify-end items-center hover:no-underline shadow-md">
        <div class="w-full p-5 z-[1] flex flex-col justify-center items-start gap-3">
          <span class="tracking-tight font-semibold text-base md:text-xl text-white">{{ category.name }}</span>
          <CommonLink to="/product" variant="outline" mode="normal" class="md:h-10  border-white relative before:content-[''] before:w-0 before:h-full before:absolute before:bg-white before:top-0 before:left-0 overflow-hidden before:z-0 group hover:before:w-full before:transition-all flex items-center px-3 hover:no-underline">
            <span class="z-[1] text-white text-sm md:text-base relative group-hover:text-dark transition-all">Shop now</span>
          </CommonLink>
        </div>
        <div class="absolute top-0 bottom-0 w-full h-full z-0 brightness-75">
          <img :src="imageSample[0]" alt="category image" class="h-full w-auto object-cover object-center" />
        </div>
      </div>
    </div>
  </div>
  <!-- tag -->
  <div class="w-full px-3 md:px-5 lg:px-7 py-5 flex flex-col gap-7">
    <h1 class="py-7 text-2xl font-semibold text-dark tracking-tight border-b border-gray">Tags of product</h1>
    <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5 lg:gap-7">
      <CommonLink :to="`category/${tagtype.title}`" v-for="(tagtype, index) in tagCategories" :key="index" class="col-span-1 min-w-36 w-full aspect-[2] rounded-lg lg:rounded-xl relative overflow-hidden flex flex-col justify-center items-center hover:no-underline shadow-md">
        <div class="w-full p-5 z-[1] flex flex-col justify-center items-center gap-3">
          <span class="tracking-tight font-semibold text-base md:text-xl text-white">{{ tagtype.title }}</span>
          <!-- <CommonLink to="/product" variant="outline" mode="normal" class="md:h-10  border-white relative before:content-[''] before:w-0 before:h-full before:absolute before:bg-white before:top-0 before:left-0 overflow-hidden before:z-0 group hover:before:w-full before:transition-all flex items-center px-3 hover:no-underline">
            <span class="z-[1] text-white text-sm md:text-base relative group-hover:text-dark transition-all">Shop now</span>
          </CommonLink> -->
        </div>
        <div class="absolute top-0 bottom-0 w-full h-full z-0 brightness-75">
          <img :src="imageSample[1]" alt="category image" class="h-auto w-full object-cover object-center" />
        </div>
      </CommonLink>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import {Categories, imageSample, tagCategories} from "../../common";
</script>
