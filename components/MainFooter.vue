<template>
  <footer class="footer">
    <section class="first">
      <div class="policies">
        <a
          href="https://www.termsofservicegenerator.net/live.php?token=bqwXuQfnjf9P2c5TgjFwsSycf3NcIkXD"
          >Privacy Policy</a
        >
        <a
          href="https://www.termsofservicegenerator.net/live.php?token=bqwXuQfnjf9P2c5TgjFwsSycf3NcIkXD"
          >Terms of Service</a
        >
      </div>
    </section>

    <section class="middle">
      <div class="logo_image">
        <nuxt-link to="/">
          <img width="200px" src="~/assets/Svg/logo_one.svg" />
        </nuxt-link>
      </div>
      <div>
        <h3>I invite you to try it</h3>
        <p class="tagline">Get in touch and, let's make your business grow</p>

        <p>Based in Savonlinna, Finland</p>
      </div>
      <div>
        <SocialMedia class="social_media-home-page" />
      </div>
    </section>

    <section class="third">
      <div class="policies">
        <a href="https://www.bizbox.club/">Good Stuff Foods</a>
        <a href="https://goodstuffoods.com/">BizBox</a>
      </div>
    </section>
  </footer>
</template>

<style scoped>
/*Footer*/
h3 {
  margin: 0;
  color: white;
}

footer {
  background: #000;
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  overflow: hidden;
  padding: 0 5% 100px;
}

.policies a {
  color: white;
  margin-bottom: 5%;
}

@media (min-width: 720px) {
  .footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    color: White;
    align-items: flex-start;
    padding-top: 10%;
  }

  .policies {
    display: flex;
    flex-direction: column;
  }

  .middle {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
  }
  .first,
  .third {
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>
