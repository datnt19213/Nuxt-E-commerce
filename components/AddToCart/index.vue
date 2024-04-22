<script setup lang="ts">
import {defineProps, ref} from "vue";
import type {CartBtnType} from "~/types";

const props = defineProps({
  node: {type: Object, default: null},
  mode: {type: String as () => CartBtnType, default: "card"},
});

const state = ref<CartBtnType>(props.mode);
</script>

<template>
  <div class="w-full h-full">
    <CommonButton
      v-if="state === 'card'"
      variant="fill"
      mode="normal"
      class="flex h-full min-h-10 max-h-10 items-center border border-dark justify-center w-full overflow-hidden relative group before:content-[''] before:h-0 before:w-full before:bg-white before:absolute before:bottom-0 before:left-0 before:z-[1] hover:before:h-full transition-all before:duration-150 hover:text-dark"
    >
      <p
        class="z-[2] relative transition-all tracking-tight group-hover:text-dark text-white"
      >
        Add to cart
      </p>
    </CommonButton>
    <CommonButton
      v-if="state === 'detail'"
      variant="fill"
      mode="normal"
      class="max-h-10 w-full lg:max-w-64"
    >
      Add to cart
    </CommonButton>
  </div>
</template>
