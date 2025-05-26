<script setup>
import { ref } from "vue";
import { skills } from "../libs/skills";
const mySkills = ref(skills);
</script>

<template>
  <section class="text-white mt-18" id="skills">
    <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
      <span class="flex opacity-20">
        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
        <span
          class="w-16 h-32 rounded-l-full flex bg-[#f88fc2] blur-2xl"
        ></span>
      </span>
    </div>
    <div
      class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16"
    >
      <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]">
        <h2 class="text-4xl font-bold text-white text-left mb-4">
          Рівень
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >навичок</span
          >
        </h2>
        <div class="mt-8" v-for="skill in mySkills" :key="skill.id">
          <div class="flex items-end justify-between" data-aos="fade-right">
            <h4 class="font-semibold uppercase text-white">
              {{ skill.label }}
            </h4>
            <h3 class="text-2xl font-bold text-white">{{ skill.width }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>