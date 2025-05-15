<script setup>
import { defineAsyncComponent } from "vue";
const NavBar = defineAsyncComponent(() => import("@/components/navBar"));
const HeroSection = defineAsyncComponent(() =>
  import("@/components/HeroSection.vue")
);
const ServicesSection = defineAsyncComponent(() =>
  import("@/components/ServicesSection.vue")
);
</script>

<template>
  <div class="bg-dark min-h-screen">
    <NavBar />
    <HeroSection />
    <ServicesSection />
  </div>
</template>


