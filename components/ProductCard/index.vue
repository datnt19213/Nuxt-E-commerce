<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {useRoute} from "vue-router";
import type {AnyType, NullType, NumberType, StringType} from "~/types";
import {useHelpersStore} from "../../stores/useHelpers";

const route = useRoute();
const helperStore = useHelpersStore();
const props = defineProps({
  node: {type: Object, default: null},
  index: {type: Number, default: 1},
});

const filterQuery = ref(route.query.filter);
const paColor = ref(
  (filterQuery.value as StringType)
    ?.split("pa_color[")[1]
    ?.split("]")[0]
    ?.split(",") || []
);

// watch filterQuery
watch(
  () => route.query,
  () => {
    filterQuery.value = route.query.filter;
    paColor.value =
      (filterQuery.value as StringType)
        ?.split("pa_color[")[1]
        ?.split("]")[0]
        ?.split(",") || [];
  }
);

const mainImage = computed(() => props.node?.image?.producCardSourceUrl);

const colorVariableImage = computed(() => {
  if (paColor.value.length) {
    const activeColorImage = props.node?.variations?.nodes.filter(
      (variation: {
        attributes: {nodes: AnyType[]};
        slug: StringType | StringType[];
      }) => {
        const hasMatchingAttributes = variation.attributes.nodes.some(
          (attribute: {value: StringType | StringType[]}) =>
            paColor.value.some((color: AnyType) =>
              attribute.value.includes(color)
            )
        );
        const hasMatchingSlug = paColor.value.some((color: any) =>
          variation.slug.includes(color)
        );
        return hasMatchingAttributes || hasMatchingSlug;
      }
    );
    if (activeColorImage?.length) return activeColorImage[0].image;
  }
  return null;
});

const name: AnyType = computed(() => {
  if (props.node.name && props.node.name.length > 50) {
    return props.node.name.substring(0, 50) + "...";
  } else {
    return props.node.name;
  }
});

// sale badge
const salePercentage = computed((): NumberType | NullType => {
  if (props.node.regularPrice !== null && props.node.salePrice !== null) {
    const salePrice = parseFloat(props.node.salePrice.replace(/\D/g, ""));
    const regularPrice = parseFloat(props.node.regularPrice.replace(/\D/g, ""));
    return Math.round(((salePrice - regularPrice) / regularPrice) * 100);
  }
  return null;
});
</script>

<template>
  <div
    class="bg-white shadow-lg overflow-hidden rounded-xl flex flex-col transition-all duration-300 animate-fade hover:no-underline relative justify-between"
  >
    <CommonLink
      :to="`/products/${helperStore.formatURI(node.slug)}`"
      :title="node.name"
      class="aspect-square w-full rounded-none overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 cursor-pointer flex justify-center items-center bg-white"
    >
      <NuxtImg
        v-if="!colorVariableImage"
        :src="mainImage || '../../assets/images/placeholder.png'"
        :alt="node.image?.altText || node.name"
        :title="node.image?.title || node.name"
        :loading="index <= 3 ? 'eager' : 'lazy'"
        fit="outside"
        class="skeleton object-center scale-95 hover:scale-100 transition-all duration-300 ease-in"
        densities="x1 x2"
        @error="helperStore.imageFallback"
      />
      <img
        v-if="colorVariableImage"
        :src="colorVariableImage.producCardSourceUrl"
        :alt="colorVariableImage?.altText || node.name"
        :title="colorVariableImage?.title || node.name"
        loading="lazy"
        class="h-full w-full object-cover object-center hover:scale-110 transition-all duration-300 ease-in skeleton scale-95"
      />
    </CommonLink>
    <span
      v-if="salePercentage"
      class="absolute bg-semired pointer-events-none select-none text-white opacity-70 px-1 rounded-md top-3 right-3"
      >{{ salePercentage }}%</span
    >
    <div class="flex flex-col gap-1.5 px-3 pb-3">
      <h3 class="text-sm text-gray-700 tracking-tight" :title="node.name">
        {{ name }}
      </h3>
    </div>
    <div class="w-full p-3 flex flex-col gap-1.5">
      <span
        class="mt-1 tracking-tight text-base flex gap-3 font-medium text-dark"
      >
        <span
          :class="{'text-dark opacity-50 line-through': node.salePrice}"
          v-html="node.regularPrice"
        />
        <span v-if="node.salePrice" class="text-dark" v-html="node.salePrice" />
      </span>
      <AddToCart :node="node" mode="card" />
    </div>
  </div>
</template>
