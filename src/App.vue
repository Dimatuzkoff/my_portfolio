<script setup>
import { defineAsyncComponent } from "vue";
const NavBar = defineAsyncComponent(() => import("@/components/navBar"));
const HeroSection = defineAsyncComponent(() =>
  import("@/components/heroSection")
);
const ServicesSection = defineAsyncComponent(() =>
  import("@/components/servicesSection")
);
const AboutSection = defineAsyncComponent(() =>
  import("@/components/aboutSection")
);
</script>

<template>
  <div class="bg-dark min-h-screen">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
  </div>
</template>


