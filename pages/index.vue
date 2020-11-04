<template>
  <div class="soon"></div>

  <!-- <section>
    <Container>
      <div class="intro">
        <h1>Welcome to Blog Names</h1>
      </div>
    </Container>
    <Container flex>
      <ArticleCard
        v-for="(blog, index) in blogList"
        :key="index"
        :index="index"
        :article-info="blog"
      />
    </Container>
  </section> -->
</template>

<script>
/* import ArticleCard from '~/components/ArticleCard'
import Container from '~/components/Container'

import blogs from '~/content/blogs.json'

export default {
  components: {
    ArticleCard,
    Container,
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
      blogs.map((blog) => awaitImport(blog))
    ).then((res) => {
      return {
        blogList: res,
      }
    })

    return blogList
  },
} */
</script>

<style lang="scss" scoped>
form {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    color: black;
  }
}
img {
  width: 350px;
}
.main {
  background: black;
}
.soon {
  display: flex;
  flex-direction: column;
}

.image {
  flex: 1;
  align-self: center;
}

.line {
  flex: 1;
  color: black;
}

.intro {
  text-align: center;
  margin-bottom: 2.4rem;

  h1 {
    // margin-top: 0;
    text-align: center;
  }
}

@media (min-width: 1000px) {
  img {
    width: 650px;
  }
}
</style>
