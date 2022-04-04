<template>
  <div class="about">
    <img class="profile_pic" src="~/assets/Svg/profile.svg" />

    <div class="text">
      <h2>About</h2>
      <p>
        I am partly a developer, partly an entrepreneur, partly a cook, and
        passionate about learning.
      </p>
      <p>
        I believe that a good recipe needs good ingredients, my experience of
        hospitality, my knowledge of web development, and my understanding of
        business and entrepreneurship, not only in Finland but in different
        countries, make me the perfect solution for your business.
      </p>

      <p>
        I am based in Savonlinna and Good Stuff Creations was created to help
        any hospitality business in the Savo region grow.
      </p>
      <p>Your business deserves always more.</p>
      <SocialMedia class="social_media" />
    </div>
  </div>
</template>

<script></script>

<style>
h2 {
  color: #813405;
}
img {
  max-width: 100%;
  max-height: 100%;
}

p {
  margin-bottom: 0;
}
.text p {
  line-height: 1.8;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.picture {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile_pic {
  width: 100%;
  height: 442px;
}

@media (min-width: 700px) {
  .profile_pic {
    flex: 1 1 0px;
  }

  h2 {
    color: #813405;
    text-align: start;
  }

  .about {
    display: flex;
    flex-direction: row;
    height: 80vh;
  }

  .text {
    flex: 1 1 0px;
  }
  .social_media {
    margin-top: 2%;
  }
}
</style>
