<template>
  <div>
    <section class="home__page">
      <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
      <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
      <Blob />
      <h1>Digital solutions for <br />hospitality industry</h1>
      <p class="tagline_description">
        Websites, local SEO, logos, menus, booking, consulting, and more. Full
        service for your hospitality business in the Savo region.
      </p>
      <button class="calendly">
        <a href="https://calendly.com/gscreations"> Book a meeting</a>
      </button>
    </section>

    <div class="second_tagline">
      <h2>One service for all your needs</h2>
      <p class="second_tagline_description">
        Delegate what is necessary and get time to focus on what you know
        better: Make your business great
      </p>
      <section class="description">
        <article class="list">
          <img class="icons_image" src="~/assets/gif/check.gif" alt="" />
          <p>Select one plan and get all you want. Simple and made for you</p>
        </article>
        <article class="receive">
          <img class="icons_image" src="~/assets/gif/diamond.gif" alt="" />
          <p>Get more time for you and your business with only one service</p>
        </article>
        <article class="revise">
          <img class="icons_image" src="~/assets/gif/revise.gif" alt="" />
          <p>It's not ready when it's done but when you are happy</p>
        </article>
      </section>
    </div>

    <section class="banner">
      <div class="banner_quote">
        <h3>
          <q>Hospitality is simply an opportunity to show love and care</q>
        </h3>
      </div>
    </section>
    <section class="explanation">
      <h2>Get more for less</h2>
      <p class="explanation_text">
        Good Stuff creations helps you save money and focus on your business, by
        having all services in one place. Pay monthly, cancel anytime
      </p>
      <div class="explanation_detailed">
        <div class="explanation_detailed_text explanation_detailed_text_one">
          <div class="shape"></div>
          <h4>Websites</h4>
          <p>
            I make your a beautifull website that speaks your brand and get you
            sell more
          </p>
        </div>
        <div class="explanation_detailed_text explanation_detailed_text_two">
          <div class="shape"></div>
          <h4>SEO</h4>
          <p>
            Optimize your website to reach the customers that you want but also
            the ones you need
          </p>
        </div>
        <div class="explanation_detailed_text explanation_detailed_text_three">
          <div class="shape"></div>
          <h4>Inventory</h4>
          <p>
            Need help with your inventory or finance? Need a new productive
            tool? I can help
          </p>
        </div>
        <div class="explanation_detailed_text explanation_detailed_text_four">
          <div class="shape"></div>
          <h4>Menus</h4>
          <p>
            A appealing and beautifull menu is half way to get your customers
            inside.
          </p>
        </div>
        <div class="explanation_detailed_text explanation_detailed_text_five">
          <div class="shape"></div>
          <h4>Recipe Search</h4>
          <p>
            New foods, menus, events. Engage your customers with what is trendy
            on the business
          </p>
        </div>
        <div class="explanation_detailed_text explanation_detailed_text_six">
          <div class="shape"></div>
          <h4>Bookings</h4>
          <p>
            Welcome the guest, manage the booking - Focus on your business and I
            focus on your customer.
          </p>
        </div>
      </div>
    </section>

    <section class="client_groups">
      <h2>Who are you?</h2>
      <div class="clients">
        <article class="coffee client_groups_each">
          <div class="client_groups_each_text">
            <h4>Coffees and bakeries</h4>
            <p>
              Outstand the competition with a modern website or get back on
              track with your products and sales.
            </p>
          </div>
          <img class="icons_image" src="~/assets/Svg/coffee.svg" alt="" />
        </article>
        <article class="restaurants client_groups_each">
          <div class="client_groups_each_text">
            <h4>Restaurants</h4>
            <p>
              Outstand the competition with a modern website or get back on
              track with your products and sales.
            </p>
          </div>
          <img class="icons_image" src="~/assets/Svg/restaurant.svg" alt="" />
        </article>
        <article class="grocery client_groups_each">
          <div class="client_groups_each_text">
            <h4>Groceries</h4>
            <p>
              Outstand the competition with a modern website or get back on
              track with your products and sales.
            </p>
          </div>
          <img class="icons_image" src="~/assets/Svg/grocery.svg" alt="" />
        </article>
        <article class="hotel client_groups_each">
          <div class="client_groups_each_text">
            <h4>Local Rentals</h4>
            <p>
              Outstand the competition with a modern website or get back on
              track with your products and sales.
            </p>
          </div>
          <img class="icons_image" src="~/assets/Svg/hotel.svg" alt="" />
        </article>
        <article class="farmer client_groups_each">
          <div class="client_groups_each_text">
            <h4>Farmers</h4>
            <p>
              Outstand the competition with a modern website or get back on
              track with your products and sales.
            </p>
          </div>
          <img class="icons_image" src="~/assets/Svg/farmer.svg" alt="" />
        </article>
      </div>
    </section>
    <section class="services">
      <h3 class="services_title">Websites, landing pages, bookings and more</h3>
      <article class="services_description">
        <div class="services_description_text">Websites</div>
        <div class="services_description_text">Landing pages</div>
        <div class="services_description_text">E commerce</div>
        <div class="services_description_text">SEO</div>
        <div class="services_description_text">Logos</div>
        <div class="services_description_text">Menus</div>
        <div class="services_description_text">Slide Decks</div>
        <div class="services_description_text">Pitch Decks</div>
        <div class="services_description_text">Brochures</div>
        <div class="services_description_text">Recipes</div>
        <div class="services_description_text">Website maintenance</div>
        <div class="services_description_text">Bookings</div>
        <div class="services_description_text">Inventory</div>
        <div class="services_description_text">Content creation</div>
        <div class="services_description_text">Productive tools</div>
      </article>
    </section>

    <section class="pricing-panel">
      <h2 class="services_title">The right plan for you</h2>
      <div class="pricing">
        <div class="pricing-plan">
          <h4 class="pricing-header">On-Line</h4>
          <ul class="pricing-features">
            <li class="pricing-features-item">Custom domains</li>
            <li class="pricing-features-item">
              Sleeps after 30 mins of inactivity
            </li>
          </ul>
          <span class="pricing-price">Free</span>
          <a href="#/" class="pricing-button">Let's start</a>
        </div>

        <div class="pricing-plan">
          <h4 class="pricing-header">Maintenance</h4>
          <ul class="pricing-features">
            <li class="pricing-features-item">Never sleeps</li>
            <li class="pricing-features-item">
              Multiple workers for more powerful apps
            </li>
          </ul>
          <span class="pricing-price">$150</span>
          <a href="#/" class="pricing-button">Let's start</a>
        </div>

        <div class="pricing-plan">
          <h4 class="pricing-header">Concierge</h4>
          <ul class="pricing-features">
            <li class="pricing-features-item">Dedicated</li>
            <li class="pricing-features-item">Simple horizontal scalability</li>
          </ul>
          <span class="pricing-price">$400</span>
          <a href="#/" class="pricing-button">Free trial</a>
        </div>
        <div class="pricing-plan">
          <h4 class="pricing-header">Maintenance</h4>
          <ul class="pricing-features">
            <li class="pricing-features-item">Never sleeps</li>
            <li class="pricing-features-item">
              Multiple workers for more powerful apps
            </li>
          </ul>
          <span class="pricing-price">$150</span>
          <a href="#/" class="pricing-button is-featured">Free trial</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import blogs from '~/content/blogs.json'
