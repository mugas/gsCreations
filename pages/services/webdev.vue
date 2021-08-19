<template>
  <div>
    <section class="promo__header">
      <article class="image">
        <img
          class="service__image"
          loading="lazy"
          src="~/assets/images/webdev_services.jpg"
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
          src="~/assets/Svg/mini-sites.svg"
          alt=""
        />
        <p class="services__text">Mini Sites</p>
        <p>
          Launch your new product or service in a beautiful and fast mini site
          or landing page. Responsive and modern
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/webdev.svg"
          alt=""
        />
        <p class="services__text">Website Development</p>
        <p>
          Your brand needs to be online and your product needs to reach more
          people. Good Stuff Creations helps creates a fully website, from
          scratch. Your product is the focus. Optimized for SEO and responsive
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/wordpress.svg"
          alt=""
        />
        <p class="services__text">Wordpress Development</p>
        <p>
          You and your product in control. A website with CMS(content management
          system), easy to edit, customizable and unique.
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/woocommerce.svg"
          alt=""
        />
        <p class="services__text">E-commerce</p>
        <p>
          Sell more by selling your product or service online. With a fast and
          beautifull online store you control and sell more. Easy customization
          and many features
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/hosting.svg"
          alt=""
        />
        <p class="services__text">Hosting</p>
        <p>
          Do what makes you happy. I take care of all websites updates, email
          hosting and support.
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/rebuild.svg"
          alt=""
        />
        <p class="services__text">Redesign</p>
        <p>
          It's ok to keep it. If you like your website but just need some
          changes I can help to achieve your goals
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
  background-color: #7e2318;
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
    background-color: #7e2318;
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
