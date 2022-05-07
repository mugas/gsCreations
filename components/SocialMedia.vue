<template>
  <nav>
    <ul class="social-media">
      <li>
        <a href="https://twitter.com/g_s_creations" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/gs_codes/" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/goodstuffcodes/" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
li {
  list-style: none;
  text-decoration: none;
}

ul {
  list-style: none;
  text-decoration: none;
  margin-bottom: 0;
}

a {
  padding: 1rem;

  color: #813405;;
  text-decoration: none;
}

li :first-child {
  padding-left: 0;
}

.social-media {
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-top: 20px;
  justify-content: center;
}

/* .social-media ul {
  padding-left: 0;
} */

@media (min-width: 720px) {
  .social-media ul li a {
    display: flex;
    flex-direction: row;
    color:#f5fbf9
  }
  ul {
    font-size: 2rem;
  }
}
</style>
