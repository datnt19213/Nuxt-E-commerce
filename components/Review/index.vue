import { IconsStarFillIcon } from '#build/components';
<template>
  <div class="w-full grid grid-cols-10 gap-y-12 gap-x-7">
    <div class="w-full col-span-10 md::col-span-4 lg:col-span-3">
      <span class="text-dark font-semibold tracking-tight">
        No reviews yet
      </span>
      <!-- <span class="">
        10 reviews
        </span> -->
      <div class="w-full pt-3">
        <div class="w-full flex items-center justify-start gap-3">
          <div class="flex items-center w-fit">
            <span class="text-dark font-light">5</span>
            <IconsStarFillIcon class="text-2xl" />
          </div>
          <!-- 5 star -->
          <div
            class="before:w-1/2 h-2 w-full bg-gray rounded-full relative max-w-72 before:content[''] before:top-0 before:left-0 before:h-full before:bg-semiyellow before:absolute overflow-hidden"
          />
        </div>
        <div class="w-full flex items-center justify-start gap-3">
          <div class="flex items-center w-fit">
            <span class="text-dark font-light">4</span>
            <IconsStarFillIcon class="text-2xl" />
          </div>
          <!-- 4 star -->
          <div
            class="before:w-1/2 h-2 w-full bg-gray rounded-full relative max-w-72 before:content[''] before:top-0 before:left-0 before:h-full before:bg-semiyellow before:absolute overflow-hidden"
          />
        </div>
        <div class="w-full flex items-center justify-start gap-3">
          <div class="flex items-center w-fit">
            <span class="text-dark font-light">3</span>
            <IconsStarFillIcon class="text-2xl" />
          </div>
          <!-- 3 star -->
          <div
            class="before:w-1/2 h-2 w-full bg-gray rounded-full relative max-w-72 before:content[''] before:top-0 before:left-0 before:h-full before:bg-semiyellow before:absolute overflow-hidden"
          />
        </div>
        <div class="w-full flex items-center justify-start gap-3">
          <div class="flex items-center w-fit">
            <span class="text-dark font-light">2</span>
            <IconsStarFillIcon class="text-2xl" />
          </div>
          <!-- 2 star -->
          <div
            class="before:w-1/2 h-2 w-full bg-gray rounded-full relative max-w-72 before:content[''] before:top-0 before:left-0 before:h-full before:bg-semiyellow before:absolute overflow-hidden"
          />
        </div>
        <div class="w-full flex items-center justify-start gap-3">
          <div class="flex items-center w-fit">
            <span class="text-dark font-light">1</span>
            <IconsStarFillIcon class="text-2xl" />
          </div>
          <!-- 1 star -->
          <div
            class="before:w-1/2 h-2 w-full bg-gray rounded-full relative max-w-72 before:content[''] before:top-0 before:left-0 before:h-full before:bg-semiyellow before:absolute overflow-hidden"
          />
        </div>
      </div>
      <div
        class="pb-5 pt-12 border-b border-gray border-opacity-50 flex flex-col gap-5 w-full sm:max-w-96"
      >
        <div class="w-full">
          <h2 class="text-dark font-semibold text-xl tracking-tight">
            Share your thoughts
          </h2>
          <span class="text-dark font-light text-sm tracking-tight"
            >If you have used this product, we would love to hear about your
            experience.</span
          >
        </div>
        <CommonButton
          v-if="isReview"
          variant="outline"
          mode="normal"
          class="hover:bg-dark hover:text-white w-full"
          @click="hideFormReview()"
          >Close</CommonButton
        >
        <CommonButton
          v-if="!isReview"
          variant="fill"
          mode="normal"
          class="hover:opacity-80 w-full"
          @click="showFormReview()"
          >Write a Review</CommonButton
        >
        <form
          v-if="isReview"
          method="post"
          class="w-full p-3 flex flex-col gap-1 ring-1 ring-gray rounded-md"
        >
          <h2
            class="font-light text-dark text-sm tracking-tight opacity-80 w-full text-center"
          >
            How would you rate your experience with this product?
          </h2>
          <div class="w-full flex justify-center gap-1">
            <span class="font-light text-dark text-sm tracking-tight opacity-80"
              >What is your rating?</span
            ><span class="text-semired -mt-1">*</span>
          </div>
          <div class="w-full flex justify-center">
            <CommonButton
              type="button"
              variant="ghost"
              v-for="(star, index) in stars"
              :key="index"
              @mouseenter="highlightStars(index)"
              @mouseleave="resetStars"
              @click="selectStars(index)"
              class="cursor-pointer"
            >
              <IconsStarFillIcon
                :class="{
                  'text-4xl brightness-100 opacity-100 transition-all':
                    index < hoverIndex || index < selectedIndex,
                  'text-4xl brightness-0 opacity-10 transition-all':
                    index >= hoverIndex && index >= selectedIndex,
                }"
                class="text-2xl"
              />
            </CommonButton>
          </div>
          <div class="w-full py-5 flex flex-col gap-5">
            <div class="w-full flex flex-col item-start gap-1 col-span-1">
              <div class="w-full flex justify-start gap-1">
                <span
                  class="font-light text-dark text-sm tracking-tight opacity-80"
                >
                  How was your experience?
                </span>
                <span class="text-semired -mt-1">*</span>
              </div>
              <textarea
                type="contentRating"
                name="contentRating"
                id="contanedRating"
                class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70 min-h-20"
                placeholder="Your new password"
              ></textarea>
            </div>
            <div class="w-full flex flex-col item-start gap-1 col-span-1">
              <div class="w-full flex justify-start gap-1">
                <span
                  class="font-light text-dark text-sm tracking-tight opacity-80"
                >
                  Your mail
                </span>
                <span class="text-semired -mt-1">*</span>
              </div>
              <input
                type="mail"
                name="mailRating"
                id="mailRating"
                class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70"
                placeholder="Your new password"
              />
            </div>
            <CommonButton
              variant="fill"
              mode="normal"
              class="hover:opacity-80 w-full"
              >Submit</CommonButton
            >
          </div>
        </form>
      </div>
    </div>
    <RatingList />
  </div>
</template>

<script setup lang="ts">
import {computed, ref, onMounted} from "vue";
import {useProductDetailStore} from "../../stores/useProduct_detail";
import type {NumberType} from "~/types/old.index";
import {imageSample} from "~/common";

const productDetailStore = useProductDetailStore();

const isReview = computed(() => productDetailStore.isReview);
const hoverIndex = computed(() => productDetailStore.hoverIndex);
const selectedIndex = computed(() => productDetailStore.selectedIndex);

const stars = ref(5);

const highlightStars = (index: NumberType) => {
  productDetailStore.highlightStars(index);
};

const resetStars = () => {
  productDetailStore.resetStars();
};

const selectStars = (index: NumberType) => {
  productDetailStore.selectStars(index);
};

const showFormReview = () => {
  productDetailStore.showFormReview();
  resetStars();
};
const hideFormReview = () => {
  productDetailStore.hideFormReview();
};
</script>
