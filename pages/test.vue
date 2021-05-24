<template>
  <div>
    <section class="home__page">
      <div class="vector">
        <img width="100px" src="~/assets/test/five.svg" alt="" />
      </div>
      <div class="text">
        <!-- <h1 class="title">Good Stuff Creations</h1> -->
        <h1 class="title">Bringing your product online</h1>
        <p class="line">
          I create websites and digital products for local producers and
          groceries
        </p>
      </div>
    </section>

    <section class="description">
      <div class="description__image">
        <img class="website__image" src="~/assets/images/two.png" alt="" />
      </div>
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
        <img class="review__image" src="~/assets/images/Tukka.jpg" alt="" />
        <h3>Gonçalo Jesus</h3>
        <h4>BundAsliga</h4>
        <p>
          "He has the ability to both think & plan long term and to deliver
          short term results. Very action oriented so you could always count on
          Ricardo to get things done. Committed and with a strategic vision."
        </p>
      </article>
    </section>
    <Container>
      <section class="blog">
        <ArticleCard
          v-for="(blog, index) in blogList"
          :key="index"
          class="test"
          :index="index"
          :article-info="blog"
        />
        <nuxt-link to="/blog"
          ><p class="posts">See all of ours posts</p></nuxt-link
        >
      </section>
    </Container>
    <section class="about__me">
      <p>
        My name is Ricardo and after many years working in the hospitality I
        follow what I believe and decided to create Good Stuff Creations to help
        local producers to bring their product to the digital world.Know more
        about me
        <nuxt-link to="/about" class="about__me__link"> here</nuxt-link>
      </p>
      <img class="about__me__image" src="~/assets/images/me.jpg" alt="" />
    </section>
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
  color: #28430a;
  font-size: 1em;
  margin-top: 7px;
}
h3 {
  color: black;
  margin-top: 3%;
}
h4 {
  color: black;
  margin-top: 1%;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/*Description*/
.description {
  background: #28430a;
  display: flex;
  flex-direction: column;
}
.website__image {
  width: 100%;
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
  width: 50%;
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

/*About*/
.about__me {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #793000;
  color: White;
}

.about__me__image {
  width: 50%;
  border-radius: 50%;
  margin-bottom: 5%;
}
.about__me__link {
  color: white;
  text-decoration: underline;
}
@media (min-width: 720px) {
  h1 {
    color: #793000;
    font-size: 3em;
  }

  h2 {
    color: #28430a;
    font-size: 1em;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .home__page {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    height: 70vh;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
}
</style>
