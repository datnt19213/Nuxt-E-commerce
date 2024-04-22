<template>
  <div class="w-full">
    <div class="hidden lg:flex flex-col items-center w-full px-8">
      <form method="post" class="w-full">
        <CommonButton
          @click="togglePrice"
          type="button"
          variant="ghost"
          mode="normal"
          class="w-full flex flex-nowrap justify-between items-center px-0"
        >
          <span class="font-semibold text-base">Price</span>
          <IconsArrowDownIcon
            :class="`text-2xl ${
              isPrice === false ? 'rotate-180' : 'rotate-0'
            } transition-all duration-300`"
          />
        </CommonButton>
        <div
          v-if="isPrice"
          :class="`${
            isPrice ? 'opacity-100' : 'opacity-0'
          } transition-all duration-300 px-3 pt-5 pb-8 border-b border-gray border-opacity-30 flex-col justify-center items-center gap-3 w-full`"
        >
          <div class="flex justify-center items-center gap-3 w-full">
            <div class="relative rounded-md shadow-sm">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              >
                <span class="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="price"
                id="price1"
                class="block w-full outline-none rounded-md border-0 pl-7 pr-3 py-[0.3rem] max-w-32 min-w-20 text-dark ring-1 ring-semigray bg-white placeholder:text-gray-400 focus:ring-1 focus:ring-semigreen [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="0"
                v-model="inputValue1"
                @input="updateSlider"
                @keypress="validateInput($event, 'inputValue1')"
                maxlength="7"
                :min="minValue"
                :max="maxValue"
              />
            </div>
            <div class="relative rounded-md shadow-sm">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              >
                <span class="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="price2"
                id="price"
                class="block w-full outline-none rounded-md border-0 pl-7 pr-3 py-[0.3rem] max-w-32 min-w-20 text-dark ring-1 ring-semigray bg-white placeholder:text-gray-400 focus:ring-1 focus:ring-semigreen [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="0"
                v-model="inputValue2"
                @input="updateSlider"
                @blur="updateInputs"
                maxlength="7"
                @keypress="validateInput($event, 'inputValue2')"
                :min="minLimit"
                :max="maxValue"
              />
            </div>
          </div>
          <div
            class="relative py-5 gap-12 rounded-md w-full flex flex-col items-center justify-center"
          >
            <Slider
              :min="minValue"
              :max="maxValue"
              v-model="sliderValue"
              range
              class="w-full h-2"
              @update:modelValue="updateInputs"
            />
            <CommonButton
              type="submit"
              variant="fill"
              mode="normal"
              class="w-full hover:brightness-125 transition-all"
              @click="filterPrice"
            >
              <p class="text-white">Filter</p>
            </CommonButton>
          </div>
        </div>
      </form>
      <div class="w-full">
        <CommonButton
          type="button"
          variant="ghost"
          mode="normal"
          class="w-full flex flex-nowrap justify-between items-center"
          @click="toggleCategory()"
        >
          <span class="font-semibold text-base">Category</span>
          <IconsArrowDownIcon
            :class="`text-2xl ${
              isCategory === false ? 'rotate-180' : 'rotate-0'
            } transition-all duration-300`"
          />
        </CommonButton>
        <div
          v-if="isCategory"
          :class="`${
            isCategory ? 'opacity-100' : 'opacity-0'
          } transition-all duration-300 w-full px-3 pt-5 pb-8 flex flex-col gap-1`"
        >
          <div
            v-for="(category, index) in filterCategory"
            :key="index"
            class="inline-flex items-center gap-3 w-full group"
          >
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-${category.name}-${category.id}`"
                :name="`${category.name}-${category.id}`"
                :value="category.id"
                type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen"
              />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
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
                    class="text-semigreen"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              :for="`filter-${category.name}-${category.id}`"
              class="group-hover:text-semigreen cursor-pointer text-sm text-dark"
            >
              {{ category.name }}
            </label>
          </div>
        </div>
      </div>
      <div class="w-full">
        <CommonButton
          type="button"
          variant="ghost"
          mode="normal"
          class="w-full flex flex-nowrap justify-between items-center"
          @click="toggleSize"
        >
          <span class="font-semibold text-base">Size</span>
          <IconsArrowDownIcon
            :class="`text-2xl ${
              isSize === false ? 'rotate-180' : 'rotate-0'
            } transition-all duration-300`"
          />
        </CommonButton>
        <div
          v-if="isSize"
          :class="`${
            isSize ? 'opacity-100' : 'opacity-0'
          } transition-all duration-300 px-3 pt-5 pb-8 flex flex-col gap-1`"
        >
          <div
            v-for="(size, index) in filterSize"
            :key="index"
            class="inline-flex items-center gap-3 w-full group"
          >
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-${size.name}-${size.id}`"
                :name="`${size.name}-${size.id}`"
                :value="size.id"
                type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen"
              />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
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
                    class="text-semigreen"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              :for="`filter-${size.name}-${size.id}`"
              class="group-hover:text-semigreen cursor-pointer text-sm text-dark"
            >
              {{ size.name }}
            </label>
          </div>
        </div>
      </div>
      <div class="w-full">
        <CommonButton
          type="button"
          variant="ghost"
          mode="normal"
          class="w-full flex flex-nowrap justify-between items-center"
          @click="toggleRange"
        >
          <span class="font-semibold text-base">Range</span>
          <IconsArrowDownIcon
            :class="`text-2xl ${
              isRange === false ? 'rotate-180' : 'rotate-0'
            } transition-all duration-300`"
          />
        </CommonButton>
        <div
          v-if="isRange"
          :class="`${
            isRange ? 'opacity-100' : 'opacity-0'
          } transition-all duration-300 px-3 pt-5 pb-8 flex flex-col gap-1`"
        >
          <div
            v-for="(range, index) in filterRange"
            :key="index"
            class="inline-flex items-center gap-3 w-full group"
          >
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-${range.name}-${range.id}`"
                :name="`${range.name}-${range.id}`"
                :value="range.id"
                type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen"
              />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
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
                    class="text-semigreen"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              :for="`filter-${range.name}-${range.id}`"
              class="group-hover:text-semigreen cursor-pointer text-sm text-dark"
            >
              {{ range.name }}
            </label>
          </div>
        </div>
      </div>
      <div class="w-full">
        <CommonButton
          type="button"
          variant="ghost"
          mode="normal"
          class="w-full flex flex-nowrap justify-between items-center"
          @click="toggleColor"
        >
          <span class="font-semibold text-base">Color</span>
          <IconsArrowDownIcon
            :class="`text-2xl ${
              isColor === false ? 'rotate-180' : 'rotate-0'
            } transition-all duration-300`"
          />
        </CommonButton>
        <div
          v-if="isColor"
          :class="`${
            isColor ? 'opacity-100' : 'opacity-0'
          } transition-all duration-300 px-3 pt-5 pb-8 flex flex-row gap-1`"
        >
          <div class="inline-flex items-center gap-3 w-full group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-black-0`"
                :name="`black-0`"
                value="0"
                type="checkbox"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-black border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-black hover:before:opacity-5 hover:border-black`"
                v-model="selectedColors"
              />

              <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
            <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
          </div>
          <div class="inline-flex items-center gap-3 w-full group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-blue-1`"
                :name="`blue-1`"
                value="1"
                type="checkbox"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-blue-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-blue-500 hover:before:opacity-5 hover:border-blue-500`"
                v-model="selectedColors"
              />

              <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
            <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
          </div>
          <div class="inline-flex items-center gap-3 w-full group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-gray-2`"
                :name="`gray-2`"
                value="2"
                type="checkbox"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-gray border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-gray hover:before:opacity-5 hover:border-gray`"
                v-model="selectedColors"
              />

              <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
            <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
          </div>
          <div class="inline-flex items-center gap-3 w-full group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-green-3`"
                :name="`green-3`"
                value="3"
                type="checkbox"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-green-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-green-500 hover:before:opacity-5 hover:border-green-500`"
                v-model="selectedColors"
              />

              <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
            <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
          </div>
          <div class="inline-flex items-center gap-3 w-full group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-orange-4`"
                :name="`orange-4`"
                value="4"
                type="checkbox"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-orange-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-orange-500 hover:before:opacity-5 hover:border-orange-500`"
                v-model="selectedColors"
              />

              <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
            <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
          </div>
          <div class="inline-flex items-center gap-3 w-full group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-red-5`"
                :name="`red-5`"
                value="5"
                type="checkbox"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-red-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-red-500 hover:before:opacity-5 hover:border-red-500`"
                v-model="selectedColors"
              />

              <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
            <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
          </div>
          <div class="inline-flex items-center gap-3 w-full group">
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-yellow-6`"
                :name="`yellow-6`"
                value="6"
                type="checkbox"
                :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-yellow-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-yellow-500 hover:before:opacity-5 hover:border-yellow-500`"
                v-model="selectedColors"
              />

              <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
            <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
          </div>
        </div>
      </div>
      <div class="w-full">
        <CommonButton
          type="button"
          variant="ghost"
          mode="normal"
          class="w-full flex flex-nowrap justify-between items-center"
          @click="toggleSale"
        >
          <span class="font-semibold text-base">Sale Product Only</span>
          <IconsArrowDownIcon
            :class="`text-2xl ${
              isSale === false ? 'rotate-180' : 'rotate-0'
            } transition-all duration-300`"
          />
        </CommonButton>
        <div
          v-if="isSale"
          :class="`${
            isSale ? 'opacity-100' : 'opacity-0'
          } transition-all duration-300 px-3 pt-5 pb-8 flex flex-col gap-1`"
        >
          <div
            v-for="(sale, index) in filterSale"
            :key="index"
            class="inline-flex items-center gap-3 w-full group"
          >
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-${sale.name}-${sale.id}`"
                :name="`${sale.name}-${sale.id}`"
                :value="sale.id"
                type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen"
              />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
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
                    class="text-semigreen"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <!-- <label :for="`filter-${sale.name}-${sale.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ sale.name }}
            </label> -->
          </div>
        </div>
      </div>
      <div class="w-full">
        <CommonButton
          type="button"
          variant="ghost"
          mode="normal"
          class="w-full flex flex-nowrap justify-between items-center"
          @click="toggleRating"
        >
          <span class="font-semibold text-base">Rating</span>
          <IconsArrowDownIcon
            :class="`text-2xl ${
              isRating === false ? 'rotate-180' : 'rotate-0'
            } transition-all duration-300`"
          />
        </CommonButton>
        <div
          v-if="isRating"
          :class="`${
            isRating ? 'opacity-100' : 'opacity-0'
          } transition-all duration-300 px-3 pt-5 pb-8 flex flex-col gap-1`"
        >
          <div
            v-for="(rate, index) in filterRating"
            :key="index"
            class="inline-flex items-center gap-3 w-full group"
          >
            <label
              class="relative flex items-center rounded-full cursor-pointer"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                :id="`filter-${rate.name}-${rate.id}`"
                v-model="selectedOption"
                @click="handleClick(String(rate.id))"
                @change="handleChange(String(rate.id))"
                name="radio-rating"
                :value="rate.id"
                type="radio"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen"
              />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
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
                    class="text-semigreen"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              :for="`filter-${rate.name}-${rate.id}`"
              class="cursor-pointer text-sm text-dark flex"
            >
              <IconsStarFillIcon
                v-for="i in Number(rate.name)"
                :key="i"
                class="text-3xl"
              />
              <IconsStarFillGhostIcon
                v-for="i in Number(rate.id)"
                :key="i"
                class="text-3xl"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative" @close="$emit('closeFilter')">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden bg-transdark z-50">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full"
            >
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="-translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="-translate-x-full"
              >
                <DialogPanel
                  class="pointer-events-auto relative w-screen max-w-md"
                >
                  <div
                    class="flex h-full flex-col items-end px-7 overflow-y-scroll bg-white p-6 shadow-xl"
                  >
                    <div
                      class="flex justify-center items-center w-16 h-16 cursor-pointer aspect-square transition-all rounded-md group"
                      @click="$emit('closeFilter')"
                    >
                      <IconsCloseIcon
                        class="text-3xl pointer-events-none text-dark group-hover:text-green-500"
                      />
                    </div>
                    <div class="relative mt-6 flex-1 px-3 w-full">
                      <div
                        class="w-full flex flex-col justify-start items-start h-full px-3"
                      >
                        <div
                          class="justify-center items-center flex w-full pb-12 px-12"
                        >
                          <CommonButton
                            variant="outline"
                            mode="normal"
                            class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 h-9 aspect-square -p-3 border-gray relative rounded-tr-none rounded-br-none border-r-0 hover:bg-slate-50 transition-all group"
                            @click="setIsSort"
                          >
                            <IconsSortIcon
                              :class="`${
                                isSort ? 'rotate-180' : 'rotate-0'
                              } group-hover:text-semigreen text-2xl absolute transform transition-all`"
                            />
                          </CommonButton>
                          <Menu
                            as="div"
                            class="relative inline-block text-left w-full"
                          >
                            <MenuButton
                              class="group inline-flex justify-between items-center px-3 w-full border h-9 border-gray rounded-tr-md rounded-br-md hover:bg-slate-50 transition-all"
                            >
                              <p
                                class="select-none text-dark tracking-tight text-sm transition-all"
                              >
                                {{ sortName }}
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
                                        option.id === sort
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

                        <div class="flex flex-col items-center w-full px-8">
                          <form method="post" class="w-full">
                            <CommonButton
                              @click="togglePrice"
                              type="button"
                              variant="ghost"
                              mode="normal"
                              class="w-full flex flex-nowrap justify-between items-center px-0"
                            >
                              <span class="font-semibold text-base">Price</span>
                              <IconsArrowDownIcon
                                :class="`text-2xl ${
                                  isPrice === false ? 'rotate-180' : 'rotate-0'
                                } transition-all duration-300`"
                              />
                            </CommonButton>
                            <div
                              v-if="isPrice"
                              :class="`${
                                isPrice ? 'opacity-100' : 'opacity-0'
                              } transition-all duration-300 px-3 pt-5 pb-8 border-b border-gray border-opacity-30 flex-col justify-center items-center gap-3 w-full`"
                            >
                              <div
                                class="flex justify-center items-center gap-3 w-full"
                              >
                                <div class="relative rounded-md shadow-sm">
                                  <div
                                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                  >
                                    <span class="text-gray-500 sm:text-sm"
                                      >$</span
                                    >
                                  </div>
                                  <input
                                    type="number"
                                    name="price"
                                    id="price1"
                                    class="block w-full outline-none rounded-md border-0 pl-7 pr-3 py-[0.3rem] max-w-32 min-w-20 text-dark ring-1 ring-semigray bg-white placeholder:text-gray-400 focus:ring-1 focus:ring-semigreen [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    placeholder="0"
                                    v-model="inputValue1"
                                    @input="updateSlider"
                                    @keypress="
                                      validateInput($event, 'inputValue1')
                                    "
                                    maxlength="7"
                                    :min="minValue"
                                    :max="maxValue"
                                  />
                                </div>
                                <div class="relative rounded-md shadow-sm">
                                  <div
                                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                  >
                                    <span class="text-gray-500 sm:text-sm"
                                      >$</span
                                    >
                                  </div>
                                  <input
                                    type="number"
                                    name="price2"
                                    id="price"
                                    class="block w-full outline-none rounded-md border-0 pl-7 pr-3 py-[0.3rem] max-w-32 min-w-20 text-dark ring-1 ring-semigray bg-white placeholder:text-gray-400 focus:ring-1 focus:ring-semigreen [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    placeholder="0"
                                    v-model="inputValue2"
                                    @input="updateSlider"
                                    @blur="updateInputs"
                                    maxlength="7"
                                    @keypress="
                                      validateInput($event, 'inputValue2')
                                    "
                                    :min="minLimit"
                                    :max="maxValue"
                                  />
                                </div>
                              </div>
                              <div
                                class="relative py-5 gap-12 rounded-md w-full flex flex-col items-center justify-center"
                              >
                                <Slider
                                  :min="minValue"
                                  :max="maxValue"
                                  v-model="sliderValue"
                                  range
                                  class="w-full h-2"
                                  @update:modelValue="updateInputs"
                                />
                                <CommonButton
                                  type="submit"
                                  variant="fill"
                                  mode="normal"
                                  class="w-full hover:brightness-125 transition-all"
                                  @click="filterPrice"
                                >
                                  <p class="text-white">Filter</p>
                                </CommonButton>
                              </div>
                            </div>
                          </form>
                          <div class="w-full">
                            <CommonButton
                              type="button"
                              variant="ghost"
                              mode="normal"
                              class="w-full flex flex-nowrap justify-between items-center"
                              @click="toggleCategory()"
                            >
                              <span class="font-semibold text-base"
                                >Category</span
                              >
                              <IconsArrowDownIcon
                                :class="`text-2xl ${
                                  isCategory === false
                                    ? 'rotate-180'
                                    : 'rotate-0'
                                } transition-all duration-300`"
                              />
                            </CommonButton>
                            <div
                              v-if="isCategory"
                              :class="`${
                                isCategory ? 'opacity-100' : 'opacity-0'
                              } transition-all duration-300 w-full px-3 pt-5 pb-8 flex flex-col gap-1`"
                            >
                              <div
                                v-for="(category, index) in filterCategory"
                                :key="index"
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-${category.name}-${category.id}`"
                                    :name="`${category.name}-${category.id}`"
                                    :value="category.id"
                                    type="checkbox"
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen"
                                  />
                                  <span
                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
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
                                        class="text-semigreen"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </label>
                                <label
                                  :for="`filter-${category.name}-${category.id}`"
                                  class="group-hover:text-semigreen cursor-pointer text-sm text-dark"
                                >
                                  {{ category.name }}
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="w-full">
                            <CommonButton
                              type="button"
                              variant="ghost"
                              mode="normal"
                              class="w-full flex flex-nowrap justify-between items-center"
                              @click="toggleSize"
                            >
                              <span class="font-semibold text-base">Size</span>
                              <IconsArrowDownIcon
                                :class="`text-2xl ${
                                  isSize === false ? 'rotate-180' : 'rotate-0'
                                } transition-all duration-300`"
                              />
                            </CommonButton>
                            <div
                              v-if="isSize"
                              :class="`${
                                isSize ? 'opacity-100' : 'opacity-0'
                              } transition-all duration-300 px-3 pt-5 pb-8 flex flex-col gap-1`"
                            >
                              <div
                                v-for="(size, index) in filterSize"
                                :key="index"
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-${size.name}-${size.id}`"
                                    :name="`${size.name}-${size.id}`"
                                    :value="size.id"
                                    type="checkbox"
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen"
                                  />
                                  <span
                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
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
                                        class="text-semigreen"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </label>
                                <label
                                  :for="`filter-${size.name}-${size.id}`"
                                  class="group-hover:text-semigreen cursor-pointer text-sm text-dark"
                                >
                                  {{ size.name }}
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="w-full">
                            <CommonButton
                              type="button"
                              variant="ghost"
                              mode="normal"
                              class="w-full flex flex-nowrap justify-between items-center"
                              @click="toggleRange"
                            >
                              <span class="font-semibold text-base">Range</span>
                              <IconsArrowDownIcon
                                :class="`text-2xl ${
                                  isRange === false ? 'rotate-180' : 'rotate-0'
                                } transition-all duration-300`"
                              />
                            </CommonButton>
                            <div
                              v-if="isRange"
                              :class="`${
                                isRange ? 'opacity-100' : 'opacity-0'
                              } transition-all duration-300 px-3 pt-5 pb-8 flex flex-col gap-1`"
                            >
                              <div
                                v-for="(range, index) in filterRange"
                                :key="index"
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-${range.name}-${range.id}`"
                                    :name="`${range.name}-${range.id}`"
                                    :value="range.id"
                                    type="checkbox"
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen"
                                  />
                                  <span
                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
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
                                        class="text-semigreen"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </label>
                                <label
                                  :for="`filter-${range.name}-${range.id}`"
                                  class="group-hover:text-semigreen cursor-pointer text-sm text-dark"
                                >
                                  {{ range.name }}
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="w-full">
                            <CommonButton
                              type="button"
                              variant="ghost"
                              mode="normal"
                              class="w-full flex flex-nowrap justify-between items-center"
                              @click="toggleColor"
                            >
                              <span class="font-semibold text-base">Color</span>
                              <IconsArrowDownIcon
                                :class="`text-2xl ${
                                  isColor === false ? 'rotate-180' : 'rotate-0'
                                } transition-all duration-300`"
                              />
                            </CommonButton>
                            <div
                              v-if="isColor"
                              :class="`${
                                isColor ? 'opacity-100' : 'opacity-0'
                              } transition-all duration-300 px-3 pt-5 pb-8 flex flex-row gap-1`"
                            >
                              <div
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-black-0`"
                                    :name="`black-0`"
                                    value="0"
                                    type="checkbox"
                                    :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-black border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-black hover:before:opacity-5 hover:border-black`"
                                    v-model="selectedColors"
                                  />

                                  <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
                                <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
                              </div>
                              <div
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-blue-1`"
                                    :name="`blue-1`"
                                    value="1"
                                    type="checkbox"
                                    :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-blue-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-blue-500 hover:before:opacity-5 hover:border-blue-500`"
                                    v-model="selectedColors"
                                  />

                                  <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
                                <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
                              </div>
                              <div
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-gray-2`"
                                    :name="`gray-2`"
                                    value="2"
                                    type="checkbox"
                                    :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-gray border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-gray hover:before:opacity-5 hover:border-gray`"
                                    v-model="selectedColors"
                                  />

                                  <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
                                <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
                              </div>
                              <div
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-green-3`"
                                    :name="`green-3`"
                                    value="3"
                                    type="checkbox"
                                    :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-green-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-green-500 hover:before:opacity-5 hover:border-green-500`"
                                    v-model="selectedColors"
                                  />

                                  <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
                                <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
                              </div>
                              <div
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-orange-4`"
                                    :name="`orange-4`"
                                    value="4"
                                    type="checkbox"
                                    :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-orange-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-orange-500 hover:before:opacity-5 hover:border-orange-500`"
                                    v-model="selectedColors"
                                  />

                                  <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
                                <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
                              </div>
                              <div
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-red-5`"
                                    :name="`red-5`"
                                    value="5"
                                    type="checkbox"
                                    :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-red-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-red-500 hover:before:opacity-5 hover:border-red-500`"
                                    v-model="selectedColors"
                                  />

                                  <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
                                <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
                              </div>
                              <div
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-yellow-6`"
                                    :name="`yellow-6`"
                                    value="6"
                                    type="checkbox"
                                    :class="`before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-yellow-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-yellow-500 hover:before:opacity-5 hover:border-yellow-500`"
                                    v-model="selectedColors"
                                  />

                                  <!-- `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen` -->
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
                                <!-- <label :for="`filter-${color.name}-${color.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ color.name }}
            </label> -->
                              </div>
                            </div>
                          </div>
                          <div class="w-full">
                            <CommonButton
                              type="button"
                              variant="ghost"
                              mode="normal"
                              class="w-full flex flex-nowrap justify-between items-center"
                              @click="toggleSale"
                            >
                              <span class="font-semibold text-base"
                                >Sale Product Only</span
                              >
                              <IconsArrowDownIcon
                                :class="`text-2xl ${
                                  isSale === false ? 'rotate-180' : 'rotate-0'
                                } transition-all duration-300`"
                              />
                            </CommonButton>
                            <div
                              v-if="isSale"
                              :class="`${
                                isSale ? 'opacity-100' : 'opacity-0'
                              } transition-all duration-300 px-3 pt-5 pb-8 flex flex-col gap-1`"
                            >
                              <div
                                v-for="(sale, index) in filterSale"
                                :key="index"
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-${sale.name}-${sale.id}`"
                                    :name="`${sale.name}-${sale.id}`"
                                    :value="sale.id"
                                    type="checkbox"
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen"
                                  />
                                  <span
                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
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
                                        class="text-semigreen"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </label>
                                <!-- <label :for="`filter-${sale.name}-${sale.id}`" class="group-hover:text-semigreen cursor-pointer text-sm text-dark">
              {{ sale.name }}
            </label> -->
                              </div>
                            </div>
                          </div>
                          <div class="w-full">
                            <CommonButton
                              type="button"
                              variant="ghost"
                              mode="normal"
                              class="w-full flex flex-nowrap justify-between items-center"
                              @click="toggleRating"
                            >
                              <span class="font-semibold text-base"
                                >Rating</span
                              >
                              <IconsArrowDownIcon
                                :class="`text-2xl ${
                                  isRating === false ? 'rotate-180' : 'rotate-0'
                                } transition-all duration-300`"
                              />
                            </CommonButton>
                            <div
                              v-if="isRating"
                              :class="`${
                                isRating ? 'opacity-100' : 'opacity-0'
                              } transition-all duration-300 px-3 pt-5 pb-8 flex flex-col gap-1`"
                            >
                              <div
                                v-for="(rate, index) in filterRating"
                                :key="index"
                                class="inline-flex items-center gap-3 w-full group"
                              >
                                <label
                                  class="relative flex items-center rounded-full cursor-pointer"
                                  htmlFor="ripple-on"
                                  data-ripple-dark="true"
                                >
                                  <input
                                    :id="`filter-${rate.name}-${rate.id}`"
                                    v-model="selectedOption"
                                    @click="handleClick(String(rate.id))"
                                    @change="handleChange(String(rate.id))"
                                    name="radio-rating"
                                    :value="rate.id"
                                    type="radio"
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-semigreen hover:before:opacity-5 hover:border-semigreen"
                                  />
                                  <span
                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
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
                                        class="text-semigreen"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </label>
                                <label
                                  :for="`filter-${rate.name}-${rate.id}`"
                                  class="cursor-pointer text-sm text-dark flex"
                                >
                                  <IconsStarFillIcon
                                    v-for="i in Number(rate.name)"
                                    :key="i"
                                    class="text-3xl"
                                  />
                                  <IconsStarFillGhostIcon
                                    v-for="i in Number(rate.id)"
                                    :key="i"
                                    class="text-3xl"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script setup lang="ts">
import {
  ref,
  nextTick,
  computed,
  watch,
  onMounted,
  onUnmounted,
  defineComponent,
  defineEmits,
} from "vue";
import type {
  BooleanType,
  StringType,
  NumberType,
  KeyboardEventType,
  InputElementType,
} from "~/types/old.index";
import Slider from "primevue/slider";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Popover,
  PopoverButton,
  PopoverPanel,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Disclosure,
  DisclosureButton,
} from "@headlessui/vue";

import {
  filterCategory,
  filterSize,
  filterColor,
  filterRange,
  filterRating,
  filterSale,
  sortFilter,
} from "~/common";

let isPrice = ref(true);
let isCategory = ref(true);
let isSize = ref(true);
let isRange = ref(true);
let isColor = ref(true);
let isSale = ref(true);
let isRating = ref(true);

const numberPattern = /^\d{0,7}$/;

const inputValue1 = ref(0);
const inputValue2 = ref(0);
const minValue = ref(0);
const minLimit = 100;
const maxValue = ref(9999999);
const sliderValue = ref([minValue.value, maxValue.value]);

const selectedOption = ref<StringType>();

const selectedColors = ref([]);

const sort = ref(0);
const isSort = ref(false);
const sortName = ref("");

const setSort = (val: NumberType, name: StringType) => {
  sort.value = val;
  sortName.value = name;
};
const setIsSort = () => {
  isSort.value = !isSort.value;
};

onMounted(() => {
  setSort(sortFilter[0].id, sortFilter[0].name);
});

const updateSlider = () => {
  sliderValue.value = [inputValue1.value, inputValue2.value];
};

const updateInputs = () => {
  [inputValue1.value, inputValue2.value] = sliderValue.value;

  if (inputValue2.value < minLimit) {
    inputValue2.value = minLimit;
    updateSlider();
  }
};

onMounted(() => {
  updateInputs();
});

const validateInput = (event: KeyboardEventType, inputRef: StringType) => {
  const target = event.target as InputElementType;
  const newValue = target.value + event.key;

  if (!numberPattern.test(newValue)) {
    event.preventDefault();
  }
};

const filterPrice = () => {
  const minPrice = Math.min(inputValue1.value, inputValue2.value);
  const maxPrice = Math.max(inputValue1.value, inputValue2.value);
  alert(`Min Price: ${minPrice}, Max Price: ${maxPrice}`);
};

const checkboxClasses = (colors: NumberType) => {
  if ((colors = 0)) {
    return `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-black border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-black hover:before:opacity-5 hover:border-black`;
  } else if ((colors = 1)) {
    return `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-blue-500 border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-blue-500 hover:before:opacity-5 hover:border-blue-500`;
  } else if ((colors = 2)) {
    return `before:content[''] peer relative h-7 w-7 cursor-pointer appearance-none rounded-md border bg-gray border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-transdark before:opacity-0 checked:border-gray hover:before:opacity-5 hover:border-gray`;
  }
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

const togglePrice = () => {
  isPrice.value = !isPrice.value;
};
const toggleCategory = () => {
  isCategory.value = !isCategory.value;
};
const toggleSize = () => {
  isSize.value = !isSize.value;
};
const toggleRange = () => {
  isRange.value = !isRange.value;
};
const toggleColor = () => {
  isColor.value = !isColor.value;
};
const toggleSale = () => {
  isSale.value = !isSale.value;
};
const toggleRating = () => {
  isRating.value = !isRating.value;
};

const props = defineProps({
  open: Boolean,
});

defineComponent({
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Popover,
  PopoverButton,
  PopoverPanel,
});
</script>

<style>
.p-slider-handle {
  top: 0;
  transform: translateX(-50%) translateY(-30%);
}
</style>
