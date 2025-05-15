<script setup>
const props = defineProps({
  tab: {
    name: String,
    href: String,
  },
});
const emit = defineEmits(["tabClick"]);
const passHref = (href) => {
  emit("tabClick", href);
};
</script>
<template>
  <a
    :href="tab.href"
    class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg"
    @click="passHref(tab.href)"
    >{{ tab.name }}</a
  >
</template>