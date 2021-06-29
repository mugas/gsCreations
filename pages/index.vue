<template>
  <div>
    <section class="home__page">
      <div class="vector">
        <img
          width="100px"
          class="vector__image"
          src="~/assets/test/five.svg"
          alt=""
        />
      </div>
      <div class="text">
        <!-- <h1 class="title">Good Stuff Creations</h1> -->
        <h1 class="title">Share your product with the world</h1>
        <p class="line">
          I create websites and store onlines for local producers and groceries
        </p>
      </div>
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
  justify-content: center;
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
</style>
