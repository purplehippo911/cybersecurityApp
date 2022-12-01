<template>
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
          Try out the Vindicator extension. It's our cybersecurity app, which
          can help you with saving your form info's. It has IP loggers and
          revenant framework's cookies, which can help you find out where you
          are. We will only be able to view your IP address and we will take
          care of it as if it were our own children. Test us out! Safe and
          secure?
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
</template>

<script>
export default {
  name: "MainDownload",
  props: {},
};
</script>
