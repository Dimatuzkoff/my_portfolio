<script setup>
import { ref } from "vue";
import { categoriesItems } from "../libs/constants/categoriesItems";
</script>
<template>
  <section class="text-white mt-20">
    <div class="px-4 xl:pl-16">
      <div class="mb-4 md:flex md:justify-between xl:pr-16">
        <h2 class="text-4xl font-bold text-white">Мої проекти</h2>
        <div class="flex space-x-4 mb-4 mt-5 md:nt-0">
          <button
            class="hover:text-primary"
            v-for="category in categoriesItems"
            :key="category.id"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>