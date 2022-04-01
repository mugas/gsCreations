<template>
  <article class="article-card" :class="[size, language, icon]">
    <nuxt-link :to="`/blog/${articleInfo.link}`">
      <div class="card-inner">
        <p class="type">
          <font-awesome-icon :icon="['fab', icon]" />
          {{ capitalize(articleInfo.attributes.type) }}
        </p>
        <h4>{{ articleInfo.attributes.title }}</h4>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    articleInfo: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    console.log(this.articleInfo.attributes.language)
    return {
      size: 'one-third',
      language: this.articleInfo.attributes.language,
      icon: 'js',
    }
  },
  mounted() {
    const articleNo = this.index + 1

    this.size = 'one-third'

    // If is first or multiple of 10
    if (articleNo === 1) this.size = 'two-thirds'
    if (articleNo % 10 === 0) this.size = 'two-thirds'

    // Switch for font awesome icon
    switch (this.language) {
      case 'Web Development':
        this.icon = 'vuejs'
        break
      case 'Sustainability':
        this.icon = 'braille'
        break
      case 'react':
        this.icon = 'react'
        break
      case 'Sustainabili':
        this.icon = 'js'
        break
      case 'wordpress':
        this.icon = 'wordpress'
        break
      case 'yarn':
        this.icon = 'yarn'
        break
      default:
        this.icon = 'nodeJs'
    }
  },
  methods: {
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
  },
}
</script>

<style lang="scss">
/* img {
  width: 50px;
} */
.article-card {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;

  padding: 1rem;
  margin-bottom: 2rem;
  min-height: 240px;
  position: relative;
  overflow: hidden;
  // -webkit-backdrop-filter: blur(10px) saturate(104%);
  // backdrop-filter: blur(10px) saturate(104%);
  // background-color: rgba(9, 82, 86, 0.8);
  // background-color: rgba(8, 127, 140, 0.86);
  // background-color: rgba(90, 170, 149, 0.86);
  // background-image: url('~/assets/Svg/blogpattern.svg');
  background-image: url('~/assets/Svg/patternpad.svg');
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  a {
    // position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    // color: white;
    color: black;
    box-shadow: none;
    // background: rgba(0, 0, 0, 0);
    transition: 0.2s ease all;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
    &:hover .type {
      // color: white;
      color: black;
    }
    &:hover h4 {
      // color: white;
      color: black;
    }
  }

  // Sizes
  &.two-thirds {
    width: calc(66% - 1rem);

    @media (max-width: 567px) {
      width: 100%;
    }
  }
  &.one-third {
    width: calc(33% - 1rem);

    @media (max-width: 567px) {
      width: 100%;
    }
  }
  &.three-thirds {
    width: calc(33% - 1rem);

    @media (max-width: 567px) {
      width: 100%;
    }
  }

  // Types
  &.Sustainability {
    .card-inner p {
      background: #f5fbf9;
      width: fit-content;
      // color: white;
      color: black;
    }
  }
  &.SEO {
    .card-inner p {
      background: #f5fbf9;
      width: fit-content;
      // color: white;
      color: black;
    }
  }
  &.Accessibility {
    .card-inner p {
      background: #f5fbf9;
      width: fit-content;
      // color: white;
      color: black;
    }
  }

  &.Performance {
    .card-inner p {
      background: #f5fbf9;
      width: fit-content;
      // color: white;
      color: black;
    }
  }
  &.Mobile {
    .card-inner p {
      background: #f5fbf9;
      width: fit-content;
      // color: white;
      color: black;
    }
  }
  &.other {
    .card-inner p {
      background: #f5fbf9;
      width: fit-content;
      // color: white;
      color: black;
    }
  }

  .card-inner {
    // position: absolute;
    // bottom: 1rem;
    left: 0;
    width: 100%;
    padding: 0 1rem;

    backdrop-filter: blur(5px) saturate(140%);
    -webkit-backdrop-filter: blur(5px) saturate(140%);
    background-color: rgba(245, 251, 249, 0.81);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);

    /*   backdrop-filter: blur(3px) saturate(185%);
    -webkit-backdrop-filter: blur(3px) saturate(185%);
    background-color: rgba(129, 52, 5, 0.66);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
 */
    /* backdrop-filter: blur(6px) saturate(94%);
    -webkit-backdrop-filter: blur(6px) saturate(94%);
    background-color: rgba(245, 251, 249, 0.35);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3); */
    .type {
      background: rgba(0, 0, 0, 0.1);
      padding: 0.4rem;
      border-radius: 0.2rem;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      display: inline-block;
      line-height: 0.8rem;
      // color: white;
      color: black;
    }
    h4 {
      margin-top: 0;
      margin-bottom: 0.25rem;
      // color: white;
      color: black;
      &:hover {
        // color: white;
        color: black;
      }
    }
  }
}
@media (min-width: 720px) {
  .article-card .card-inner {
    display: flex;
    flex-direction: column;
    bottom: inherit;
  }
}
</style>
