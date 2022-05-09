<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <NavBar />
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
