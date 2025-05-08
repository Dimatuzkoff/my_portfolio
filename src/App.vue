<script setup>
import { defineAsyncComponent } from "vue";
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
</script>
<template>
  <div class="bg-dark min-h-screen">
    <NavBar />
  </div>
</template>


