<template>
  <div>
    <section class="home__page">
      <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
      <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
      <h1 class="home__page-title">Your creative <br />concierge</h1>
      <p class="tagline_description">Creating websites that work for you</p>
      <button class="calendly">
        <a
          href="https://calendly.com/gscreations/good-stuff-creations-your-creative-concierge"
        >
          Book a meeting</a
        >
      </button>
    </section>

    <footer>
      <h3>I invite you to try it</h3>
      <p>Get in touch and let's make your business grow</p>
      <button class="calendly">
        <a
          href="https://calendly.com/gscreations/good-stuff-creations-your-creative-concierge"
        >
          Book a meeting</a
        >
      </button>
      <div class="website-links">
        <div class="website-links_webpage">
          <ul>
            <li class="nav-item"><a href="#pricing">Prices</a></li>
            <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
            <li class="nav-item">
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
            <li class="nav-item"><nuxt-link to="/blog">Blog</nuxt-link></li>
          </ul>
        </div>
      </div>
      <SocialMediaHomePage class="social_media-home-page" />
      <div class="footer_links">
        <nuxt-link to="/">
          <img
            class="footer_logo"
            width="200px"
            src="~/assets/Svg/logo_one.svg"
          />
        </nuxt-link>
        <p class="footer_based">Based in Savonlinna, Finland</p>
      </div>

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
    </footer>
  </div>
</template>

<script>
import SocialMediaHomePage from '../components/SocialMediaHomePage.vue'
import TheHeader from '~/components/Navigation/TheHeader'
import TheSidenav from '~/components/Navigation/TheSidenav'

export default {
  components: {
    TheHeader,
    TheSidenav,
    SocialMediaHomePage,
  },

  layout: 'empty',
}
</script>