import TheHeader from '~/components/Navigation/TheHeader'
import TheSidenav from '~/components/Navigation/TheSidenav'

export default {
  components: {
    TheHeader,
    TheSidenav,
  },

  layout: 'empty',
  async asyncData({ app }) {
    async function awaitImport(blog) {
      const wholeMD = await import(`~/content/blog/${blog.slug}.md`)
      return {
        attributes: wholeMD.attributes,
        link: blog.slug,
      }
    }
    const blogList = await Promise.all(
      blogs.slice(0, 3).map((blog) => awaitImport(blog))
    ).then((res) => {
      return {
        blogList: res,
      }
    })
    return blogList
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
}
</script>

<style scoped>
html,
body {
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  widows: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

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
.blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 30px; */
  align-items: center;
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
  background: rgb(129, 52, 5);
  background: linear-gradient(
    90deg,
    rgba(129, 52, 5, 1) 0%,
    rgba(212, 81, 19, 1) 100%
  );
}
/*   background-image: url('~assets/images/back.jpg');
   height: 100%;

   Center and scale the image nicely
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */

.line {
  text-align: center;
  font-weight: bold;
}

.calendly {
  text-transform: uppercase;
  background: black;
  cursor: pointer;
  text-decoration: none;
  padding: 25px;
  border-radius: 50px;
  display: inline-block;
  border: 2px solid #28430a;
  border-radius: 16px;
  width: 10rem;
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

h1 {
  color: black;
  font-size: 2em;
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
  background-color: white;
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
  color: #f5fbf9;
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
@media (min-width: 720px) {
  h1 {
    color: black;
    font-size: 4em;
    margin: 0 20% 0 20%;
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

  .restaurants {
    flex-direction: row-reverse;
  }

  .hotel {
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
}
</style>
