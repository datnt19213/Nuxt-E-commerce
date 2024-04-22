<template>
  <div class="w-full">
    <div class="w-full px-3 md:px-5 lg:px-7 py-5 flex flex-col gap-7">
      <h1
        class="py-7 text-2xl font-semibold text-dark tracking-tight border-b border-gray"
      >
        {{ $route.params.id }}
      </h1>
      <div
        class="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-5 lg:gap-7"
      >
        <CommonLink
          :to="`/product`"
          v-for="(tag, index) in tagsList"
          :key="index"
          class="col-span-1 min-w-28 bg-white w-full aspect-[2.8] rounded-lg lg:rounded-xl relative overflow-hidden flex flex-col justify-center items-center hover:no-underline shadow hover:shadow-md p-3"
        >
            <span class="tracking-tight font-semibold text-sm md:text-base lg:text-lg opacity-80 text-dark">
                {{ tag.name }}
            </span>
        </CommonLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import { tagCategories } from "../../common";
import type { NullType, StringType, TagItems } from "~/types/old.index";
const route = useRoute();

let tagsList = [];

const getTagsByTitleId = (titleId: StringType): TagItems[] | NullType => {
  const tagCategory = tagCategories.find(category => category.title === titleId);
  if (!tagCategory) {
    return null;
  }
    tagsList = tagCategory.tags;
}


onMounted(() => {
    getTagsByTitleId(route.params.id.toString());
    console.log("tagsList: " + tagsList)
})

</script>
