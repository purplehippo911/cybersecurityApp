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
          There is simply no substitute for proper online security, and the best
          way to stay safe on the internet is to use a security extension like
          Vindicator. Our formlogger automates the process of logging in and out
          of your accounts, tracking your activities on the web to ensure you're
          staying safe.
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
