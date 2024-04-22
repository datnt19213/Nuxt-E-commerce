<template>
  <nuxt-link
    :class="[
      'hover:underline',
      'transition-all',
      variantClasses[variant],
      modeClasses[mode]
    ]"
    @click.once="$emit('click')"
    :to="to"
    v-bind="$attrs"
  >
    <slot></slot>
  </nuxt-link>
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
      default: 'normal'
    },
    to: {
      type: String
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
        normal: 'rounded-md',
        icon: 'flex justify-center item-center',
        rounded: 'rounded-full'
      };
    }
  }
});
</script>
