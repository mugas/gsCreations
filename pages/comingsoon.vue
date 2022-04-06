<template>
  <div>
    <section class="home__page">
      <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
      <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
      <svg class="blobCont">
        <image
          xlink:href="https://res.cloudinary.com/mugas/image/upload/v1649093387/patternpad_qmkwa9.svg"
          mask="url(#mask)"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
        <defs>
          <filter id="gooey" height="130%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="15"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
          </filter>
        </defs>
        <mask id="mask" x="0" y="0">
          <g style="filter: url(#gooey)">
            <circle
              class="blob"
              cx="50%"
              cy="50%"
              r="100"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="50%"
              cy="10%"
              r="80"
              fill="white"
              stroke="white"
            />
            <!--
            <circle
              class="blob"
              cx="27%"
              cy="15%"
              r="70"
              fill="white"
              stroke="white"
            />
              <circle
              class="blob"
              cx="90%"
              cy="20%"
              r="120"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="30%"
              cy="25%"
              r="30"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="50%"
              cy="60%"
              r="80"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="70%"
              cy="90%"
              r="10"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="90%"
              cy="60%"
              r="90"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="30%"
              cy="90%"
              r="80"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="10%"
              cy="10%"
              r="80"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="50%"
              cy="10%"
              r="20"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="17%"
              cy="15%"
              r="70"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="40%"
              cy="20%"
              r="120"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="30%"
              cy="25%"
              r="30"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="80%"
              cy="60%"
              r="80"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="17%"
              cy="10%"
              r="100"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="40%"
              cy="60%"
              r="90"
              fill="white"
              stroke="white"
            />
            <circle
              class="blob"
              cx="10%"
              cy="50%"
              r="80"
              fill="white"
              stroke="white"
            /> -->
          </g>
        </mask>
      </svg>
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
          <img class="icons_image" src="~/assets/gif/second.gif" alt="" />
          <p>Select one plan and get all you want. Simple and made for you</p>
        </article>
        <article class="receive">
          <img class="icons_image" src="~/assets/gif/second.gif" alt="" />
          <p>Get more time for you and your business with only one service</p>
        </article>
        <article class="revise">
          <img class="icons_image" src="~/assets/gif/revise.gif" alt="" />
          <p>It's not ready when it's done but when you are happy</p>
        </article>
      </section>
    </div>
    <section>
      <Services />
    </section>
    <section class="reviews">
      <article class="review__article">
        <img class="review__image" src="~/assets/images/Tukka.jpg" alt="" />
        <h3>Tuukka Saukkonen</h3>
        <h4>Coopza</h4>
        <p>
          "Ricardo built very smoothly functioning landing page for my project.
          Ricardo had great "can do" attitude and his commitment was hugely
          appreciated."
        </p>
      </article>
      <article class="review__article">
        <img class="review__image" src="~/assets/images/goncalo.jpg" alt="" />
        <h3>Gonçalo Jesus</h3>
        <h4>BundAsliga</h4>
        <p>
          "He has the ability to both think & plan long term and to deliver
          short term results. Very action oriented so you could always count on
          Ricardo to get things done. Committed and with a strategic vision."
        </p>
      </article>
    </section>
    <h2 class="blog__menu">News from the Blog</h2>
    <Container>
      <section class="blog">
        <ArticleCard
          v-for="(blog, index) in blogList"
          :key="index"
          class="test"
          :index="index"
          :article-info="blog"
        />
        <!-- <nuxt-link to="/blog"
          ><p class="posts">See all of ours posts</p></nuxt-link
        > -->
      </section>
      <nuxt-link to="/blog"
        ><p class="posts">See all of ours posts</p></nuxt-link
      >
    </Container>
    <Container>
      <h2 class="blog__menu">Get inspired</h2>
      <section class="mywebsites">
        <article class="mywebsites__card">
          <div class="mywebsites__text">
            <h3 class="mywebsites__farming">Farming in Family</h3>
            <button>
              <a href="https://gscsite1.netlify.app/"> See the website</a>
            </button>
          </div>
          <img
            class="mywebsites__image"
            src="~assets/images/gsimage.jpg"
            alt=""
          />
        </article>
      </section>
    </Container>
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard'
import blogs from '~/content/blogs.json'
import TheHeader from '~/components/Navigation/TheHeader'
import TheSidenav from '~/components/Navigation/TheSidenav'

