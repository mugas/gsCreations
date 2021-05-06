<template>
  <div>
    <!--   <section class="hero">
      <div class="hero-inner"></div>
    </section> -->
    <section class="services">
      <h2 class="services__title">Services</h2>
      <div class="services__name">
        <article class="services__description Development">
          <img
            class="services__image"
            width="100px"
            src="~/assets/Svg/web.svg"
          />
          <h3>Web Development</h3>
        </article>
        <article class="services__description seo">
          <img
            class="services__image"
            width="100px"
            src="~/assets/Svg/web.svg"
          />
          <h3>Web Development</h3>
        </article>
        <article class="services__description refactor">
          <img
            class="services__image"
            width="100px"
            src="~/assets/Svg/web.svg"
          />
          <h3>Web Development</h3>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'land1',
}
</script>

<style scoped>
.hero {
  background-position: inherit;
}
.home__page {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  justify-content: space-around;
  /* width: 100%; */
}
.title {
  display: none;
}
img {
  width: 100%;
}
h1 {
  color: #edbd54;
  font-size: 2em;
}
h2 {
  color: #28430a;
  font-size: 1em;
  margin-top: 7px;
}
.image {
  width: 71%;
  flex: 1;
}

.text {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}

/*Services*/
.services {
  display: flex;
  flex-direction: column;
}
.services__image {
  width: 100px;
}
h3 {
  color: black;
}
.services__description {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 720px) {
  .hero {
    /* Sizing */
    width: 100vw;
    height: 100vh;

    /* Flexbox stuff */
    /* display: flex; */
    justify-content: center;
    align-items: center;

    /* Text styles */
    text-align: center;

    /* Background styles */
    /* background-image: url('~assets/images/four.png'); */
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  h1 {
    color: #28430a;
    font-size: 3em;
  }
  .title {
    display: inherit;
  }
  .title__mobile {
    display: none;
  }
  h2 {
    color: #28430a;
    font-size: 1em;
  }
  .image {
    width: 50%;
    order: 1;
    height: 60vh;
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
    margin-left: 5%;
    border-radius: 30px;
    margin-right: 5%;
    margin-top: 5%;
    flex-direction: row;
    align-items: center;
    height: 62vh;
    justify-content: space-around;
    /* width: 100%; */
  }
  .services__title {
    width: 100%;
  }
  .services__name {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
}
</style>
