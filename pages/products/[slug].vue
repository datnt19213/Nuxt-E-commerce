<template>
  <div class="bg-white pb-12">
    <div class="pt-6 px-6 md:px-12 flex flex-col gap-5">
      <!-- breadcrumb -->
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <!-- <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id"> -->
          <li>
            <div class="flex items-center">
              <CommonLink
                to="/"
                variant="ghost"
                mode="normal"
                class="mr-2 text-sm font-medium text-gray-900"
              >
                Home
              </CommonLink>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <CommonLink
                to="/product"
                variant="ghost"
                mode="normal"
                class="mr-2 text-sm font-medium text-gray-900"
              >
                Product
              </CommonLink>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <CommonLink
              :to="`/${replacing($route.params.slug.toString())}`"
              variant="ghost"
              mode="normal"
              class="mr-2 text-sm font-medium text-gray-900"
            >
              {{ replacing($route.params.slug.toString()) }}
            </CommonLink>
          </li>
        </ol>
      </nav>

      <div class="grid grid-cols-1 md:grid-cols-10 place-items-center lg:gap-12 md:gap-5">
        <ImageGallery
          v-if="product.image"
          class="relative flex-1"
          :main-image="product.image"
          :gallery="product.galleryImages ? product.galleryImages : {}"
          :node="type"
          :activeVariation="activeVariation || {}"
        />
        <NuxtImg
          v-else
          class="relative flex-1 skeleton"
          src="../../assets/images/placeholder.png"
          :alt="product?.name || 'Product'"
        />
        <div
          class="col-span-1 md:col-span-5 lg:col-span-6 w-full flex flex-col justify-start h-full"
        >
          <div class="flex flex-col gap-5">
            <h3 class="text-2xl font-semibold text-dark">{{ product.name }}</h3>
            <p class="text-2xl font-semibold gap-3 text-dark flex items-center">
              <span
                :class="{
                  'text-dark opacity-50 line-through': product.regularPrice,
                }"
                v-html="`$${product.regularPrice}`"
              />
              <span
                v-if="product.salePrice"
                class="text-dark"
                v-html="`$${product.salePrice}`"
              />
            </p>
          </div>
          <div class="flex item">
            <div class="flex items-center">
              <IconsStarFillIcon class="text-xl" />
              <IconsStarFillIcon class="text-xl" />
              <IconsStarFillIcon class="text-xl" />
              <IconsStarFillGhostIcon class="text-xl" />
              <IconsStarFillGhostIcon class="text-xl" />
            </div>
            <span class="text-xs">({{ product.reviewCount }})</span>
          </div>
          <div class="pt-5">
            <span class="text-sm opacity-80">Available:&nbsp;</span>
            <span class="text-sm text-semigreen">{{
              product.stockStatus
            }}</span>
            <!-- Instock -->
          </div>
          <div>
            <span class="text-sm opacity-80"
              >SKU:&nbsp;</span
            >
            <span class="text-sm text-semiblue uppercase">{{
              product.sku ? product.sku : "Unknown"
            }}</span>
            <!-- T-shirt Stock -->
          </div>
          <div class="w-full py-8">
            <div
              class="w-full tracking-tight font-light opacity-90 text-base"
              v-html="product.shortDescription"
            />
          </div>
          <div class="hidden w-full py-3 md:flex flex-col justify-end">
            <div class="w-full py-5 flex md:flex-col justify-between gap-5">
              <!-- list color -->
              <div
                :class="`transition-all duration-300 flex flex-row gap-1 justify-start w-full`"
              >
                <div class="inline-flex items-center gap-3 w-fit group">
                  <label
                    class="relative flex items-center rounded-full cursor-pointer"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                  >
                    <input
                      :id="`filter-black-0`"
                      :name="`color-cart`"
                      value="black"
                      type="radio"
                      :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-black border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-black hover:before:opacity-5 hover:border-black`"
                      v-model="selectedOption"
                      @click="handleClick('black')"
                      @change="handleChange('black')"
                    />
                    <span
                      :class="`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          class="text-white"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <div class="inline-flex items-center gap-3 w-fit group">
                  <label
                    class="relative flex items-center rounded-full cursor-pointer"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                  >
                    <input
                      :id="`filter-blue-1`"
                      :name="`color-cart`"
                      value="blue"
                      type="radio"
                      :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-blue-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-blue-500 hover:before:opacity-5 hover:border-blue-500`"
                      v-model="selectedOption"
                      @click="handleClick('blue')"
                      @change="handleChange('blue')"
                    />
                    <span
                      :class="`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          class="text-white"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <div class="inline-flex items-center gap-3 w-fit group">
                  <label
                    class="relative flex items-center rounded-full cursor-pointer"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                  >
                    <input
                      :id="`filter-gray-2`"
                      :name="`color-cart`"
                      value="gray"
                      type="radio"
                      :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-gray border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-gray hover:before:opacity-5 hover:border-gray`"
                      v-model="selectedOption"
                      @click="handleClick('gray')"
                      @change="handleChange('gray')"
                    />
                    <span
                      :class="`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          class="text-white"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <div class="inline-flex items-center gap-3 w-fit group">
                  <label
                    class="relative flex items-center rounded-full cursor-pointer"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                  >
                    <input
                      :id="`filter-green-3`"
                      :name="`color-cart`"
                      value="green"
                      type="radio"
                      :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-green-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-green-500 hover:before:opacity-5 hover:border-green-500`"
                      v-model="selectedOption"
                      @click="handleClick('green')"
                      @change="handleChange('green')"
                    />
                    <span
                      :class="`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          class="text-white"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <div class="inline-flex items-center gap-3 w-fit group">
                  <label
                    class="relative flex items-center rounded-full cursor-pointer"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                  >
                    <input
                      :id="`filter-red-5`"
                      :name="`color-cart`"
                      value="red"
                      type="radio"
                      :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-red-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-red-500 hover:before:opacity-5 hover:border-red-500`"
                      v-model="selectedOption"
                      @click="handleClick('red')"
                      @change="handleChange('red')"
                    />
                    <span
                      :class="`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          fill-rule="evenodd"
                          class="text-white"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <!-- list size -->
              <div
                :class="`transition-all duration-300 flex flex-row gap-1 justify-end md:justify-start w-full`"
              >
                <div class="inline-flex items-center gap-3 w-fit group">
                  <label
                    class="relative flex items-center justify-center rounded-full cursor-pointer"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                  >
                    <input
                      :id="`filter-red-5`"
                      :name="`size-cart`"
                      value="S"
                      type="radio"
                      :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-white border-gray checked:bg-semigreen transition-all `"
                      v-model="selectedSizeOption"
                      @click="handleSizeClick('S')"
                      @change="handleSizeChange('S')"
                    />
                    <span
                      class="pointer-events-none select-none absolute text-xs"
                      >S</span
                    >
                  </label>
                </div>
                <div class="inline-flex items-center gap-3 w-fit group">
                  <label
                    class="relative flex items-center justify-center rounded-full cursor-pointer"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                  >
                    <input
                      :id="`filter-red-5`"
                      :name="`size-cart`"
                      value="M"
                      type="radio"
                      :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-white border-gray checked:bg-semigreen transition-all `"
                      v-model="selectedSizeOption"
                      @click="handleSizeClick('M')"
                      @change="handleSizeChange('M')"
                    />
                    <span
                      class="pointer-events-none select-none absolute text-xs"
                      >M</span
                    >
                  </label>
                </div>
                <div class="inline-flex items-center gap-3 w-fit group">
                  <label
                    class="relative flex items-center justify-center rounded-full cursor-pointer"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                  >
                    <input
                      :id="`filter-red-5`"
                      :name="`size-cart`"
                      value="L"
                      type="radio"
                      :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-white border-gray checked:bg-semigreen transition-all `"
                      v-model="selectedSizeOption"
                      @click="handleSizeClick('L')"
                      @change="handleSizeChange('L')"
                    />
                    <span
                      class="pointer-events-none select-none absolute text-xs"
                      >L</span
                    >
                  </label>
                </div>
                <div class="inline-flex items-center gap-3 w-fit group">
                  <label
                    class="relative flex items-center justify-center rounded-full cursor-pointer"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                  >
                    <input
                      :id="`filter-red-5`"
                      :name="`size-cart`"
                      value="XL"
                      type="radio"
                      :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-white border-gray checked:bg-semigreen transition-all `"
                      v-model="selectedSizeOption"
                      @click="handleSizeClick('XL')"
                      @change="handleSizeChange('XL')"
                    />
                    <span
                      class="pointer-events-none select-none absolute text-xs"
                      >XL</span
                    >
                  </label>
                </div>
                <div class="inline-flex items-center gap-3 w-fit group">
                  <label
                    class="relative flex items-center justify-center rounded-full cursor-pointer"
                    htmlFor="ripple-on"
                    data-ripple-dark="true"
                  >
                    <input
                      :id="`filter-red-5`"
                      :name="`size-cart`"
                      value="XXL"
                      type="radio"
                      :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-white border-gray checked:bg-semigreen transition-all `"
                      v-model="selectedSizeOption"
                      @click="handleSizeClick('XXL')"
                      @change="handleSizeChange('XXL')"
                    />
                    <span
                      class="pointer-events-none select-none absolute text-xs"
                      >XXL</span
                    >
                  </label>
                </div>
              </div>
            </div>
            <div
              class="flex lg:justify-start justify-center items-center w-full gap-3"
            >
              <input
                type="number"
                name="price"
                id="price1"
                class="block w-full text-center outline-none rounded-md border-0 p-3 py-[0.3rem] max-h-10 h-full max-w-12 min-w-8 text-dark ring-1 ring-semigray bg-white placeholder:text-gray-400 focus:ring-1 focus:ring-semigreen [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="0"
                maxlength="7"
              />
              <AddToCart :node="product" mode="detail" />
            </div>
          </div>
          <div class="w-full border-t border-gray py-8 flex text-sm">
            <span class="opacity-80">Category:&nbsp;</span>
            <div class="w-full">
              <CommonLink
                v-for="(cate, index) in product.productCategories?.nodes"
                :key="index"
                variant="ghost"
                mode="normal"
                class="text-dark px-1 select-none cursor-pointer hover:text-semigreen transition-all"
                >{{ cate.name }},</CommonLink>
            </div>
          </div>
          <div
            class="w-full border-t border-gray py-8 flex text-sm justify-between md:justify-start"
          >
            <CommonButton
              variant="ghost"
              mode="normal"
              class="flex items-center gap-1 opacity-80"
            >
              <IconsFavoriteLineIcon class="text-lg" />
              <span class="text-sm text-nowrap">Add to Wishlist</span>
            </CommonButton>
            <CommonButton
              variant="ghost"
              mode="normal"
              class="flex items-center gap-1 opacity-80"
            >
              <IconsShareIcon class="text-lg" />
              <span class="text-sm text-nowrap">Share</span>
            </CommonButton>
          </div>
        </div>
      </div>
      <div
        class="w-full flex items-center border-b border-gray border-opacity-50"
      >
        <CommonButton
          variant="ghost"
          mode="normal"
          :class="`py-5 rounded-none before:content[''] before:h-[0.2rem] relative before:w-full before:absolute before:bottom-0 before:left-0 before:bg-semigreen before:-mb-0.5 ${
            isTabState === 0 ? 'before:block text-semigreen' : 'before:hidden'
          }  text-lg text-opacity-80 text-dark transition-all`"
          @click="descriptionTab"
        >
          Decription
        </CommonButton>
        <CommonButton
          variant="ghost"
          mode="normal"
          :class="`py-5 rounded-none before:content[''] before:h-[0.2rem] relative before:w-full before:absolute before:bottom-0 before:left-0 before:bg-semigreen before:-mb-0.5 ${
            isTabState === 1 ? 'before:block text-semigreen' : 'before:hidden'
          } text-lg text-opacity-80 text-dark transition-all`"
          @click="reviewTab"
        >
          Review ({{ product.reviewCount }})
        </CommonButton>
      </div>
      <Description v-if="isTabState === 0" :description="product.description" />
      <Review v-if="isTabState === 1"  />

      <div class="pb-5 pt-12 border-b border-gray border-opacity-50">
        <h2 class="text-dark font-semibold text-xl tracking-tight">
          You may also like
        </h2>
      </div>
      <!-- suggest products -->
      <div
        class="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8"
      >
        <div
          v-for="(pro, index) in products.slice(0, 5)"
          :key="index"
          class="bg-white shadow-lg overflow-hidden rounded-xl flex flex-col gap-1 pb-3 transition-all duration-300 animate-fade hover:no-underline relative"
        >
          <CommonLink
            :to="`/product/${replacing(pro.name)}`"
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 cursor-pointer"
          >
            <img
              :src="imgRand"
              :alt="pro.name"
              class="h-full w-full object-cover object-center hover:scale-110 transition-all duration-300 ease-in"
            />
          </CommonLink>
          <span
            class="absolute bg-semired pointer-events-none select-none text-white opacity-70 px-1 rounded-md top-3 right-3"
            >-30%</span
          >
          <div class="flex flex-col gap-3 px-3">
            <h3
              class="mt-4 text-sm text-gray-700 text-ellipsis overflow-hidden text-nowrap"
            >
              {{ pro.name }}
            </h3>
            <p class="mt-1 text-base md:text-lg font-medium text-dark">
              <span class="text-dark opacity-50 px-3 line-through"
                >${{ pro.price }}</span
              >${{ pro.price }}
            </p>
            <AddToCart :node="pro" />
          </div>
        </div>
      </div>
    </div>

    <!-- mobile add cart -->
    <div
      class="fixed md:hidden bottom-0 left-0 w-full shadow-top h-28 bg-white z-[9999] px-5 py-3 flex flex-col justify-end"
    >
      <div class="w-full py-5 flex justify-between">
        <!-- list color -->
        <div
          :class="`transition-all duration-300 flex flex-row gap-1 justify-start w-full`"
        >
          <div class="inline-flex items-center gap-3 w-fit group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-black-0`"
                :name="`color-cart`"
                value="m-black"
                type="radio"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-black border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-black hover:before:opacity-5 hover:border-black`"
                v-model="selectedOptionM"
                @click="handleClickM('m-black')"
                @change="handleChangeM('m-black')"
              />
              <span
                :class="`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    class="text-white"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <div class="inline-flex items-center gap-3 w-fit group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-blue-1`"
                :name="`color-cart`"
                value="m-blue"
                type="radio"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-blue-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-blue-500 hover:before:opacity-5 hover:border-blue-500`"
                v-model="selectedOptionM"
                @click="handleClickM('m-blue')"
                @change="handleChangeM('m-blue')"
              />
              <span
                :class="`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    class="text-white"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <div class="inline-flex items-center gap-3 w-fit group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-gray-2`"
                :name="`color-cart`"
                value="m-gray"
                type="radio"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-gray border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-gray hover:before:opacity-5 hover:border-gray`"
                v-model="selectedOptionM"
                @click="handleClickM('m-gray')"
                @change="handleChangeM('m-gray')"
              />
              <span
                :class="`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    class="text-white"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <div class="inline-flex items-center gap-3 w-fit group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-green-3`"
                :name="`color-cart`"
                value="m-green"
                type="radio"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-green-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-green-500 hover:before:opacity-5 hover:border-green-500`"
                v-model="selectedOptionM"
                @click="handleClickM('m-green')"
                @change="handleChangeM('m-green')"
              />
              <span
                :class="`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    class="text-white"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
          <div class="inline-flex items-center gap-3 w-fit group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-red-5`"
                :name="`color-cart`"
                value="m-red"
                type="radio"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-red-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-red-500 hover:before:opacity-5 hover:border-red-500`"
                v-model="selectedOptionM"
                @click="handleClickM('m-red')"
                @change="handleChangeM('m-red')"
              />
              <span
                :class="`absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100`"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    class="text-white"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <!-- list size -->
        <div
          :class="`transition-all duration-300 flex flex-row gap-1 justify-end w-full`"
        >
          <div class="inline-flex items-center gap-3 w-fit group">
            <label
              class="relative flex items-center justify-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-red-5`"
                :name="`size-cart`"
                value="m-S"
                type="radio"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-white border-gray checked:bg-semigreen transition-all `"
                v-model="selectedSizeOptionM"
                @click="handleSizeClickM('m-S')"
                @change="handleSizeChangeM('m-S')"
              />
              <span class="pointer-events-none select-none absolute text-xs"
                >S</span
              >
            </label>
          </div>
          <div class="inline-flex items-center gap-3 w-fit group">
            <label
              class="relative flex items-center justify-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-red-5`"
                :name="`size-cart`"
                value="m-M"
                type="radio"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-white border-gray checked:bg-semigreen transition-all `"
                v-model="selectedSizeOptionM"
                @click="handleSizeClickM('m-M')"
                @change="handleSizeChangeM('m-M')"
              />
              <span class="pointer-events-none select-none absolute text-xs"
                >M</span
              >
            </label>
          </div>
          <div class="inline-flex items-center gap-3 w-fit group">
            <label
              class="relative flex items-center justify-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-red-5`"
                :name="`size-cart`"
                value="m-L"
                type="radio"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-white border-gray checked:bg-semigreen transition-all `"
                v-model="selectedSizeOptionM"
                @click="handleSizeClickM('m-L')"
                @change="handleSizeChangeM('m-L')"
              />
              <span class="pointer-events-none select-none absolute text-xs"
                >L</span
              >
            </label>
          </div>
          <div class="inline-flex items-center gap-3 w-fit group">
            <label
              class="relative flex items-center justify-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-red-5`"
                :name="`size-cart`"
                value="m-XL"
                type="radio"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-white border-gray checked:bg-semigreen transition-all `"
                v-model="selectedSizeOptionM"
                @click="handleSizeClickM('m-XL')"
                @change="handleSizeChangeM('m-XL')"
              />
              <span class="pointer-events-none select-none absolute text-xs"
                >XL</span
              >
            </label>
          </div>
          <div class="inline-flex items-center gap-3 w-fit group">
            <label
              class="relative flex items-center justify-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-red-5`"
                :name="`size-cart`"
                value="m-XXL"
                type="radio"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-white border-gray checked:bg-semigreen transition-all `"
                v-model="selectedSizeOptionM"
                @click="handleSizeClickM('m-XXL')"
                @change="handleSizeChangeM('m-XXL')"
              />
              <span class="pointer-events-none select-none absolute text-xs"
                >XXL</span
              >
            </label>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center w-full gap-3">
        <input
          type="number"
          name="price"
          id="price1"
          class="block w-full outline-none rounded-md border-0 p-3 py-[0.3rem] max-h-10 h-full max-w-12 min-w-8 text-dark ring-1 ring-semigray bg-white placeholder:text-gray-400 focus:ring-1 focus:ring-semigreen [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="0"
          maxlength="7"
        />
        <CommonButton variant="fill" mode="normal" class="max-h-10 w-full">
          Add to cart
        </CommonButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, type Ref, type ComputedRef, onMounted} from "vue";
import {StarIcon} from "@heroicons/vue/20/solid";
import {RadioGroup, RadioGroupLabel, RadioGroupOption} from "@headlessui/vue";
import type {AnyType, Attribute, NumberType, Product, StringType, Variation} from "~/types";
import {useProductDetailStore} from "../../stores/useProduct_detail";
import {useRoute} from "vue-router";
import {useCartStore} from "../../stores/useCart";
import {useHelpersStore} from "../../stores/useHelpers";
import type {AddToCartInput} from "#gql";
import {GqlGetStockStatus} from "#gql";
import {StockStatusEnum} from "#gql/default";
import {products} from "~/common";

/* const product = products; */
const selectedOption = ref<StringType>();
const selectedSizeOption = ref<StringType>();

const selectedOptionM = ref<StringType>();
const selectedSizeOptionM = ref<StringType>();
// const selectedOption = ref<StringType>('');

const productDetailStore = useProductDetailStore();
const isTabState = computed(() => productDetailStore.isTab);

const descriptionTab = () => {
  productDetailStore.tabToDescription();
};
const reviewTab = () => {
  productDetailStore.tabToReview();
};

const replacing = (str: StringType) => {
  return str
    .replace(/-/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c: StringType) => c.toUpperCase());
};

const handleClick = (option: StringType) => {
  if (selectedOption.value === option) {
    selectedOption.value = "";
  }
};

const handleChange = (option: StringType) => {
  if (selectedOption.value !== option) {
    selectedOption.value = option;
  }
};

const handleSizeClick = (option: StringType) => {
  if (selectedSizeOption.value === option) {
    selectedSizeOption.value = "";
  }
};

const handleSizeChange = (option: StringType) => {
  if (selectedSizeOption.value !== option) {
    selectedSizeOption.value = option;
  }
};

// Mobile
const handleClickM = (option: StringType) => {
  if (selectedOptionM.value === option) {
    selectedOptionM.value = "";
  }
};

const handleChangeM = (option: StringType) => {
  if (selectedOptionM.value !== option) {
    selectedOptionM.value = option;
  }
};

const handleSizeClickM = (option: StringType) => {
  if (selectedSizeOptionM.value === option) {
    selectedSizeOptionM.value = "";
  }
};

const handleSizeChangeM = (option: StringType) => {
  if (selectedSizeOptionM.value !== option) {
    selectedSizeOptionM.value = option;
  }
};

const route = useRoute();
const {arraysEqual, formatArray, checkForVariationTypeOfAny} =
  useHelpersStore();
const {addToCart, isUpdatingCart} = useCartStore();
const slug = route.params.slug as string;

const {data} = (await useAsyncGql("getProduct", {slug})) as {
  data: {value: {product: Product}};
};
const product = ref<Product>(data?.value?.product);

const quantity = ref(1);
const activeVariation = ref(null) as Ref<Variation | null>;
const variation = ref([]) as Ref<Variation[]>;
const indexOfTypeAny = [] as number[];
const attrValues = ref();
const isSimpleProduct = computed(() => product.value.type === "SIMPLE");
const isVariableProduct = computed(() => product.value.type === "VARIABLE");

const type = computed(() =>
  activeVariation.value ? activeVariation.value : product.value
);
const selectProductInput = computed(() => ({
  productId: type.value.databaseId,
  quantity: quantity.value,
})) as ComputedRef<AddToCartInput>;
const mergeLiveStockStatus = (payload: Product): void => {
  product.value.stockStatus = payload.stockStatus ?? product.value.stockStatus;

  payload.variations?.nodes.forEach((variation: Variation, index: number) => {
    if (product.value.variations?.nodes[index]) {
      product.value.variations.nodes[index].stockStatus = variation.stockStatus;
    }
  });
};

onMounted(async () => {
  try {
    const {product} = (await GqlGetStockStatus({slug})) as {product: Product};
    mergeLiveStockStatus(product);
  } catch (error: any) {
    const errorMessage = error?.gqlErrors?.[0].message;
    if (errorMessage) console.error(errorMessage);
  }
  if (product.value.variations)
    indexOfTypeAny.push(...checkForVariationTypeOfAny(product.value));

});

const updateSelectedVariations = (variations: Attribute[]): void => {
  if (!product.value.variations) return;

  attrValues.value = variations.map((el) => ({
    attributeName: el.name,
    attributeValue: el.value,
  }));
  const cloneArray = JSON.parse(JSON.stringify(variations));
  const getActiveVariation = product.value.variations.nodes.filter(
    (variation: any) => {
      // If there is any variation of type ANY set the value to ''
      if (variation.attributes) {
        indexOfTypeAny.forEach((index) => (cloneArray[index].value = ""));
        return arraysEqual(
          formatArray(variation.attributes.nodes),
          formatArray(cloneArray)
        );
      }
    }
  );

  activeVariation.value = getActiveVariation[0];
  selectProductInput.value.variationId =
    activeVariation.value?.databaseId ?? null;
  selectProductInput.value.variation = activeVariation.value
    ? attrValues.value
    : null;
  variation.value = variations;
};

const stockStatus = computed(() => {
  if (isVariableProduct.value)
    return activeVariation.value?.stockStatus || StockStatusEnum.OUT_OF_STOCK;
  return type.value?.stockStatus || StockStatusEnum.OUT_OF_STOCK;
});
const disabledAddToCart = computed(() => {
  if (isSimpleProduct.value)
    return (
      !type.value ||
      stockStatus.value === StockStatusEnum.OUT_OF_STOCK ||
      isUpdatingCart
    );
  return (
    !type.value ||
    stockStatus.value === StockStatusEnum.OUT_OF_STOCK ||
    !activeVariation.value ||
    isUpdatingCart
  );
});
</script>
