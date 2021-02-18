<template>
  <section>
    <Container>
      <div class="intro">
        <h1>Blog</h1>
        <p class="subtitle">
          Our toughts and ideas about websites and everything related
        </p>
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
  </section>
</template>

<script>
import blogs from '~/content/blogs.json'

export default {
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
}
</script>

<style scoped>
h1 {
  color: #28430a;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.subtitle {
  font-size: 1.5em;
  color: #28430a;
}
</style>
