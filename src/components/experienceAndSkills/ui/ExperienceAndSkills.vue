<script setup>
import { ref } from "vue";
import { skills } from "../libs/constants/skills";
import { experiences } from "../libs/constants/experiences";
const mySkills = ref(skills);
const myExperiences = ref(experiences);
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
      <div
        class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-[80%]"
        data-aos="flip-right"
      >
        <h2 class="text-4xl font-bold text-white text-left mb-4">
          Рівень
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >навичок</span
          >
        </h2>
        <div
          class="mt-8"
          v-for="skill in mySkills"
          :key="skill.id"
          data-aos="fade-right"
        >
          <div class="flex items-end justify-between">
            <h4 class="font-semibold uppercase text-white">
              {{ skill.label }}
            </h4>
            <h3 class="text-2xl font-bold text-white">{{ skill.width }}</h3>
          </div>
          <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
            <div
              class="h-1 rounded-full bg-primary"
              :style="`width :${skill.width}`"
              data-aos="fade-right"
            ></div>
          </div>
        </div>
      </div>
      <div data-aos="flip-right">
        <h2
          class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8"
        >
          Мій досвід
        </h2>
        <div class="space-y-8 py-8">
          <div
            class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]"
            v-for="elem in myExperiences"
            :key="elem.id"
            data-aos="fade-left"
          >
            <div class="w-1/4">
              <img
                src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png"
                alt="icon"
              />
            </div>
            <div class="w-3/4 pl-4">
              <h3
                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              >
                {{ elem.role }}
              </h3>
              <p class="text-white">{{ elem.company }}</p>
              <p class="text-white">{{ elem.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>