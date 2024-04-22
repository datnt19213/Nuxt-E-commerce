<template>
  <div class="flex flex-col gap-5 h-full">
    <div class="p-5 bg-slate-50 rounded-md">
      <div class="flex items-center gap-5">
        <div class="overflow-hidden h-20 aspect-square rounded-full shadow-md">
          <img :src="imageSample[0]" alt="Image Avatar" class="object-center" />
        </div>
        <div class="flex flex-col justify-center">
          <span class="font-light text-lg tracking-tight">Welcome,</span>
          <span class="font-medium tracking-tight text-xl">John Smith</span>
        </div>
      </div>
    </div>
    <div class="w-full bg-slate-50 rounded-md p-5 h-full">
      <CommonLink
        to="/profile"
        variant="ghost"
        mode="normal"
        class="focus-within:bg-slate-100 cursor-pointer hover:no-underline flex justify-start px-5 items-center py-3 group hover:bg-slate-100 gap-1.5"
      >
        <IconsOverviewIcon class="text-3xl" />
        <span class="group-hover:text-semigreen tracking-tight transition-all"
          >Overview</span
        >
      </CommonLink>
      <CommonLink
        to="/profile/my-account"
        variant="ghost"
        mode="normal"
        class="focus-within:bg-slate-100 cursor-pointer hover:no-underline flex justify-start px-5 items-center py-3 group hover:bg-slate-100 gap-1.5"
      >
        <IconsUserIcon class="text-3xl" />
        <span class="group-hover:text-semigreen tracking-tight transition-all"
          >My Account</span
        >
      </CommonLink>
      <CommonLink
        to="/profile/wish-list"
        variant="ghost"
        mode="normal"
        class="focus-within:bg-slate-100 cursor-pointer hover:no-underline flex justify-start px-5 items-center py-3 group hover:bg-slate-100 gap-1.5"
      >
        <IconsFavoriteLineIcon class="text-3xl" />
        <span class="group-hover:text-semigreen tracking-tight transition-all"
          >Wish List</span
        >
      </CommonLink>
      <CommonLink
        to="/profile/change-password"
        variant="ghost"
        mode="normal"
        class="focus-within:bg-slate-100 cursor-pointer hover:no-underline flex justify-start px-5 items-center py-3 group hover:bg-slate-100 gap-1.5"
      >
        <IconsKeyIcon class="text-3xl" />
        <span class="group-hover:text-semigreen tracking-tight transition-all"
          >Change Password</span
        >
      </CommonLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {imageSample} from "~/common";
</script>
