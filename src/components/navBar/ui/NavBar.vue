<script setup>
import { ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBarList from "./NavBarList.vue";
AOS.init();

const isMenuOpen = ref(false);
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
<template>
  <header
    class="flex justify-between items-center p-6 bg-opacity-50 relative z-20"
  >
    <div class="text-white text-3xl font-bold" data-aos="zoom-in-down">
      LOGO
    </div>
    <!-- mobile toggle button -->
    <div class="md:hidden z-30" data-aos="zoom-in-down">
      <button
        type="button"
        class="block text-secondary focus:outline-none"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span v-if="isMenuOpen" class="text-5xl">
          <img
            src="http://img.icons8.com/ios-filled/100/ffffff/delete-sign.png"
            alt="close"
            width="50"
            height="50"
          />
        </span>
        <span v-else class="text-5xl">
          <img
            src="http://img.icons8.com/ios-filled/100/ffffff/menu--v6.png"
            alt="menu"
            width="50"
            height="50"
          />
        </span>
      </button>
    </div>
    <NavBarList
      @closeBurgerMenu="closeMenu"
      :class="[isMenuOpen ? 'block' : 'hidden']"
    />
  </header>
</template>