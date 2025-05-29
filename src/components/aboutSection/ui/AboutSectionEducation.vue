<script setup>
import { ref } from "vue";
import { education } from "../libs/constants/education";
import AboutSectionEducationItem from "./AboutSectionEducationItem.vue";
import AboutSectionEducationMe from "./AboutSectionEducationMe.vue";
const myEducation = ref(education);
</script>

<template>
  <div
    class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1"
  >
    <div data-aos="flip-right">
      <h2 class="text-4xl font-bold text-white text-left mb-8">Моя освіта</h2>
      <div class="space-y-8 py-8">
        <template v-for="elem in myEducation" :key="elem.id">
          <AboutSectionEducationItem :education="elem" />
        </template>
      </div>
    </div>
    <AboutSectionEducationMe />
  </div>
</template>