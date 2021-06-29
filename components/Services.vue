<template>
  <section class="services__background">
    <h2 class="services">Services</h2>
    <p>Your business needs digital presence and I can help you achieve it.</p>
    <div class="about__cards">
      <nuxt-link to="/services/webdev">
        <section
          class="about__single-card"
          active-click
          width="350px"
          height="450px"
        >
          <div class="front">
            <img width="100px" src="~/assets/Svg/website__dev.svg" />
            <h2>Web Development</h2>
            <p>
              Websites solutions that focus on your customer needs. Let's put
              your brand online
            </p>

            <button>Know more</button>
          </div>
        </section>
      </nuxt-link>
      <nuxt-link to="/services/seo">
        <section class="about__single-card" width="350px" height="450px">
          <div class="front">
            <img width="100px" src="~/assets/Svg/seo.svg" />
            <h2>SEO</h2>
            <p>
              Each producut needs a different SEO strategy. Together we find the
              best way to engage your audience
            </p>
            <button>Know more</button>
          </div>
        </section>
      </nuxt-link>
      <nuxt-link to="/services/maintenance">
        <section class="about__single-card" width="350px" height="450px">
          <div class="front">
            <img width="100px" src="~/assets/Svg/web__maintenance.svg" />
            <h2>Maintenance</h2>
            <p>
              If you need a fix on your website or some upgrade or even some
              maintenance I can help you
            </p>
            <button>Know more</button>
          </div>
        </section>
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped>
h1 {
  color: #28430a;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.services {
  color: black;
}
p {
  text-align: center;
}
.about__cards {
  /* padding-top: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 30px; */
  align-items: center;
  align-content: space-between;
}
img {
  margin-top: 2rem;
}

button {
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  padding: 20px;
  border-radius: 50px;
  display: inline-block;
  border: 2px white solid;
  border-radius: 16px;
  color: white;
}
.about__single-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-top: 30px;
  transition: 0.5s;
  position: relative;
  width: 350px;
  height: 450px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.about__cards >>> .front {
  background: #28430a;
  color: white;
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 5px 1px rgb(200, 136, 45);
  border-radius: 16px;
}

.about__cards >>> .front:hover {
  background: #793000;
  color: white;
}

.front >>> button:hover {
  color: white;
}

@media (min-width: 768px) {
  .about__cards {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
  }
}

@media (min-width: 1185px) {
  .about__cards {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}

.front {
  text-align: center;
}
</style>
