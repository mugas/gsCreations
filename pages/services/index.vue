<template>
  <div class="services">
    <section class="web__development">
      <img
        class="service__image"
        width="200px"
        loading="lazy"
        src="~/assets/Svg/ecommerce.svg"
        alt=""
      />

      <article class="services__text">
        <h2>Web Development</h2>
        <p>
          Digital is ubiquitous within organizations, impacting every discipline
          and department. We’ll help you design responsible digital strategies
          that create transformative change.
        </p>
        <nuxt-link to="/services/webdev">
          <button>Web Development Services</button>
        </nuxt-link>
      </article>
    </section>
    <section class="seo">
      <article class="services__text">
        <h2 class="seo__title">SEO</h2>
        <p>
          Digital is ubiquitous within organizations, impacting every discipline
          and department. We’ll help you design responsible digital strategies
          that create transformative change.
        </p>
        <button class="seo__button">SEO Services</button>
      </article>
      <img
        class="service__image"
        loading="lazy"
        width="200px"
        src="~/assets/Svg/seo_search.svg"
        alt=""
      />
    </section>
    <section class="maintenance">
      <img
        class="service__image"
        width="200px"
        loading="lazy"
        src="~/assets/Svg/maintenance.svg"
        alt=""
      />
      <article class="services__text">
        <h2>Maintenance</h2>
        <p>
          Digital is ubiquitous within organizations, impacting every discipline
          and department. We’ll help you design responsible digital strategies
          that create transformative change.
        </p>
        <button>Maintenance Services</button>
      </article>
    </section>
  </div>
</template>

<style scoped>
h2 {
  color: black;
}
.services {
  display: flex;
  flex-direction: column;
}
.web__development,
.seo,
.maintenance {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10%;
  padding-top: 10%;
}
.services__text {
  text-align: center;
  padding-bottom: 5%;
}
.service__image {
  max-width: 100%;
  width: 33%;
  height: auto;
}
.seo__button {
  color: white;
}
button {
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  padding: 20px;
  border-radius: 50px;
  display: inline-block;
  border: 2px solid #28430a;
  border-radius: 16px;
  color: black;
}
.seo {
  background-color: #793000;
  color: white;
}
.seo__title {
  color: white;
}
@media (min-width: 720px) {
  .web__development,
  .seo,
  .maintenance {
    flex-direction: row;
    justify-content: space-evenly;
  }

  .services__text {
    width: 50%;
  }
}
</style>
