<template>
  <div class="w-full flex flex-col items-center gap-7">
    <div
      class="rounded-md w-full bg-semigreen p-16 xl:text-4xl lg:text-2xl text-3xl flex md:flex-row flex-col justify-center gap-1"
    >
      <span class="text-white tracking-tight text-center font-semibold"
        >Welcome to your profile,</span
      >
      <span
        class="text-white tracking-tight text-center font-semibold underline"
        >John Smith.</span
      >
    </div>
    <div class="rounded-md w-full h-full bg-slate-50 p-16">
      <p class="" id="text-welcome">
        <span
          v-for="(char, index) in typedText"
          :key="index"
          :class="`text-base font-light tracking-tight ${
            !charVisible[index] ? 'invisible' : ''
          }`"
          >{{ char }}</span
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {BooleanType} from "~/types/old.index";

const text =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem vitae, placeat quam, sequi esse pariatur dolor quibusdam saepe praesentium blanditiis, molestias necessitatibus consectetur libero. Aliquam fugit aperiam fugiat enim dignissimos. Dolores aliquid corporis repellat mollitia delectus porro nulla reiciendis odio quis. Quisquam illo nulla impedit fugiat deleniti perferendis aliquid tempore unde deserunt blanditiis, dolorum optio eligendi cum. Impedit, minima illum!";

const typedText = ref("");
const charVisible = ref<BooleanType[]>([]);

const typeWriter = () => {
  let i = 0;
  const textLength = text.length;
  function type() {
    if (i < textLength) {
      const randomSpeed = Math.floor(Math.random() * (50 - 35 + 1)) + 15;
      typedText.value += text.charAt(i);
      charVisible.value.push(true);
      i++;
      setTimeout(type, randomSpeed);
    }
  }
  type();
};

onMounted(() => {
  typeWriter();
});
</script>
