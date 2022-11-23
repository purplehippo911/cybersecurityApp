<template>
  <div class="home">
    <div class="container row">
      <div class="hero">
        <div class="container grid">
          <picture>
            <img
              src="https://media.discordapp.net/attachments/1043764997903368205/1044214774176694292/Vindicator.png"
              alt="our logo"
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
            <form action="/about">
              <button class="hero__button about" src="/about">
                Learn more
              </button>
            </form>
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

<style scoped lang="scss">
@import "../variables";
@import "../_mixins";
.home {
  @include mainArticle(100%, 2rem);
  @include flex($gap: 2rem, $justify: center);
  .container {
    width: 80%;
    .hero {
      border: 10px solid $Black;
      background: $VueGreen;
      color: $Black;
      border-radius: 20px;
      @include flex($gap: 0, $justify: center);
      .hero__info {
        @include flex(column, 2rem, center);
        padding: 2rem;
        .hero__title {
          font-size: 2.5em;
          margin-bottom: 0;
          color: $White;
        }
        .info-p {
          margin-top: 0;
          width: 70%;
          padding: 2rem;
          opacity: 0.5;
        }
      }

      picture {
        padding: 2rem;
        align-self: center;
        img {
          border-radius: 20px;
        }
      }
      form {
        width: 100%;
        @include flex($gap: 0, $justify: center);
      }
      .hero__button {
        grid-column: span 2;
        @include btnStyle(100%, $Black, $White, 1rem 0.5rem);
        &.about {
          @include btnStyle(80%, $White, $Black, 1rem 0.5rem);
        }
      }
      .grid {
        @include grid(2, 300px, 1fr);
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
