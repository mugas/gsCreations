<template>
  <div>
    <div class="hero">
      <TheHeaders @sidenavToggle="displaySidenav = !displaySidenav" />
      <TheSidenavs :show="displaySidenav" @close="displaySidenav = false" />

      <h1>Good Stuff Creations</h1>
      <h2>Websites and digital solutions for local producers and groceries</h2>
    </div>
    <nuxt />
  </div>
</template>

<script>
import TheHeaders from '~/components/Navigations/TheHeaders'
import TheSidenavs from '~/components/Navigations/TheSidenavs'
// import Footer from '~/components/Footer'
// import Navbar from '~/components/Navbar'
export default {
  components: {
    // Footer,
    // Navbar,
    TheHeaders,
    TheSidenavs,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
}
</script>

<style lang="scss">
body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
}
html {
  font-size: 20px;
  word-spacing: 1px;
}
html,
body {
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  widows: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.hero {
  /* Sizing */
  width: 100vw;
  height: 100vh;

  /* Flexbox stuff */
  // display: flex;
  justify-content: center;
  align-items: center;

  /* Text styles */
  text-align: center;

  /* Background styles */
  background-image: url('~assets/images/land__mobile.png');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

a {
  color: #252525;
  text-decoration: none;
  // box-shadow: inset 0 -1px 0 currentColor;
  transition: color 80ms ease-in, box-shadow 130ms ease-in-out,
    -webkit-box-shadow 130ms ease-in-out;
}
ul {
  padding-left: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 1.6rem;
}

@media (min-width: 660px) {
  .hero {
    display: flex;
    flex-direction: column;
    background-image: url('~assets/images/land__desktop.jpg');
  }
  .hero h1 {
    /* Text styles */
    color: black;
    font-size: 5em;
  }
}
</style>
