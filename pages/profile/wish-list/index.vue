<template>
  <div class="w-full pb-12 flex flex-col gap-7 pt-5">
    <form
      method="post"
      class="hidden md:flex justify-center group items-center h-3/5 relative w-full py-3"
    >
      <input
        type="search"
        placeholder="Search..."
        class="w-full py-1.5 pl-3 pr-12 h-full group text-dark transition-all outline-none bg-slate-50 border rounded-md border-semigray focus:ring-semigreen focus:ring-1 focus:border-none ring-opacity-70"
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
    <div class="w-full flex flex-col gap-5">
      <!-- product wish list -->
      <div
        class="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="(product, index) in displayedProducts"
          :key="index"
          class="bg-white shadow-lg overflow-hidden rounded-xl flex flex-col gap-1 pb-3 transition-all duration-300 animate-fade hover:no-underline relative"
        >
          <CommonLink
            :to="`/product/${replacing(product.name)}`"
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 cursor-pointer"
          >
            <img
              :src="imgRand"
              :alt="product.name"
              class="h-full w-full object-cover object-center hover:scale-110 transition-all duration-300 ease-in"
            />
          </CommonLink>
          <span
            class="absolute bg-semired pointer-events-none select-none text-white opacity-70 px-1 rounded-md top-3 right-3"
            >-30%</span
          >
          <div class="flex flex-col gap-3 px-3">
            <h3 class="mt-4 text-sm text-gray-700 text-nowrap text-ellipsis overflow-hidden">{{ product.name }}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              <span class="text-dark opacity-50 px-3 line-through"
                >${{ product.price }}</span
              >${{ product.price }}
            </p>
            <CommonButton
              variant="fill"
              mode="normal"
              class="flex items-center border border-dark justify-center w-full overflow-hidden relative group before:content-[''] before:h-0 before:w-full before:bg-white before:absolute before:bottom-0 before:left-0 before:z-[1] hover:before:h-full transition-all before:duration-150 hover:text-dark"
            >
              <p
                class="z-[2] relative transition-all group-hover:text-dark text-white"
              >
                Add to cart
              </p>
            </CommonButton>
          </div>
        </div>
      </div>

      <!-- pagination -->

      <div class="flex items-center justify-center bg-white px-5 py-3 sm:px-6">
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm gap-1"
          aria-label="Pagination"
        >
          <button
            @click="prevPage"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray hover:bg-gray-50 focus:z-20 focus:outline-offset-0 rounded-tr-none rounded-br-none"
          >
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            v-for="(pageNumber, index) in getPageNumbers()"
            :key="index"
            @click="typeof pageNumber === 'number' && changePage(pageNumber)"
            :aria-current="
              currentPageWish.value === pageNumber ? 'page' : undefined
            "
            :class="[
              'relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray focus:z-20 outline-dark rounded-sm hover:brightness-110 transition-all aspect-square',
              isCurrentPageWish(pageNumber)
                ? 'bg-dark text-white'
                : 'bg-white text-dark',
            ]"
          >
            <p
              :class="`${
                isCurrentPageWish(pageNumber) ? 'text-white font-bold' : 'text-dark'
              }`"
            >
              {{ pageNumber }}
            </p>
          </button>
          <button
            @click="nextPage"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray hover:bg-gray-50 focus:z-20 focus:outline-offset-0 rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md"
          >
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products, replacing, imgRand, sortFilter } from "~/common";
import {computed, ref, onMounted, watch} from "vue";
import type { BooleanType, NumberType, Product, StringType, VoidType } from "~/types/old.index";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";

const productListWish = ref<Product[]>(products);
const currentPageWish = ref<any>(1);
const itemsPerPageWish = 9;
const maxDisplayedPagesWish = 3;
const currentActivePageWish = ref<NumberType | StringType>(1);
const currItemsOnPageWish = ref<NumberType>(0);


const totalPages = computed(() => {
  return Math.ceil(productListWish.value.length / itemsPerPageWish);
});

const displayedProducts = computed<Product[]>(() => {
  const startIndex = (currentPageWish.value - 1) * itemsPerPageWish;
  const endIndex = currentPageWish.value * itemsPerPageWish;
  // console.log("current page: " + currentPageWish.value);
  return productListWish.value.slice(startIndex, endIndex);
});

onMounted(() => {
  calculateCurrItemsOnPage();
});

watch(currentPageWish, () => {
  calculateCurrItemsOnPage();
});

function calculateCurrItemsOnPage() {
  const startIndex = (currentPageWish.value - 1) * itemsPerPageWish;
  const endIndex = Math.min(startIndex + itemsPerPageWish, productListWish.value.length);
  currItemsOnPageWish.value = Math.max(0, endIndex - startIndex);
}

const isCurrentPageWish = (pageNumber: NumberType | StringType): BooleanType => {
  // console.log("is current page: " + pageNumber);
  return currentPageWish.value == pageNumber;
};

const changePage = (pageNumber: NumberType | StringType): VoidType => {
  currentPageWish.value = pageNumber;
  currentActivePageWish.value = pageNumber;
  // console.log(currentPageWish.value);
  // console.log(typeof currentPageWish.value);
  // console.log(pageNumber);
  // console.log(typeof pageNumber);

};

const prevPage = (): VoidType => {
  if (currentPageWish.value > 1) {
    currentPageWish.value--;
    currentActivePageWish.value = currentPageWish.value;
  }
  console.log(currentPageWish.value);
};

const nextPage = (): VoidType => {
  if (currentPageWish.value < totalPages.value) {
    currentPageWish.value++;
    currentActivePageWish.value = currentPageWish.value;
  }
  console.log(currentPageWish.value);
};

const getPageNumbers = (): (NumberType | StringType)[] => {
  const pageNumbers: (NumberType | StringType)[] = [];
  const startIndex = Math.max(
    currentPageWish.value - Math.floor(maxDisplayedPagesWish / 2),
    1
  );
  const endIndex = Math.min(
    startIndex + maxDisplayedPagesWish - 1,
    totalPages.value
  );

  if (totalPages.value <= maxDisplayedPagesWish) {
    for (let i = 1; i <= totalPages.value; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (startIndex > 1) {
      pageNumbers.push(1);
      if (startIndex > 2) {
        pageNumbers.push("..."); 
      }
    }

    for (let i = startIndex; i <= endIndex; i++) {
      pageNumbers.push(i as number);
    }

    if (endIndex < totalPages.value) {
      if (endIndex < totalPages.value - 1) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages.value);
    }
  }

  return pageNumbers;
};

</script>