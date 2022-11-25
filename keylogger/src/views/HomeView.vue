<template>
  <div class="home">
    <div class="container row">
      <div class="hero">
        <div class="container grid">
          <picture>
            <img
              src="https://media.discordapp.net/attachments/1043764997903368205/1044214774176694292/Vindicator.png"
              alt="our logo"
              class="logo"
            />
          </picture>
          <div class="hero__info">
            <h1 class="hero__title">Vindicator</h1>
            <p class="info__p">
              Try out the Vindicator extension. It's our cybersecurity app,
              which can help you with saving your form info's. It has IP loggers
              and revenant framework's cookies, which can help you find out
              where you are. We will only be able to view your IP address and we
              will take care of it as if it were our own children. Test us out!
              Safe and secure?
            </p>
            <button class="hero__button about" @click="$router.push('about')">
              Learn more
            </button>
            <button class="hero__button" download="" target="_blank">
              Download it
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss">
@import "../variables";
@import "../_mixins";
@import "../themes";

.home {
  @include mainArticle(100%, 2rem);
  .container {
    width: 80%;
    margin: 0 auto;
    .hero {
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
        @include btnStyle(100%, $White, $VueGreen, 1rem 0.5rem);
        &.about {
          margin-bottom: 1rem;
          @include btnStyle(80%, $White, $Black, 1rem 0.5rem);
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
