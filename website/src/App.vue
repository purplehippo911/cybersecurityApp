<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  <main>
    <div class="slider">
      <div class="slider__numbers">
        <strong> 1 </strong>
        <strong> 2 </strong>
        <strong> 3 </strong>
      </div>
      <div class="slider__item" v-on:click="toggleOpen">
        <strong class="slider__ball" v-on:click="toggleOpen" ref="slider">
        </strong>
      </div>
    </div>
    <!--<div class="text">
        {{ column }}
      </div> -->
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
  data() {
    return {
      column: 0,
      theme: ["dark", "light", "neon"],
    };
  },
  methods: {
    toggleOpen() {
      const toggler = document.querySelector(".slider__ball");
      const app = document.querySelector("body > #app");

      this.column++;
      if (this.column == 2) {
        app.classList.remove(`${this.theme[0]}`);
        toggler.style.gridColumnStart = "2";
        app.classList.add(`${this.theme[1]}`);
      }
      if (this.column == 4) {
        app.classList.remove(`${this.theme[1]}`);
        toggler.style.gridColumnStart = "3";
        app.classList.add(`${this.theme[2]}`);
      }
      if (this.column > 5) {
        this.column = 0;
        app.classList.remove(`${this.theme[2]}`);
        toggler.style.gridColumnStart = "1";
        app.classList.add(`${this.theme[0]}`);
      }
    },
  },
};
</script>

<style lang="scss">
@import "./sass/_mixins";
@import "./sass/_variables";
@import "./sass/_themes";

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: $Black;
  @include flex($direction: column, $gap: 3rem);
  &.dark {
    background: $KeyBg2;
  }
}
header {
  @include mainArticle(100%, 2rem, $Black);
  font-size: 2em;
  @include flex($gap: 2rem, $justify: center);
  nav {
    @include mainArticle(80%, 5rem);
    @include flex($gap: 5rem, $justify: center);
    @media screen and (max-width: 600px) {
      padding: 2rem;
      @include flex(column, 3rem, center);
    }
    a {
      font-weight: bold;
      color: $White;

      &.router-link-exact-active {
        color: $VueGreen;
      }
    }
  }
}

main {
  @include flex($direction: column, $gap: 2rem, $justify: center);
}

.slider {
  align-self: center;
  width: 10%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);

  .slider__item,
  .slider__numbers {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
  }
  .slider__numbers {
    color: $VueGrey;
    align-self: center;
  }
  .slider__item {
    width: 80%;
    justify-self: center;
    background: $VueGrey;
    padding: 0.1rem;
    border-radius: 20px;
    .slider__ball {
      background: $White;
      width: auto;
      padding: 0.8rem;
      border-radius: 50%;
      transition: 0.5s;
      grid-column: 0;
      box-shadow:-1px -1px $Black;
    }
  }
}

footer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.text {
  width: 100%;
  background: red;
  color: $White;
}
</style>
