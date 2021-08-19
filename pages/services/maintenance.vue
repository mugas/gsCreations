<template>
  <div>
    <section class="promo__header">
      <article class="image">
        <img
          class="service__image"
          loading="lazy"
          src="~/assets/images/land__desktop.jpg"
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
          src="~/assets/Svg/update.svg"
          alt=""
        />
        <p class="services__text">Updates and Backups</p>
        <p>
          While you focus on your product or service, let me take care of all
          updates and backups your website might requires.
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/analytics.svg"
          alt=""
        />
        <p class="services__text">Monitoring and analytics</p>
        <p>
          Full report of what is going on in your website. From testing and
          checking the website, to analyse your views and all data.
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/support.svg"
          alt=""
        />
        <p class="services__text">Hosting and support</p>
        <p>
          Domain and hosting, plus and issue that your website might have in
          only one place.
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
  background-color: #c17d24;
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
  .text {
    margin: 0 5% 0 5%;
  }
  .promo__header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #c17d24;
  }
  .promo {
    color: white;
    text-align: center;
    margin-left: 5%;
    font-size: 2rem;
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
