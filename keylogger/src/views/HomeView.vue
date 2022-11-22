<template>
  <div class="home">
    <div class="container row">
      <div class="hero">
        <div class="container grid">
          <h1 class="hero__title">KeyLogger</h1>
          <picture>
            <img
              src="https://media.discordapp.net/attachments/1043764997903368205/1044214774176694292/Vindicator.png"
              alt="our logo"
            />
          </picture>
          <div class="hero__info">
            <p class="info__p">
              Try out the Vindicator extension. It's our cybersecurity
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
.home {
  width: 100%;
  color: black;
  .container {
    max-width: 80%;
    margin: 0 auto;
    .hero {
      border: 10px solid $VueGreen;
      background: aliceblue;

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
          background: white;
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
        grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
        @media screen and (max-width: 600px) {
          grid-template-columns: repeat(1, minmax(300px, 1fr));
          grid-template-rows: repeat(3, 300px);
        }
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
