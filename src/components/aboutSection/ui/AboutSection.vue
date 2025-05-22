<script setup>
import AboutSectionEducation from "./AboutSectionEducation.vue";
</script>
<template>
  <section class="text-white mt-18" id="about">
    <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
      <div
        class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"
      ></div>
    </div>
    <div class="flex flex-col md:flex md:justify-between md:flex-row">
      <AboutSectionEducation />
    </div>
  </section>
</template>