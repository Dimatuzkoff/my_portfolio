<script setup>
import { ref } from "vue";
import NavBarItem from "./NavBarItem.vue";
import { menuItems } from "./menuItems";
const Menu = ref(menuItems);

const emit = defineEmits(["closeBurgerMenu"]);

const ScrollToSection = (href) => {
  console.log("closeBurgerMenu");

  emit("closeBurgerMenu");
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <nav
    class="fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row"
  >
    <ul
      class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"
    >
      <li v-for="item in Menu" :key="item.name">
        <NavBarItem @tabClick="ScrollToSection" :tab="item" />
      </li>
    </ul>
  </nav>
</template>