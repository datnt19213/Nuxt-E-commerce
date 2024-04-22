<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {useHelpersStore} from "../../stores/useHelpers";
import type {NumberType, NullType} from "~/types";

const {imageFallback} = useHelpersStore();

const props = defineProps({
  mainImage: {type: Object, required: true},
  gallery: {type: Object, required: true},
  node: {type: Object, required: true},
  activeVariation: {type: Object, required: false},
});

const primaryImage = computed(() => ({
  sourceUrl: props.mainImage.sourceUrl || "../../assets/images/placeholder.png",
  title: props.mainImage.title,
  altText: props.mainImage.altText,
  databaseId: props.mainImage.databaseId,
}));

const imageToShow = ref(primaryImage.value);

const galleryImages = computed(() => {
  // Add the primary image to the start of the gallery and remove duplicates
  return [primaryImage.value, ...props.gallery.nodes].filter(
    (img, index, self) =>
      index === self.findIndex((t) => t?.databaseId === img?.databaseId)
  );
});

const changeImage = (image: any) => {
  if (image) imageToShow.value = image;
};

const salePercentage = computed((): NumberType | NullType => {
  if (props.node.regularPrice !== null && props.node.salePrice !== null) {
    const salePrice = parseFloat(props.node.salePrice.replace(/\D/g, ""));
    const regularPrice = parseFloat(props.node.regularPrice.replace(/\D/g, ""));
    return Math.round(((salePrice - regularPrice) / regularPrice) * 100);
  }
  return null;
});

watch(
  () => props.activeVariation,
  (newVal) => {
    if (newVal?.image) {
      const foundImage = galleryImages.value.find(
        (img) => img.databaseId === newVal.image?.databaseId
      );
      if (foundImage) imageToShow.value = foundImage;
    }
  }
);
</script>

<template>
  <div
    class="md:col-span-5 lg:col-span-4 col-span-1 max-w-80 md:max-w-xl aspect-square h-full w-full flex flex-col gap-3"
  >
    <div class="w-full h-full overflow-hidden rounded-lg flex justify-center">
      <div class="w-auto h-full flex">
        <div class="w-full overflow-hidden relative">
          <span class="absolute bg-semired pointer-events-none select-none text-white opacity-70 px-1 rounded-md top-3 right-3">{{salePercentage}}%</span>
          <!-- <img
            :src="imageSample[0]"
            :alt="product[0].name"
            class="w-full h-full object-cover object-center"
          /> -->
          <NuxtImg
            class="w-full aspect-square object-cover object-center skeleton"
            fit="outside"
            :alt="imageToShow.altText || node.name"
            :title="imageToShow.title || node.name"
            :src="
              imageToShow.sourceUrl || '../../assets/images/placeholder.png'
            "
            fetchpriority="high"
            @error="imageFallback"
          />
        </div>
      </div>
    </div>
    <div class="w-full max-h-16 h-full flex justify-start gap-1">
      <CommonButton
        v-if="gallery.nodes.length"
        variant="ghost"
        class="h-full overflow-hidden rounded-lg bg-slate-200 aspect-square gap-1"
      >
        <!-- <img
          :src="imageSample[0]"
          :alt="product[0].name"
          class="w-full h-full object-cover object-center"
        /> -->
        <NuxtImg
          v-for="galleryImg in galleryImages"
          :key="galleryImg.databaseId"
          class="w-full h-full object-cover object-center skeleton scale-125"
          fit="outside"
          :src="galleryImg.sourceUrl"
          :alt="galleryImg.altText || node.name"
          :title="galleryImg.title || node.name"
          @click.native="changeImage(galleryImg)"
          loading="lazy"
          @error="imageFallback"
        />
      </CommonButton>
    </div>
  </div>
</template>
