<script setup>
import { ref } from "vue";
const services = ref([
  {
    id: 1,
    icon: "https://img.icons8.com/ios-filled/100/ffffff/google-code.png",
    name: "WEB DEVELOPMENT",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/external-vectorslab-glyph-vectorslab/100/fffeee/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png",
    name: "Technical Writing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/external-solid-design-circle/100/ffffff/external-Mobile-Development-digital-marketing-solid-design-circle.png",
    name: "Mobile Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/ios-filled/100/ffffff/email-open.png",
    name: "WEB DEVELOPMENT",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/ios-filled/100/ffffff/windows10-personalization.png",
    name: "Graphic Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!",
  },
  {
    id: 6,
    icon: "https://img.icons8.com/ios-filled/100/ffffff/web-design.png",
    name: "Web Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut!",
  },
]);
</script>
<template>
  <section class="text-white mt-20" id="services">
    <div class="px-4 xl:pl-16">
      <h2 class="text-4xl font-bold text-white mb-4">My services</h2>
    </div>
    <div
      class="py-8 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
    >
      <div
        v-for="service in services"
        :key="service.id"
        data-aos="fade-up"
        class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
      ></div>
    </div>
  </section>
</template>