export default {
  components: {
    ArticleCard,
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

.blobCont {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.blob:nth-child(1) {
  animation: move1 20s infinite linear;
  z-index: -1;
}

@keyframes move1 {
  from {
    transform: rotate(90deg) translate(200px, 0.1px) rotate(-90deg);
  }
  to {
    transform: rotate(450deg) translate(200px, 0.1px) rotate(-450deg);
  }
}
.blob:nth-child(2) {
  animation: move2 20s infinite linear;
}

@keyframes move2 {
  from {
    transform: rotate(180deg) translate(200px, 0.1px) rotate(-180deg);
  }
  to {
    transform: rotate(540deg) translate(200px, 0.1px) rotate(-540deg);
  }
}
.blob:nth-child(3) {
  animation: move3 20s infinite linear;
}

@keyframes move3 {
  from {
    transform: rotate(270deg) translate(200px, 0.1px) rotate(-270deg);
  }
  to {
    transform: rotate(630deg) translate(200px, 0.1px) rotate(-630deg);
  }
}
.blob:nth-child(4) {
  animation: move4 20s infinite linear;
}

@keyframes move4 {
  from {
    transform: rotate(360deg) translate(200px, 0.1px) rotate(-360deg);
  }
  to {
    transform: rotate(720deg) translate(200px, 0.1px) rotate(-720deg);
  }
}
.blob:nth-child(5) {
  animation: move5 20s infinite linear;
}

@keyframes move5 {
  from {
    transform: rotate(450deg) translate(200px, 0.1px) rotate(-450deg);
  }
  to {
    transform: rotate(810deg) translate(200px, 0.1px) rotate(-810deg);
  }
}
.blob:nth-child(6) {
  animation: move6 20s infinite linear;
}

@keyframes move6 {
  from {
    transform: rotate(540deg) translate(200px, 0.1px) rotate(-540deg);
  }
  to {
    transform: rotate(900deg) translate(200px, 0.1px) rotate(-900deg);
  }
}
.blob:nth-child(7) {
  animation: move7 20s infinite linear;
}

@keyframes move7 {
  from {
    transform: rotate(630deg) translate(200px, 0.1px) rotate(-630deg);
  }
  to {
    transform: rotate(990deg) translate(200px, 0.1px) rotate(-990deg);
  }
}
.blob:nth-child(8) {
  animation: move8 20s infinite linear;
}

@keyframes move8 {
  from {
    transform: rotate(720deg) translate(200px, 0.1px) rotate(-720deg);
  }
  to {
    transform: rotate(1080deg) translate(200px, 0.1px) rotate(-1080deg);
  }
}
.blob:nth-child(9) {
  animation: move9 20s infinite linear;
}

@keyframes move9 {
  from {
    transform: rotate(810deg) translate(200px, 0.1px) rotate(-810deg);
  }
  to {
    transform: rotate(1170deg) translate(200px, 0.1px) rotate(-1170deg);
  }
}
.blob:nth-child(10) {
  animation: move10 20s infinite linear;
}

@keyframes move10 {
  from {
    transform: rotate(900deg) translate(200px, 0.1px) rotate(-900deg);
  }
  to {
    transform: rotate(1260deg) translate(200px, 0.1px) rotate(-1260deg);
  }
}
.blob:nth-child(11) {
  animation: move11 20s infinite linear;
}

@keyframes move11 {
  from {
    transform: rotate(990deg) translate(200px, 0.1px) rotate(-990deg);
  }
  to {
    transform: rotate(1350deg) translate(200px, 0.1px) rotate(-1350deg);
  }
}
.blob:nth-child(12) {
  animation: move12 20s infinite linear;
}

@keyframes move12 {
  from {
    transform: rotate(1080deg) translate(200px, 0.1px) rotate(-1080deg);
  }
  to {
    transform: rotate(1440deg) translate(200px, 0.1px) rotate(-1440deg);
  }
}
.blob:nth-child(13) {
  animation: move13 20s infinite linear;
}

@keyframes move13 {
  from {
    transform: rotate(1170deg) translate(200px, 0.1px) rotate(-1170deg);
  }
  to {
    transform: rotate(1530deg) translate(200px, 0.1px) rotate(-1530deg);
  }
}
.blob:nth-child(14) {
  animation: move14 20s infinite linear;
}

@keyframes move14 {
  from {
    transform: rotate(1260deg) translate(200px, 0.1px) rotate(-1260deg);
  }
  to {
    transform: rotate(1620deg) translate(200px, 0.1px) rotate(-1620deg);
  }
}
.blob:nth-child(15) {
  animation: move15 20s infinite linear;
}

@keyframes move15 {
  from {
    transform: rotate(1350deg) translate(200px, 0.1px) rotate(-1350deg);
  }
  to {
    transform: rotate(1710deg) translate(200px, 0.1px) rotate(-1710deg);
  }
}
.blob:nth-child(16) {
  animation: move16 20s infinite linear;
}

@keyframes move16 {
  from {
    transform: rotate(1440deg) translate(200px, 0.1px) rotate(-1440deg);
  }
  to {
    transform: rotate(1800deg) translate(200px, 0.1px) rotate(-1800deg);
  }
}
.blob:nth-child(17) {
  animation: move17 20s infinite linear;
}

@keyframes move17 {
  from {
    transform: rotate(1530deg) translate(200px, 0.1px) rotate(-1530deg);
  }
  to {
    transform: rotate(1890deg) translate(200px, 0.1px) rotate(-1890deg);
  }
}
.blob:nth-child(18) {
  animation: move18 20s infinite linear;
}

@keyframes move18 {
  from {
    transform: rotate(1620deg) translate(200px, 0.1px) rotate(-1620deg);
  }
  to {
    transform: rotate(1980deg) translate(200px, 0.1px) rotate(-1980deg);
  }
}

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

h1 {
  color: #f5fbf9;
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
h4 {
  color: #793000;
  margin-top: 1%;
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

/*Reviews*/

.reviews {
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  align-items: center;
}
.review__image {
  border-radius: 50%;
  height: 100px;
  width: 25%;
}
.review__article {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}

.review__article p {
  text-align: center;
  font-style: italic;
}
/*website*/
.mywebsites {
  display: flex;
  flex-direction: column;
}
.mywebsites__text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mywebsites__card {
  background: #793000;
  border-radius: 0.5rem;
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5%;
}
.mywebsites__image {
  width: 80%;
}

button {
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  width: 40%;
  margin-bottom: 2%;
  border-radius: 50px;
  display: inline-block;
  border: 2px solid #fff;
  border-radius: 16px;
  color: black;
}
.mywebsites__farming {
  color: #fff;
}

@media (min-width: 720px) {
  h1 {
    color: #f5fbf9;
    font-size: 4em;
    margin: 0 20% 0 20%;
  }

  h2 {
    color: black;
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

  /*description*/

  .second_tagline {
    background-color: #f5fbf9;
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
  .reviews {
    margin-top: 7%;
    display: flex;
    flex-direction: row;
  }
  .review__image {
    width: 100px;
    height: 100px;
  }
  .review__article {
    flex: 1;
  }
  .blog {
    display: flex;
    flex-direction: row;

    justify-content: space-around;
  }
  .article-card.two-thirds {
    width: 30%;
  }
  .test {
    width: 30%;
  }
  .blog__menu {
    margin-top: 7%;
    margin-bottom: 7%;
  }
  .posts {
    margin-left: 2%;
  }
  /* .websites {
    display: flex;
    margin-left: 2%;
    margin-right: 2%;
    background-color: #edbd54;
    flex-direction: row;
  } */
  /*mywebsites*/
  .mywebsites {
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
