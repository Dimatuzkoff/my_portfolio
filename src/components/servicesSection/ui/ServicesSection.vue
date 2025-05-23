<script setup>
import { ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../libs/constants/services";
AOS.init();
const myServices = ref(services);
</script>
<template>
  <section class="text-white mt-20" id="services">
    <div class="px-4 xl:pl-16" data-aos="flip-right">
      <h2 class="text-4xl font-bold text-white mb-4">Мій стек технологій</h2>
    </div>
    <div
      class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <div
        v-for="service in myServices"
        :key="service.id"
        data-aos="fade-up"
        class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
      >
        <div class="mx-auto h-24 text-center xl:h-28 xl:w-28">
          <div>
            <img
              class="mx-auto h-24 text-center xl:h-28 xl:w-28"
              :src="service.icon"
              alt="service icon"
            />
          </div>
        </div>
        <div class="text-center">
          <h3
            class="pt-8 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl"
          >
            {{ service.name }}
          </h3>
          <!-- <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            {{ service.description }}
          </p> -->
        </div>
      </div>
    </div>
  </section>
</template>
