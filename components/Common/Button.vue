<template>
  <button
    :class="[
      'transition-all',
      variantClasses[variant],
      modeClasses[mode]
    ]"
    @click.once="$emit('click')"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { ModeType, VariantType } from '~/types/old.index';

export default defineComponent({
  inheritAttrs: false,
  props: {
    variant: {
      type: String as () => VariantType,
      default: 'fill'
    },
    mode: {
      type: String as () => ModeType,
      default: ''
    }
  },
computed: {
    variantClasses(): Record<string, string> {
      return {
        fill: 'bg-dark text-white',
        outline: 'border border-dark text-dark',
        ghost: 'text-dark'
      };
    },
    modeClasses(): Record<string, string> {
      return {
        normal: 'px-3 py-2 text-center rounded-md',
        icon: 'p-1 rounded-full',
        rounded: 'rounded-full px-3 py-2 text-center rounded-full'
      };
    }
  }
});
</script>
