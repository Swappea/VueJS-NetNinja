<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from "./components/Ninjas.vue";

export default {
  name: "app",
  components: {
    Ninjas
    // 'name': Component
  },
  data() {
    return {
      title: "Swappea App"
    };
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
