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

.text {
  display: flex;
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