<style scoped>
ol,
ul {
  list-style: none;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.float {
  animation-name: ani-float;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes ani-float {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}

.home__page-title {
  color: black;
}
.blog {
  display: flex;
  flex-direction: row;

  /* margin-top: 30px; */
  align-items: center;
  margin-right: 0;
  align-content: space-between;
}
/*Hero*/
.home__page {
  display: flex;
  z-index: 1;
  position: relative;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  width: 100vw;
}

.home__page button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 24px 30px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: #000;
  box-shadow: 6px 6px 0 0 rgb(0 0 0 / 20%);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  font-family: Grifter, sans-serif;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.5px;
  text-decoration: none;
}

.line {
  text-align: center;
  font-weight: bold;
}

.calendly {
  text-transform: uppercase;
  background: black;
  cursor: pointer;
  margin-top: 75px;
  text-decoration: none;
  padding: 60px;
  border-radius: 50px;
  display: inline-block;
  border: 2px solid #f5fbf9;
  border-radius: 20px;
  /* width: 10rem; */
  font-size: 28px;
  letter-spacing: 0;
  color: white;
}
.calendly a {
  color: #f5fbf9;
}
button {
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  /* width: 40%; */
  margin-bottom: 2%;
  border-radius: 50px;
  display: inline-block;
  border: 2px solid #fff;
  border-radius: 16px;
  color: black;
}
.home__page button {
  margin-bottom: 8%;
}
h1 {
  color: black;
  /* font-size: 2em; */

  font-size: 3rem;
  line-height: 64px;
  font-weight: 200;
}

.tagline_description {
  text-align: center;
  color: black;
  margin-top: 20px;
}

h2 {
  color: black;
  font-size: 1.8em;
  margin-top: 7px;
}
h3 {
  color: black;
  margin-top: 3%;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/*Description*/

.second_tagline {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}
h2 {
  max-width: 333px;
  font-size: 2.2rem;
  margin-bottom: 12px;
}

.description {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

article p {
  text-align: center;
  margin-bottom: 5%;
}

.second_tagline_description {
  margin-top: 20px;
  max-width: 349px;
  text-align: center;
  margin-bottom: 12px;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0;
  margin-bottom: 10%;
}

.receive {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0;
  margin-bottom: 10%;
}

.revise {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0;
  margin-bottom: 10%;
}

.icons_image {
  width: 80px;
  margin-bottom: 5%;
}
.list .receive .revise {
  flex: 1 1 0;
}
/*Description End*/

/*Banner*/

.banner {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #f9a03f;
  width: 80%;
  margin-bottom: 30%;
  background-image: linear-gradient(232deg, #f9a03f 0%, #d45113 57%);
}
.banner_quote {
  display: flex;
  width: 80%;
  height: 200px;

  align-items: center;
}

q {
  color: black;
}

/*Banner end*/

/*Explanation*/

.explanation {
  background-color: #f5fbf9;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
}

.explanation_text {
  margin-bottom: 7%;
  max-width: 349px;
  text-align: center;
}
.explanation_detailed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h4 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: black;
}
.explanation_detailed_text {
  min-height: 250px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
}

.shape {
  width: 50px;
  height: 5px;
  border-radius: 50px;
  background-color: #813405;
}

/*clients*/

.client_groups {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
}
.client_groups_each {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
}
.client_groups_each_text {
  flex: 1 1 0;
}
.client_groups_each img {
  flex: 1 1 0;
  width: auto;
}
.client_groups_each div {
  margin-bottom: 20px;
}

/*clients end*/

/*Explanation end*/

/*Services*/

.services {
  min-width: auto;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #f5fbf9;
}
.services_description {
  padding: 20px;
  justify-content: space-around;
}
.services_description_text {
  margin-bottom: 30px;
  padding-bottom: 16px;
  border-bottom: 3px solid #d45113;
}

.services_title {
  margin-bottom: 18%;
  color: black;
  margin-top: 18%;
  padding-bottom: 4%;
  font-weight: 700;
  line-height: 2rem;
}
/*Services*/
/*Pricing*/

.pricing-panel {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-bottom: 100px;
}
.pricing {
  background-color: #f5fbf9;
  border-radius: 10px;
  padding: 15px 20px;
  width: 100%;
  max-width: 1260px;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
}

.pricing-plan {
  border-bottom: 1px solid #d45113;
  margin-bottom: 85px;
}
.pricing-plan:last-child {
  border-bottom: none;
}

.pricing-plan li {
  list-style: none;
}

.pricing-img {
  margin-bottom: 25px;
  max-width: 100%;
}

.pricing-header {
  color: #813405;
  font-weight: 600;
  letter-spacing: 1px;
}

.pricing-features {
  margin: 50px 0 25px;
  color: #000;
}

.pricing-features-item {
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 12px;
  line-height: 1.5;
  padding: 15px 0;
  border-top: 1px solid #d45113;
}

.pricing-features-item:last-child {
  border-bottom: 1px solid #d45113;
}

.pricing-price {
  color: #813405;
  display: block;
  font-size: 32px;
  font-weight: 700;
}

.pricing-button {
  border: 1px solid #d45113;
  border-radius: 10px;
  color: #000;
  display: inline-block;
  padding: 15px 35px;
  text-decoration: none;
  margin: 25px 0;
  transition: background-color 200ms ease-in-out;
}

.pricing-button:hover,
.pricing-button:focus {
  background-color: #e1f1ff;
}

.pricing-button.is-featured {
  background-color: #d45113;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:focus {
  background-color: #000;
  color: fff;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*Pricing*/

/*Footer*/

footer {
  background: #000;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  overflow: hidden;
  padding: 0 5% 100px;
}

footer h3 {
  color: #e1f1ff;
  text-align: center;
}

footer p {
  font-size: 20px;
  line-height: 36px;
  color: #e1f1ff;
  text-align: center;
}

footer h3 {
  margin-bottom: 18%;
  margin-top: 18%;
  padding-bottom: 4%;
  font-size: 42px;
  line-height: 44px;
}

.footer_links {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 40px 0 40px;
}

.footer_logo {
  margin-top: 20px;
}

.footer_based {
  margin-top: 20px;
}

.nav-item a {
  color: #f5fbf9;
  padding-top: 20px;
}

.website-links {
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;

  text-align: center;
  padding-top: 40px;
  margin-top: 40px;
}

.website-links ul {
  padding-left: 0;
}

.website-links_webpage {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.website-links_webpage ul {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
}

.social_media-home-page ul li a {
  color: #e1f1ff;
}

.policies a {
  color: #f5fbf9;
}

.policies {
  display: flex;
  gap: 5%;
  width: 100%;
  justify-content: center;
  align-self: center;
}

/*Footer*/
@media (min-width: 720px) {
  .home__page-title {
    padding-top: 5%;
  }

  .tagline_description {
    margin-top: 68px;
    text-align: center;
    font-size: 24px;
    line-height: 36px;
    font-weight: 800px;
    color: black;
  }
  h1 {
    color: black;
    /* font-size: 4em; */
    margin: 0 20% 0 20%;

    font-size: 6rem;
    line-height: 129px;
    font-weight: 200;
    margin-top: -52%;
  }

  h2 {
    color: black;
    margin-bottom: 14%;
  }
  .vector__image {
    padding-bottom: 50%;
  }
  .home__page {
    height: 100vh;

    justify-content: inherit;
  }

  .home__page button {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 24px 30px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 8px;
    background-color: #000;
    box-shadow: 6px 6px 0 0 rgb(0 0 0 / 20%);
    -webkit-transition: 0.2s;
    transition: 0.2s;
    font-family: Grifter, sans-serif;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.5px;
    text-decoration: none;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /*services end*/
  /*client*/
  .client_groups_each {
    flex-direction: row;
    width: 100%;
    gap: 10%;
  }

  .client_groups h2 {
    margin-bottom: 7%;
  }
  .client_groups_each_text {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    flex: 1 1 0;
    gap: 10%;
  }

  .client_groups_each_text p {
    width: initial;
    max-width: initial;
  }

  .client_groups_each img {
    flex: 1 1 0;
    width: 300px;
    height: 330px;
  }
  .clients {
    display: flex;
    align-self: center;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .agents {
    flex-direction: row-reverse;
  }

  /*client end*/

  /*description*/

  .second_tagline {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
  }

  h2 {
    font-size: 3.1rem;
    margin-bottom: 10px;
    max-width: 667px;
  }
  .description {
    margin-top: 10%;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }
  .second_tagline_description {
    margin-top: 20px;
    max-width: 600px;
    text-align: center;
    font-size: 24px;
  }
  .icons_image {
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
  }
  .list .receive .revise {
    flex: 1 1 0;
  }

  article p {
    max-width: 200px;
  }
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0;
  }

  .receive {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0;
  }

  .revise {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0;
  }

  /*Description end*/

  /*Banner*/

  h3 {
    font-size: 2rem;
  }

  .banner {
    margin: 0 auto;
    height: 300px;

    background-color: #f9a03f;
    margin-bottom: 10%;
    background-image: linear-gradient(232deg, #f9a03f 0%, #d45113 57%);
  }

  .banner_quote {
    align-self: center;
    max-width: 40%;
  }
  /*Banner end*/
  /*explanation*/
  .explanation {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
  }
  .explanation_detailed {
    display: flex;
    align-self: center;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .explanation_detailed_text {
    width: 50%;
    height: 50%;
    min-height: 250px;
    padding-right: 60px;
    padding-bottom: 60px;
    padding-left: 60px;
    min-height: 250px;
  }
  .explanation_detailed_text_one {
    flex: 1 1 0;
  }
  .explanation_text {
    margin-bottom: 7%;
    max-width: 600px;
    text-align: center;
  }
  /*explanation end*/
  /*Services*/

  .services_title {
    margin-bottom: 10%;
    margin-top: 10%;
    padding-bottom: 0;
  }
  .services {
    display: flex;
    flex-direction: column;
    min-width: auto;
    padding-left: 20px;
    font-weight: 700;
    padding-right: 20px;
  }
  .services_description {
    display: flex;
    align-self: center;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .services_description_text {
    width: 30%;
  }
  /*Services*/
  /*Pricing*/
  .pricing {
    flex-direction: row;
  }
  .pricing-plan {
    border-bottom: none;
    border-right: 1px solid #e1f1ff;
    padding: 25px 50px;
    margin-bottom: 0px;
    flex: 1 1 0;
  }
  .pricing-plan:last-child {
    border-right: none;
  }

  /*Pricing*/

  /*Footer*/
  footer {
    padding-top: 150px;
    align-items: center;
  }

  footer h3 {
    font-size: 50px;
    margin-top: 0;
    line-height: 60px;
    margin-bottom: 10px;
    max-width: 667px;
  }

  footer p {
    margin-top: 20px;
    font-size: 20px;
    max-width: 667px;
    line-height: 36px;
  }

  footer button {
    width: 667px;
  }

  .footer_links {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    gap: 5%;
    flex-direction: column;
  }

  .footer_links :nth-child(1) {
    order: 2;
  }
  .footer_links :nth-child(2) {
    order: 1;
  }
  .footer_links :nth-child(3) {
    order: 3;
  }

  footer img {
    width: 300px;
  }

  .website-links {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: baseline;
    justify-content: space-between;
  }

  .website-links ul {
    display: flex;
    flex-direction: row;
    padding-left: 0;
    justify-content: center;
    width: 100%;
    font-size: 1.5rem;
    gap: 20px;
  }
  .website-links_webpage {
    display: flex;
  }

  .website-links_webpage ul {
    justify-content: start;
  }

  .policies {
    display: flex;
    gap: 5%;
    width: 100%;
    justify-content: center;
    align-self: center;
  }

  /*Footer*/
}
</style>
