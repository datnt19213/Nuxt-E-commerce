<template>
  <div class="w-full">
    <div class="bg-white grid grid-cols-10 w-full relative">
      <CommonSidebar
        class="lg:col-span-3 xl:col-span-2 hidden lg:flex"
        v-on:closeFilter="closingFilter"
        :open="filterStore.isShow"
      />

      <Transition name="fade" mode="out-in">
        <div
          v-if="!!productsToShow.length"
          class="lg:col-span-7 xl:col-span-8 col-span-10 mx-auto max-w-2xl px-4 pb-16 pt-12 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-12"
        >
          <div class="w-full flex justify-between items-center px-3">
            <div
              class="flex items-center flex-nowrap gap-1 text-dark opacity-50"
            >
              <span class="font-light">Showing</span>
              <span class="font-semibold text-semiblue">{{
                productsToShow.length
              }}</span>
              <span class="font-light">to</span>
              <span class="font-semibold text-semiblue">{{ page }}</span>
              <span class="font-light">of</span>
              <span class="font-semibold text-semiblue">{{
                numberOfPages
              }}</span>
            </div>
            <div class="justify-center items-center hidden lg:flex">
              <CommonButton
                variant="outline"
                mode="normal"
                class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 h-9 aspect-square -p-3 border-gray relative rounded-tr-none rounded-br-none border-r-0 hover:bg-slate-50 transition-all group"
                @click="toggleSort"
              >
                <IconsSortIcon
                  :class="`${
                    sortingStore.isShow ? 'rotate-180' : 'rotate-0'
                  } group-hover:text-semigreen text-2xl absolute transform transition-all`"
                />
              </CommonButton>
              <Menu as="div" class="relative inline-block text-left">
                <MenuButton
                  class="group inline-flex justify-between items-center px-3 min-w-44 border h-9 border-gray rounded-tr-md rounded-br-md hover:bg-slate-50 transition-all"
                >
                  <p
                    class="select-none text-dark tracking-tight text-sm transition-all"
                  >
                    {{ sortingStore.sortName }}
                  </p>
                  <IconsArrowDownIcon
                    class="pointer-events-none text-3xl flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>

                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div class="py-1">
                      <MenuItem
                        v-for="option in sortFilter"
                        :key="option.name"
                        v-slot="{active}"
                      >
                        <CommonButton
                          variant="ghost"
                          mode="normal"
                          :class="[
                            option.id === sortingStore.sortValue
                              ? 'font-medium text-semigreen'
                              : 'text-gray-500',
                            active ? 'bg-slate-50' : '',
                            'block text-dark px-4 py-2 text-sm rounded-none w-full',
                          ]"
                          @click="setSort(option.id, option.name)"
                          >{{ option.name }}</CommonButton
                        >
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
            <CommonButton
              @click="openingFilter()"
              type="button"
              variant="outline"
              mode="icon"
              class="lg:hidden rounded-md flex justify-center items-center border-none ring-1 ring-gray-300 bg-white shadow-sm hover:bg-slate-50 transition-all"
            >
              <IconsFilterIcon
                class="text-2xl text-dark opacity-70 pointer-events-none"
              />
            </CommonButton>
          </div>

          <!-- product list -->
          <TransitionGroup
            name="shrink"
            tag="div"
            mode="in-out"
            class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            <ProductCard
              v-for="(product, i) in productsToShow"
              :key="product.id || i"
              :node="product"
              :index="i"
            />
          </TransitionGroup>
          <!-- pagination -->
          <div
            class="flex items-center justify-center bg-white px-5 py-3 sm:px-6"
          >
            <nav
              v-if="numberOfPages && numberOfPages > 1"
              class="isolate inline-flex -space-x-px rounded-md shadow-sm gap-1"
              aria-label="Pagination"
            >
              <NuxtLink
                :to="prevSrc(page)"
                :disabled="page === 1"
                :class="`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray hover:bg-gray-50 focus:z-20 focus:outline-offset-0 rounded-tr-none rounded-br-none ${
                  page !== 1 ? '' : 'cursor-not-allowed opacity-30'
                }`"
                :aria-disabled="page == 1"
                aria-label="Previous"
              >
                <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
              </NuxtLink>
              <NuxtLink
                v-for="pageNumber in numberOfPages"
                :key="pageNumber"
                :to="numberSrc(pageNumber)"
                :aria-current="pageNumber === page ? 'page' : undefined"
                :class="[
                  'relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray focus:z-20 outline-dark rounded-sm hover:brightness-110 transition-all aspect-square',
                  pageNumber === page ? 'bg-dark text-white' : 'bg-white text-dark',
                ]"
              >
                <p
                  :class="`${
                    pageNumber === page ? 'text-white font-bold' : 'text-dark'
                  }`"
                >
                  {{ pageNumber }}
                </p>
              </NuxtLink>
              <NuxtLink
                :to="nextSrc(page)"
                class="next"
                :disabled="page === numberOfPages"
                :aria-disabled="page === numberOfPages"
                aria-label="Next"
                :class="`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray hover:bg-gray-50 focus:z-20 focus:outline-offset-0 rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md ${
                  page !== numberOfPages ? '' : 'cursor-not-allowed opacity-30'
                }`"
              >
                <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
              </NuxtLink>
            </nav>
          </div>
        </div>
        <ProductEmpty v-else />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
// import {products, replacing, imgRand, sortFilter} from "~/common";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/vue/20/solid";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {computed, ref, onMounted, watch} from "vue";
import type {
  BooleanType,
  NumberType,
  Product,
  StringType,
  VoidType,
} from "~/types";
import {useRoute} from "vue-router";
import {useHelpersStore} from "../../stores/useHelpers";
import {useProductsStore} from "../../stores/useProduct";
import {useSortingStore} from "../../stores/useSorting";
import {useFilterStore} from "../../stores/useFiltering";
import {sortFilter} from "~/common";
import { useAsyncGql } from "#imports";
import {getAllProducts} from "../../api/products"

// const isOpen = ref(false);
// const sort = ref(0);
// const isSort = ref(false);
// const sortName = ref('');

const route = useRoute();
const sortingStore = useSortingStore();
const filterStore = useFilterStore();

const helperStore = useHelpersStore();
const productStore = useProductsStore();
const {productsPerPage} = useHelpersStore();
const {formatURI} = useHelpersStore();
// const page = ref(parseInt(route.params.pageNumber as string) || 1);

async function fetchData() {
  // const {data} = await useAsyncGql("getProducts");
  const allProducts = (getAllProducts() as unknown as Product[]) || [];
  console.log("all product: " + allProducts + " End list product here" )
  productStore.setProducts(allProducts);
}
fetchData();

onMounted(() => {
  if (!helperStore.isQueryEmpty) productStore.updateProductList();
});

watch(
  () => route.query,
  () => {
    if (route.name !== "products") return;
    productStore.updateProductList();
    console.log(productStore.updateProductList())
  }
);

const productsToShow = computed(() =>
  productStore.products.slice(
    (page.value - 1) * productsPerPage,
    page.value * productsPerPage
  )
);

const setSort = (val: NumberType, name: StringType) => {
  sortingStore.setSort(val, name);
};
const toggleSort = () => {
  sortingStore.toggleSort();
};

const openingFilter = () => {
  filterStore.openFilter();
};

const closingFilter = () => {
  filterStore.closeFilter();
};

onMounted(() => {
  helperStore.setRoute(route)
  setSort(sortFilter[0].id, sortFilter[0].name);
});

const currentQuery = computed(() => {
  const query = route.query;
  const queryKeys = Object.keys(query);
  let currentQuery = "";
  if (queryKeys.length > 0) {
    queryKeys.forEach((key, index) => {
      currentQuery +=
        index === 0 ? `${key}=${query[key]}` : `&${key}=${query[key]}`;
    });
  }
  return formatURI(currentQuery);
});

const page = ref(
  route.params.pageNumber ? parseInt(route.params.pageNumber as string) : 1
);
const numberOfPages = computed<number>(() =>
  Math.ceil(productStore.products.length / productsPerPage || 1)
);

const prevSrc = (pageNumber: NumberType) => {
  if (currentQuery.value === "") {
    return formatURI(
      `/products/page/${pageNumber > 1 ? pageNumber - 1 : pageNumber}`
    );
  } else {
    return formatURI(
      pageNumber > 1
        ? `/products/page/${pageNumber - 1}/?${currentQuery.value}`
        : `/products/page/${pageNumber}/?${currentQuery.value}`
    );
  }
};

const nextSrc = (pageNumber: number) => {
  if (currentQuery.value === "") {
    return formatURI(
      `/products/page/${
        pageNumber < numberOfPages.value ? pageNumber + 1 : pageNumber
      }`
    );
  } else {
    return formatURI(
      pageNumber < numberOfPages.value
        ? `/products/page/${pageNumber + 1}/?${currentQuery.value}`
        : `/products/page/${pageNumber}/?${currentQuery.value}`
    );
  }
};

const numberSrc = (pageNumber: number) => {
  if (currentQuery.value === "") {
    return formatURI(`/products/page/${pageNumber}`);
  } else {
    return formatURI(`/products/page/${pageNumber}/?${currentQuery.value}`);
  }
};

// pagination

// const productList = ref<Product[]>(products);
// const currentPage = ref<any>(1);
// const itemsPerPage = 24;
// const maxDisplayedPages = 3;
// const currentActivePage = ref<NumberType | StringType>(1);
// const currItemsOnPage = ref<NumberType>(0);

// const totalPages = computed(() => {
//   return Math.ceil(productList.value.length / itemsPerPage);
// });

// const displayedProducts = computed<Product[]>(() => {
//   const startIndex = (currentPage.value - 1) * itemsPerPage;
//   const endIndex = currentPage.value * itemsPerPage;
//   // console.log("current page: " + currentPage.value);
//   return productList.value.slice(startIndex, endIndex);
// });

// onMounted(() => {
//   calculateCurrItemsOnPage();
// });

// watch(currentPage, () => {
//   calculateCurrItemsOnPage();
// });

// function calculateCurrItemsOnPage() {
//   const startIndex = (currentPage.value - 1) * itemsPerPage;
//   const endIndex = Math.min(startIndex + itemsPerPage, productList.value.length);
//   currItemsOnPage.value = Math.max(0, endIndex - startIndex);
// }

// const isCurrentPage = (pageNumber: NumberType | StringType): BooleanType => {
//   // console.log("is current page: " + pageNumber);
//   return currentPage.value == pageNumber;
// };

// const changePage = (pageNumber: NumberType | StringType): VoidType => {
//   currentPage.value = pageNumber;
//   currentActivePage.value = pageNumber;
//   // console.log(currentPage.value);
//   // console.log(typeof currentPage.value);
//   // console.log(pageNumber);
//   // console.log(typeof pageNumber);

// };

// const prevPage = (): VoidType => {
//   if (currentPage.value > 1) {
//     currentPage.value--;
//     currentActivePage.value = currentPage.value;
//   }
//   console.log(currentPage.value);
// };

// const nextPage = (): VoidType => {
//   if (currentPage.value < totalPages.value) {
//     currentPage.value++;
//     currentActivePage.value = currentPage.value;
//   }
//   console.log(currentPage.value);
// };

// const getPageNumbers = (): (NumberType | StringType)[] => {
//   const pageNumbers: (NumberType | StringType)[] = [];
//   const startIndex = Math.max(
//     currentPage.value - Math.floor(maxDisplayedPages / 2),
//     1
//   );
//   const endIndex = Math.min(
//     startIndex + maxDisplayedPages - 1,
//     totalPages.value
//   );

//   if (totalPages.value <= maxDisplayedPages) {
//     for (let i = 1; i <= totalPages.value; i++) {
//       pageNumbers.push(i);
//     }
//   } else {
//     if (startIndex > 1) {
//       pageNumbers.push(1);
//       if (startIndex > 2) {
//         pageNumbers.push("...");
//       }
//     }

//     for (let i = startIndex; i <= endIndex; i++) {
//       pageNumbers.push(i as number);
//     }

//     if (endIndex < totalPages.value) {
//       if (endIndex < totalPages.value - 1) {
//         pageNumbers.push("...");
//       }
//       pageNumbers.push(totalPages.value);
//     }
//   }

//   return pageNumbers;
// };
</script>
