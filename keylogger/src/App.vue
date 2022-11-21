<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  <router-view />
  <footer>
    <MainFooter />
  </footer>
</template>

<script>
import MainFooter from "./components/MainFooter.vue";
export default {
  name: "App",
  components: {
    MainFooter,
  },
};
</script>

<style lang="scss">
@import "_variables";

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  color: $VueGrey;
}
header {
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  font-size: 2em;
}
nav {
  padding: 3rem;

  a {
    font-weight: bold;
    color: $VueGrey;

    &.router-link-exact-active {
      color: $VueGreen;
    }
  }
}
</style>
