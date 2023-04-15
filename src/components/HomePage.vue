<template>
  <div id="app" class="min-h-screen w-full bg-gray-200">
    <main>
      <NavBar />
      <Hero/>
      <Features/>
      <About/>
      <Team/>
      <Services/>
      <!-- <Contact/> -->
    </main>
  </div>
</template>

<script>
import About from "../components/Landing/AboutSection.vue";
import NavBar from "../components/Landing/NavBar.vue";
// import Contact from "../components/Landing/ContactSection.vue";
import Features from "../components/Landing/FeaturesSection.vue";
import Hero from "../components/Landing/HeroSection.vue";
import Services from "../components/Landing/ServicesSection.vue";
import Team from "../components/Landing/TeamSection.vue";
export default {
  name: "App",
  components: {
    NavBar,
    About,
    // Contact,
    Features,
    Hero,
    Services,
    Team
  }
};
</script>

<style>
</style>
