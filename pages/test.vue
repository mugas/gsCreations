<template>
  <div>
    <section class="home__page">
      <img class="image" src="~/assets/test/sixth.svg" />
      <div class="text">
        <h1 class="title">
          Good<br />
          Stuff<br />
          Creations <br />
        </h1>
        <h2 class="line">Put local producers online</h2>
      </div>
    </section>
  </div>
</template>
<style scoped>
.home__page {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  justify-content: space-around;
  width: 100%;
}
img {
  width: 100%;
}
h1 {
  color: #edbd54;
  font-size: 3em;
}
h2 {
  color: #28430a;
  font-size: 1em;
}
.image {
  width: 50%;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 720px) {
  h1 {
    color: #edbd54;
    font-size: 3em;
  }
  h2 {
    color: #28430a;
    font-size: 1em;
  }
  .image {
    width: 50%;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .home__page {
    margin-top: 5%;
    display: flex;
    height: 70vh;
    justify-content: space-around;
    width: 100%;
  }
}
</style>
