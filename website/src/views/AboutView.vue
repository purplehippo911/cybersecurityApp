<template>
  <div class="about">
    <div class="container row">
      <h1>About Us</h1>

      <section class="about-section">
        <div class="container row">
          <h2 class="section__title">SolarisX</h2>
          <p class="section__info">
            I work as an Ethical Programmer. I code in HTML, CSS, Javascript,
            Java, Lua, C#, C++ and Python. I specialize in Cybersecurity and I
            have 5 years of experience in programming to date, and 7 years in
            Computer Science.
          </p>

          <picture>
            <img
              class="profile__icon profile__icon--right"
              src="https://cdn.discordapp.com/attachments/1043764997903368205/1044600354127478824/SolarisX.png"
              alt="Solaris's profile picture"
            />
          </picture>
        </div>
      </section>

      <section class="about-section">
        <div class="container row">
          <h2 class="section__title">Purplehippo911</h2>
          <p class="section__info">
            I'm interested in learning more about frontend and backend. I'm
            willing to collaborate on projects in both frontend and backend
            languages, so that we can have fun working together. I have 2 years
            of experience with frontend and I know HTML, CSS, Javascript and
            Python. Vue and Flask are my favourite JS and Python frameworks and
            I mostly use Sass for styling. if you want to have fun collaborating
            with me on any type of frontend project or a Python project, then
            remember to DM me. I mostly want to have a fun experience with
            coding, so whether you're a beginner or a professional, you'll be
            welcome to join in a project. I want to have fun coding and learning
            with someone and get to know new people.
          </p>

          <picture>
            <img
              class="profile__icon profile__icon--left"
              src="https://jeuxvideo.rds.ca/wp-content/uploads/sites/2/2020/07/Shyguy-1024x1144.jpg"
              alt="Purplehippo's profile picture"
            />
          </picture>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
@import "../sass/_variables";
@import "../sass/_mixins";
@import "../sass/_themes";

.about {
  width: 100%;

  .container {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;

    .about-section {
      background: $VueGreen;
    }
  }

  .row {
    @include flex(column, 2rem, center);
  }
}
</style>
