<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld/>
    <MainFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    MainFooter,
  },
};
</script>
