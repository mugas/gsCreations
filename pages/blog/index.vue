<template>
  <section>
    <Container>
      <div class="intro">
        <h1>Creative writing</h1>
        <p class="subtitle">The blog you need for your hospitality business</p>
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
  color: #813405;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.subtitle {
  font-size: 1.5em;
  color: #d45113;
  text-align: center;
}
</style>
