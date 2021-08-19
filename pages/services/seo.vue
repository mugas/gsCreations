<template>
  <div>
    <section class="promo__header">
      <article class="image">
        <img
          class="service__image"
          loading="lazy"
          src="~/assets/images/land__mob.jpg"
          alt=""
        />
      </article>
      <article class="text">
        <p class="promo">Are your products reaching your customers?</p>
      </article>
    </section>
    <section class="services__detailed">
      <article class="services__each first">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/local_seo.svg"
          alt=""
        />
        <p class="services__text">Local SEO</p>
        <p>
          Sometimes be first in our neighborhood it's better than be second all
          over the world. Local SEO, is what guides your business to be
          discovered in local searches.
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/on-page-seo.svg"
          alt=""
        />
        <p class="services__text">On-page SEO</p>
        <p>
          Title optimization, meta tags, headings, images, mobile friendliness.
          Everything that your websites pages need to be optimized to show in
          the search results.
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/of-page-seo.svg"
          alt=""
        />
        <p class="services__text">Off-page SEO</p>
        <p>
          Setting up or renew your social media accounts, create a google
          business profile; networking and backlinks.
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/content.svg"
          alt=""
        />
        <p class="services__text">Content creations</p>
        <p>
          Content is key. Your business needs to have and create content. More
          honest and real content, more views, more happy customers.
        </p>
      </article>
    </section>
    <p class="contact">
      Contact me at firstname.lastname@gscreations.io (Ricardo Moreira) and
      let's grow your business
    </p>
  </div>
</template>
<style scoped>
.service__image {
  max-width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.promo__header {
  display: flex;
  flex-direction: column;
  background-color: #42741d;
  margin-bottom: 10%;
}
.first {
  margin-top: 10%;
}
.promo {
  color: white;
  text-align: center;
  font-size: 2rem;
}
p {
  color: black;
  text-align: center;
}
.services__detailed {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.services__text {
  font-size: 2rem;
}
.services__each {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: #fcfcfc;
  border: 1px solid black;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;
}
.contact {
  font-weight: bold;
}

@media (min-width: 720px) {
  .promo__header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #42741d;
  }
  .promo {
    color: white;
    text-align: center;
    font-size: 2rem;
    margin-left: 5%;
  }
  .service__image {
    margin-left: 5%;
  }
  .services__detailed {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .first {
    margin-top: inherit;
  }
  .services__each {
    width: 20%;
    border: inherit;
    box-shadow: inherit;
  }
  .services__detailed {
    align-items: inherit;
  }
}
</style>
