<script setup>
const props = defineProps({
  education: {
    id: Number,
    school: String,
    program: String,
    year: String,
  },
});
</script>
<template>
  <div
    class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
  >
    <div class="w-1/4">
      <img
        src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
        alt="graduation-cap--v1"
      />
    </div>
    <div class="w-3/4 pl-4">
      <h3
        class="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl"
      >
        {{ education.school }}
      </h3>
      <p class="text-white">{{ education.program }}</p>
      <p class="text-white">{{ education.year }}</p>
    </div>
  </div>
</template>