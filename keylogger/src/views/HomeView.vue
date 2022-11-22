<template>
  <div class="home">
    <div class="container row">
      <div class="hero">
        <div class="container grid">
          <h1 class="hero__title">Vindicator</h1>
          <picture>
            <img
              src="https://media.discordapp.net/attachments/1043764997903368205/1044214774176694292/Vindicator.png"
              alt="our logo"
            />
          </picture>
          <div class="hero__info">
            <p class="info__p">
              Try out the Vindicator extension. It's our cybersecurity app,
              which can help you with saving your form info's. It has IP loggers
              and revenant framework's cookies, which can help you find out
              where you are. We will only be able to view your IP address and we
              will take care of it as if it were our own children. Test us out!
              Safe and secure?
            </p>
          </div>
          <button class="hero__button" download="">Download it</button>
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
  @include mainArticle(100%, 3rem);
  @include flex($gap: 2rem, $justify: center, $align: center);
  .container {
    max-width: 80%;
    .hero {
      border: 10px solid $Black;
      background: $VueGreen;
      border-radius: 20px;
      .hero__title {
        font-size: 1.9em;
        grid-column: span 2;
        justify-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 600px) {
          grid-column: 1 / -1;
        }
        &::before,
        &::after {
          content: "";
          width: 100%;
          padding: 0.5rem;
          background: $White;
        }
      }
      picture,
      .hero__info {
        width: 50%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        &-right {
          justify-self: end;
        }
        .hero__button {
          grid-column: span 2;
        }
      }
      .grid {
        display: grid;
        @include grid(auto-fit, 300px, 2fr);
      }
    }
  }
  .row {
    display: flex;
    justify-content: center;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 2rem;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

svg,
img {
  max-width: 100%;
}
</style>
