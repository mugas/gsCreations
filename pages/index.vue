<template>
  <div class="soon">
    <img class="image" src="../assets/Svg/gs.svg" />
    <h1 class="line">Coming Soon...</h1>
  </div>
</template>

<script>
export default {
  layout: 'comingsoon',
}

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

.soon {
  background: #131313;
}

.image {
  flex: 1;
  align-self: center;
}

.line {
  flex: 1;
  color: white;
}

.intro {
  text-align: center;
  margin-bottom: 2.4rem;

  h1 {
    // margin-top: 0;
    text-align: center;
  }
}

body {
  background: black;
}

@media (min-width: 1000px) {
  img {
    width: 650px;
  }
}
</style>
