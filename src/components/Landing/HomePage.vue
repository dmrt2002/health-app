<template>
  <div id="app" class="min-h-screen w-full bg-gray-200">
    <main>
      <NavBar />
      <Hero/>
      <Features/>
      <About/>
      <Team/>
      <Services/>
    </main>
  </div>
</template>

<script>
import About from "../components/Landing/AboutSection.vue";
import NavBar from "../components/Landing/NavBar.vue";
import Features from "../components/Landing/FeaturesSection.vue";
import Hero from "../components/Landing/HeroSection.vue";
import Services from "../components/Landing/ServicesSection.vue";
import Team from "../components/Landing/TeamSection.vue";




// NAVBAR
export default {
  name: "App",
  components: {
    NavBar,
    About,
    Features,
    Hero,
    Services,
    Team
  }
};


</script>
