<template>
  <section>
    <Container>
      <div class="intro">
        <h2>Welcome to Blog Names</h2>
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
import ArticleCard from '~/components/ArticleCard'
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
}
</script>

<style scoped>
.index {
  /* position: absolute; */
  /* display: flex;
  flex-direction: column; */
  border: 1px red solid;
}
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* position: relative; */
  background: #ffb1a4;

  display: flex;
  align-items: center;
}
h2 {
  color: violet;
  /* z-index: 1000; */
}

h1 {
  color: green;
  font-size: 20vmin;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  padding-left: 40px;
  /* z-index: 11; */
}

.one {
  border: 1px green solid;
}

.two {
  border: 1px yellow solid;
}

.third {
  border: 1px blue solid;
}

.blob {
  /* position: absolute; */

  top: 0;
  left: 0;
  fill: #023f92;
  width: 50vmax;
  /* z-index: -1; */
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

/* .main-page {
  height: 75vh;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: #ffb1a4;

  display: flex;
  align-items: center;
}

.svg {
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

h1 {
  color: blue;
  font-size: 20vmin;
  line-height: 1;
  margin: 0;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  padding-left: 40px;
}

.soon {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: #ffb1a4;

  display: flex;
  align-items: center;
} */
</style>
