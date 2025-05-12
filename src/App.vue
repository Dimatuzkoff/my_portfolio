<script setup>
import { defineAsyncComponent } from "vue";
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const HeroSection = defineAsyncComponent(() =>
  import("@/components/HeroSection.vue")
);
</script>

<template>
  <div class="bg-dark min-h-screen">
    <NavBar />
    <HeroSection />
  </div>
</template>


