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
const ExperienceAndSkills = defineAsyncComponent(() =>
  import("@/components/experienceAndSkills")
);
const MyProjects = defineAsyncComponent(() =>
  import("@/components/projectSection")
);
</script>

<template>
  <div class="bg-dark min-h-screen">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ExperienceAndSkills />
    <MyProjects />
  </div>
</template>


