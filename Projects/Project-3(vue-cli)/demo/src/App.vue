<template>
  <div>
    <app-header></app-header>
    <app-ninjas :ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Ninjas from "./components/Ninjas";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ]
    };
  }
};
</script>

<style>
</style>