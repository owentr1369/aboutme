<template>
  <div class="logo-container">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <div>
    <NavBar />
  </div>
  <router-view />
</template>

<script>
import NavBar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  margin: 0;
}
</style>
