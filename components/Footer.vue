<template>
  <footer class="footer">
    <section class="name">
      &copy; Good Stuff Creations {{ new Date().getFullYear() }}
    </section>
    <SocialMedia class="social_media" />
  </footer>
</template>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  color: black;
  @media (max-width: 567px) {
    padding: 1.2rem 0;
  }
  > * {
    margin-left: 2%;
    margin-right: 2%;
  }
}
@media (min-width: 720px) {
  .footer {
    flex-direction: row;
    align-items: baseline;
  }

  footer li {
    color: red;
  }

  .social_media ul li a {
    color: #813405;
  }
}
</style>
