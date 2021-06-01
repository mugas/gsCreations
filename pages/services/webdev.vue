<template>
  <div>
    <section class="promo__header">
      <article class="image">
        <img
          class="service__image"
          loading="lazy"
          src="~/assets/images/land__mobile.png"
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
          High-performing, intuitive and secure web solutions that support
          business processes and serve users globally.
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/mini-sites.svg"
          alt=""
        />
        <p class="services__text">Mini Sites1</p>
        <p>
          High-performing, intuitive and secure web solutions that support
          business processes and serve users globally.
        </p>
      </article>
      <article class="services__each">
        <img
          class="service__image"
          width="100px"
          loading="lazy"
          src="~/assets/Svg/mini-sites.svg"
          alt=""
        />
        <p class="services__text">Mini Sites2</p>
        <p>
          High-performing, intuitive and secure web solutions that support
          business processes and serve users globally.
        </p>
      </article>
      <p class="contact">
        Contact me at firstname.lastname@gscreations.io (Ricardo Moreira) and
        let's grow your business
      </p>
    </section>
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
  background-color: #96d082;
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
    align-items: center;
    background-color: #96d082;
  }
  .promo {
    color: white;
    text-align: center;
    font-size: 2rem;
  }
}
</style>
