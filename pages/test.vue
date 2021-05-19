<template>
  <div>
    <section class="home__page">
      <div class="vector">
        <img width="100px" src="~/assets/test/five.svg" alt="" />
      </div>
      <div class="text">
        <!-- <h1 class="title">Good Stuff Creations</h1> -->
        <h1 class="title">Bringing your product online</h1>
        <p class="line">
          I create websites and digital products for local producers and
          groceries
        </p>
      </div>
    </section>

    <section class="services-offered">
      <h2>Services</h2>
      <article class="websites services-each">
        <h3>Websites</h3>
        <div class="websites__text">
          <p>
            Websites solutions that focus on your customer needs. Let's put your
            brand online
          </p>
        </div>
        <div class="websites__image">
          <img
            class="services__images"
            width="300px"
            src="~/assets/images/land__mobile.png"
            alt=""
          />
        </div>
      </article>
      <article class="seo">
        <h3>SEO</h3>
        <div class="seo__image">
          <img
            class="services__images"
            width="300px"
            src="~/assets/images/land__desktop.jpg"
            alt=""
          />
        </div>
        <div class="seo__text">
          <p>
            Websites solutions that focus on your customer needs. Let's put your
            brand online
          </p>
        </div>
      </article>
      <article class="maintenance">
        <h3>Maintenance</h3>
        <div class="maintenance__text">
          <p>
            Websites solutions that focus on your customer needs. Let's put your
            brand online
          </p>
        </div>
        <div class="maintenance__image">
          <img
            class="services__images"
            width="300px"
            src="~/assets/images/land__mob.jpg"
            alt=""
          />
        </div>
      </article>
    </section>
    <section>
      <Services />
    </section>
  </div>
</template>

<style scoped>
.home__page {
  margin-top: 5%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 100%;
}
.line {
  text-align: center;
}

h1 {
  color: #793000;
  font-size: 2em;
}
h2 {
  color: #28430a;
  font-size: 1em;
  margin-top: 7px;
}
h3 {
  color: #28430a;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.services__images {
  width: 100%;
}

/*Services*/
.services-offered {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.services-each {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 720px) {
  h1 {
    color: #793000;
    font-size: 3em;
  }

  h2 {
    color: #28430a;
    font-size: 1em;
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
    flex-direction: column;
    height: 70vh;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
}
</style>
