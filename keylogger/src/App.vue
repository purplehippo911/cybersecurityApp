<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
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
@import "_mixins.scss";
@import "_variables.scss";
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
  color: $Black;
  @include flex(column, 6rem, stretch, stretch);
}
a {
  text-decoration: none;
}
header {
  @include mainArticle(100%, 2rem, $Black);
  font-size: 2em;
  @include flex(2rem, center, center);
}
nav {
  @include mainArticle(80%, 5rem);
  @include flex($gap: 5rem, $justify: center, $align: center);
  @media screen and (max-width: 600px) {
    padding: 2rem;
    @include flex(column, 3rem, center, center);
  }
  a {
    font-weight: bold;
    color: $White;

    &.router-link-exact-active {
      color: $VueGreen;
    }
  }
}
</style>
