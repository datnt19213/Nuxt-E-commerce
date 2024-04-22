<template>
  <div class="w-full flex flex-col gap-7 pb-12 bg-white overflow-y-scroll">
    <div
      class="w-full flex justify-end border-b border-gray border-opacity-50 py-5 opacity-80"
    >
      <CommonLink
        to="/profile/my-account"
        variant="outline"
        mode="normal"
        class="hover:no-underline flex items-center justify-center w-fit p-1.5 px-3 gap-3 group hover:border-semigreen"
      >
        <IconsEditIcon class="text-xl" />
        <span
          class="text-base tracking-tight text-dark group-hover:text-semigreen transition-all"
          >Save Changes</span
        >
      </CommonLink>
    </div>
    <div class="w-full">
      <div class="flex gap-7 items-center">
        <input
          type="file"
          name="countyCheckout"
          id="countyCheckout"
          class="w-full hidden rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none"
          placeholder="C City"
        />
        <label
          for="countyCheckout"
          class="cursor-pointer rounded-full relative group"
        >
          <div class="h-24 w-24 rounded-full shadow overflow-hidden">
            <img :src="imageSample[1]" alt="avtProfile" class="object-center" />
          </div>
          <div
            class="p-1 rounded-full absolute bottom-1 right-1 block bg-white shadow-sm"
          >
            <IconsEditIcon class="text-lg text-semigreen opacity-70" />
          </div>
        </label>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center mx-1">
      <div class="w-full flex flex-col gap-1 col-span-1">
        <span class="text-sm font-medium tracking-tight opacity-80">
          Name
        </span>
        <input
          type="text"
          name="nameProfile"
          id="nameProfile"
          class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70"
          placeholder="Name"
          value="John Smith"
        />
      </div>
      <div class="w-full flex flex-col gap-1 col-span-1">
        <span class="text-sm font-medium tracking-tight opacity-80">
          Email
        </span>
        <input
          type="email"
          name="emailProfile"
          id="emailProfile"
          class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70"
          placeholder="email"
          value="abc123@gmail.com"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center mx-1">
      <div class="relative col-span-1 w-full flex flex-col gap-1">
        <span class="text-sm font-medium tracking-tight opacity-80">
          Date of Birth
        </span>
        <input
          type="date"
          value=""
          placeholder="mm/dd/yyyy"
          class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70"
        />
      </div>
      <div class="col-span-1 w-full flex flex-col gap-1">
        <span class="text-sm font-medium tracking-tight opacity-80">
          Gender
        </span>
        <div class="w-full col-span-1 grid grid-cols-2 gap-3">
          <label
            class="px-3 h-fit ring-gray ring-1 rounded-md col-span-1 flex justify-between items-center cursor-pointer"
          >
            <div
              for="gender-radio"
              class="py-1.5 text-base tracking-tight flex flex-col pointer-events-none select-none"
            >
              <span class="font-sm font-normal text-dark opacity-70">Male</span>
            </div>
            <input
              id="gender-radio"
              type="radio"
              value="Male"
              name="gender-radio"
              class="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none rounded-full border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-2 before:w-2 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-white before:opacity-0 checked:border-semigreen checked:bg-semigreen checked:before:opacity-100"
            />
          </label>
          <label
            class="px-3 h-fit ring-gray ring-1 rounded-md col-span-1 flex justify-between items-center cursor-pointer"
          >
            <div
              for="gender-radio"
              class="py-1.5 text-base tracking-tight flex flex-col pointer-events-none select-none"
            >
              <span class="font-sm text-dark opacity-70">Female</span>
            </div>
            <input
              id="gender-radio"
              type="radio"
              value="Female"
              name="gender-radio"
              class="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none rounded-full border border-gray transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-2 before:w-2 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-white before:opacity-0 checked:border-semigreen checked:bg-semigreen checked:before:opacity-100"
            />
          </label>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center mx-1">
      <div class="w-full flex flex-col gap-1 col-span-1">
        <span class="text-sm font-medium tracking-tight opacity-80">
          Phone
        </span>
        <input
          type="tel"
          name="phoneProfile"
          id="phoneProfile"
          class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70"
          placeholder="+2168379784374"
          value="+2168379784374"
        />
      </div>
      <div class="w-full flex flex-col gap-1 col-span-1">
        <span class="text-sm font-medium tracking-tight opacity-80">
          Nationality
        </span>
        <input
          type="text"
          name="nationalityProfile"
          id="nationalityProfile"
          class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70"
          placeholder="Vietnam"
          value="Vietnam"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center mx-1">
      <div class="w-full flex flex-col gap-1 mx-1">
        <span class="text-sm font-medium tracking-tight opacity-80">
          Address 1
        </span>
        <input
          type="text"
          name="address1Profile"
          id="address1Profile"
          class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70"
          placeholder="Address 1"
          value="Cecelia Havens, 456 White Finch Street North Augusta"
        />
      </div>
      <div class="w-full flex flex-col gap-1 col-span-1 mx-1">
        <span class="text-sm font-medium tracking-tight opacity-80">
          Address 2 (Optional)
        </span>
        <input
          type="text"
          name="address2Profile"
          id="address2Profile"
          class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70"
          placeholder="Address 2 (Optional)"
          value="Noah Tonkin, 86 Baker Street, North Sydney, Australia"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {imageSample} from "~/common";
</script>
