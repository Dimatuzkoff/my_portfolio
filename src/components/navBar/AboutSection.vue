<script setup>
import { ref } from "vue";
const education = ref([
  {
    id: 1,
    School: "school 1",
    program: "Software Engineer",
    year: "2022",
  },
  {
    id: 2,
    School: "school 2",
    program: "Software Engineer",
    year: "2020",
  },
]);
</script>
<template>
  <section class="text-white mt-18" id="about">
    <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
      <div
        class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"
      ></div>
    </div>
    <div
      class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1"
    >
      <div data-aos="flip-right">
        <h2 class="text-4xl font-bold text-white text-left mb-8">
          My Education
        </h2>
        <div class="space-y-8 py-8">
          <!-- тута 37:12-->
        </div>
      </div>
    </div>
  </section>
</template>