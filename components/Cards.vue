<template>
  <section class="card">
    <article>
      <h1 class="title">
        Good<br />
        Stuff<br />
        Creations <br />
      </h1>
    </article>
    <article>
      <h2 class="line">Websites and Digital Presence for your business</h2>
    </article>
    <article class="cta">
      <nuxt-link to="/contact"><button>Let's start</button></nuxt-link>
    </article>
  </section>
</template>

<style scoped>
.title {
  color: #793000;
  font-size: 3em;
  text-align: left;
  margin-left: 2%;
}
.card {
  background-color: #edbd54;
  margin-top: 5%;
  height: 68vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.line {
  text-align: left;
  margin-left: 2%;
  font-size: 1em;
  color: #28430a;
}

button {
  border: 0;
  background: transparent;
  border-radius: 0;
  margin-left: 2%;
  margin-top: 3%;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-transform: inherit;
  background-color: #793000;
  color: #fff;
  position: relative;
  z-index: 0;
  display: inline-block;
  overflow: hidden;
  font-size: 1rem;
  padding: 14.00778px 20px;
  border-radius: 2em;
  cursor: pointer;
}

@media (min-width: 660px) {
  .line {
    font-size: 2em;
  }
  .card {
    justify-content: inherit;
  }
}
</style>
