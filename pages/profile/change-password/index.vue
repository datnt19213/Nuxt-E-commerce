<template>
  <div class="w-full flex flex-col gap-7">
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
    <div class="flex flex-col gap-3 mx-1">
      <div class="w-full flex flex-col gap-1 col-span-1">
        <span class="text-sm font-medium tracking-tight opacity-80">
          Old Password
        </span>
        <input
          type="password"
          name="passwordOldChange"
          id="passwordOldChange"
          class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70"
          placeholder="Your old password"
        />
      </div>
      <div class="w-full flex flex-col gap-1 col-span-1">
        <span class="text-sm font-medium tracking-tight opacity-80">
          New Password
        </span>
        <input
          type="password"
          name="passwordNewChange"
          id="passwordNewChange"
          class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70"
          placeholder="Your new password"
        />
      </div>
      <div class="w-full flex flex-col gap-1 col-span-1">
        <span class="text-sm font-medium tracking-tight opacity-80">
          Confirm Password
        </span>
        <input
          type="password"
          name="passwordNewChange"
          id="passwordNewChange"
          class="block w-full rounded-md border-0 py-1.5 px-3 text-dark ring-1 ring-gray placeholder:text-gray focus:ring-2 transition-all focus:ring-semigreen sm:text-sm sm:leading-6 outline-none text-opacity-70"
          placeholder="Your new password"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {imageSample} from "~/common";
</script>
