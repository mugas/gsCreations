<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-inner">
      <div class="brand">
        <nuxt-link to="/blog" class="nav-link">Good Stuff Creations</nuxt-link>
      </div>
      <ul class="social-icons">
        <li class="icon">
          <a
            href="https://twitter.com/mugas11"
            target="_blank"
            class="nav-link"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
        <li class="icon">
          <a
            href="https://instagram.com/mugas_codes"
            target="_blank"
            class="nav-link"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav-link {
  color: white;
}
.navbar {
  width: 100%;
  font-family: 'Rubik', sans-serif;
  background: #131313;

  .navbar-inner {
    display: flex;
    background: #131313;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;

    .brand {
      display: block;
      font-weight: 700;
      text-align: left;

      img {
        height: 24px;
        display: block;
      }

      a {
        padding: 1rem;
        display: block;
        box-shadow: none;
      }
    }

    .social-icons {
      padding: 0;
      margin: 0;
      list-style-type: none;
      line-height: 1;

      li {
        display: inline;

        a {
          display: inline-block;
          padding: 1.1rem 1rem 1rem 1rem;
          box-shadow: none;
          color: white;
        }
      }
    }
  }
}
</style>
