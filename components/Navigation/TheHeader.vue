<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">
          <img width="500px" src="~/assets/Svg/logo.svg" />
          <!-- <img width="150px" src="~/assets/Svg/gs.svg" /> -->
        </nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/blog">Blog</nuxt-link></li>
        </ul>
      </div>
      <nuxt-link to="/"
        ><img width="150px" src="~/assets/Svg/logo.svg" class="right-logo"
      /></nuxt-link>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle'

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle,
  },
}
</script>

<style scoped>
.header-container {
  height: 100px;
  position: relative;
  z-index: 0;
  width: 100%;
}

.the-header {
  width: 100%;

  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* align-items: center; */
  /* background-color: white; */
  /* z-index: 100; */
  box-sizing: border-box;
  padding: 0 20px;
  margin-top: 10px;

  z-index: -1;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
  display: none;
}

.logo a {
  text-decoration: none;
  color: #f5fbf9;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

img {
  width: 75px;
}

.right-logo {
  width: 150px;
}

.right-logo {
  display: block;
}

@media (min-width: 768px) {
  .header-container {
    display: flex;
    width: 100%;
    align-items: center;
  }
  .navigation-items {
    display: block;
  }
  .right-logo {
    display: none;
  }

  .logo {
    display: block;
  }

  img {
    width: 300px;
  }
  .the-header {
    align-items: inherit;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: black;
}
</style>
