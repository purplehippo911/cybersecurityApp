<template>
  <div class="home">
    <div class="container row">
      <MainDownloadVue />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainDownloadVue from "@/components/MainDownload.vue";

export default {
  name: "HomeView",
  components: {
    MainDownloadVue,
  },
};
</script>

<style lang="scss">
@import "../sass/_variables";
@import "../sass/_mixins";
@import "../sass/_themes";

.home {
  @include mainArticle(100%, 2rem);
  .container {
    width: 80%;
    margin: 0 auto;
    .hero,
    section {
      background: $VueGreen;
      color: $Black;
      box-shadow: 10px 10px $Black;
      border-radius: 20px;
      @include flex($gap: 0, $justify: center);
      .hero__info {
        @include flex(column, 1rem, center);
        padding: 2rem;
        .hero__title {
          font-size: 2.5em;
          color: $White;
          margin-bottom: 0;
        }
        .info__p {
          margin: 0;
          padding: 0.5rem;
          opacity: 0.5;
        }
      }

      picture {
        padding: 2rem;
        margin: 0 auto;
        @include flex(row, $justify: center);
        @media screen and (max-width: 600px) {
          margin: 2rem 0;
          padding: 0;
        }
        img {
          border-radius: 20px;
          box-shadow: 10px 10px $Black;
        }
        .logo {
          @media screen and (max-width: 600px) {
            margin: 4rem 0 0;
            width: 80%;
          }
        }
      }
      .hero__button {
        grid-column: span 2;
        @include btnStyle(100%, $White, $Black, 1rem 0.5rem, $Black);
        &.about {
          margin-bottom: 1rem;
          @include btnStyle(80%, $White, $VueGreen, 1rem 0.5rem, $VueGrey);
        }
      }
      .grid {
        @include grid(auto-fit, 300px, 1fr);
        justify-content: center;
      }
    }
  }
  .row {
    @include flex($gap: 2rem, $justify: center);
  }
}
h3 {
  margin: 40px 0 0;
}
svg,
img {
  max-width: 100%;
}
</style>
