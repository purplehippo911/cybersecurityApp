<template>
  <div class="about">
    <div class="container row">
      <section class="about-section about-section--product-info">
        <div class="container row">
          <h2 class="section__title">More info about Vindicator</h2>
          <p class="section__info">
            Internet security is a big issue for anyone who spends any time
            online. There are all sorts of shady people out there who would love
            to steal your data or cause you other harm. Thankfully, there are a
            few great tools available to help keep you safe. The most important
            of these is undoubtedly a good antivirus program, and there are many
            good ones on the market. However, the best way to prevent hacks and
            other online threats is to use a good internet security extension
            like Vindicator Formlogger. This extension will help you track all
            the forms and forms-related activity that happens on your website.
            This can be invaluable information if you're ever worried about data
            breaches or other malicious activities. Formlogger also keeps track
            of who has access to which forms, making it easy to identify
            potential pests and enforce policy accordingly. Overall, using an
            internet security extension like Vindicator Formlogger is one of the
            best things you can do to stay safe online. Internet security
            extensions like Vindicator and Formlogger can help you keep your
            online activity and data safe by detecting and preventing malicious
            activities before they happen. Formlogger is especially useful for
            gathering logs of user activity, which can help identify security
            threats and potential problems early on.
          </p>
        </div>
      </section>
      <h1 class="about__title">About Us</h1>

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
  @include mainArticle(100, 2rem);

  .container {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    .about__title {
      color:$VueGreen;
      margin-top:2rem;
    }
    section {
    }

    h2 {
      color:$White;
    }

    picture {
      .profile__icon--right {
        box-shadow: 10px 10px $White;
      }
    }
  }

  .row {
    flex-direction: column;
    gap:4rem;
  }
}
</style>
