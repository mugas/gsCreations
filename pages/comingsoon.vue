<template>
  <div>
    <section class="home__page">
      <div class="blob">
        <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx -->
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310 350"
        >
          <path
            d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
          />
        </svg>
      </div>
      <h1>look at<br />this go!</h1>
    </section>

    <section class="description">
      <!-- <div class="description__image"> -->
      <img class="website__image" src="~/assets/images/two.png" alt="" />
      <!-- </div> -->
      <div class="description__text">
        <p>Take your local produce or grocery online</p>
      </div>
    </section>

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

export default {
  components: {
    ArticleCard,
  },
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
}
</script>

<style scoped>
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
  margin-top: 5%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 100%;
}
.line {
  text-align: center;
  font-weight: bold;
}

.calendly {
  text-transform: uppercase;
  background: #793000;
  cursor: pointer;
  text-decoration: none;
  padding: 20px;
  border-radius: 50px;
  display: inline-block;
  border: 2px solid #28430a;
  border-radius: 16px;

  color: white;
}
.calendly a {
  color: White;
}

h1 {
  color: #793000;
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
.description {
  background: #28430a;
  display: flex;
  margin-bottom: 10%;
  flex-direction: column;
}
.website__image {
  max-width: 100%;
  width: 540px;
  margin-top: 6%;
}
.description__text {
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
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
    color: #793000;
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
    margin-top: 5%;
    justify-content: inherit;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .description {
    display: flex;
    flex-direction: row;
    height: 58vh;
    align-items: center;
    justify-content: space-evenly;
  }
  .description__text {
    font-size: 35px;
    line-height: 1.3em;
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

.blob {
  position: absolute;
  top: 0;
  left: 0;
  fill: #023f92;
  width: 50vmax;
  z-index: -1;
  animation: move 10s ease-in-out infinite;
  transform-origin: 50% 50%;
}

@keyframes move {
  0% {
    transform: scale(1) translate(10px, -30px);
  }
  38% {
    transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
  }
  40% {
    transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
  }
  78% {
    transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
  }
  80% {
    transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
  }
  100% {
    transform: scale(1) translate(10px, -30px);
  }
}
</style>
