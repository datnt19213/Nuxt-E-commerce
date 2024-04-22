<script setup lang="ts">
import { defineProps, onMounted } from "vue";

const props = defineProps({
  description: {type: String, required: true},
  node: { type: Object, required: true },
});


// onMounted(() => {
//   const stackRows = document.querySelectorAll(".stack-row");
//   const contactDiv = document.getElementById("contact-div");
//   if (contactDiv) {
//     stackRows.forEach(item => {
//       contactDiv.appendChild(item);
//     });
//   }
// });

</script>
<template>
  <div class="w-full">
    <div id="description-container" class="w-full tracking-tight font-light opacity-90 text-base flex-col gap-3" v-html="description" />
    <!-- <div id="contact-div" class="flex gap-1" v-html="props.description" /> -->
  </div>
</template>

<style lang="scss">

#description-container{
  display: flex;
  flex-direction: column;

  h2{
    font-size: 2em;
    font-weight: bold;
    padding: 0 0 3rem 0;
    
    @media screen and (max-width:768px) {
      font-size: 1.5rem;
      padding: 0 0 1.6rem 0;

    }
  }
  .stack-row{
    display: flex;
    gap: 1rem;

    .stack-row:first-child{
      @media screen and (max-width:768px) {
        display: none
  
      }
    }
    .stack-row:last-child{
      @media screen and (min-width:768px) {
        display: none;
      }
    }
  }

}


</style>