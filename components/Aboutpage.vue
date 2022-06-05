<template>
  <div class="about">
    <img class="profile_pic" src="~/assets/Svg/profile.svg" />

    <div class="text">
      <h2>Bulding your success</h2>
      <p>
        I am partly a developer, partly an entrepreneur, and passionate about
        learning.
      </p>
      <p>
        After many years of learning and trying and testing where my skills can
        be better used, I have been working with some real estate business
        agency and agents. After that, I realized that I like this market, I had
        plenty ideas to implement on it and it seemed the market liked me also.
        So Good Stuff Creations is made for the real estate business.
      </p>
      <p>
        Don't matter if you are a real estate agent, an agency or you have a
        local rental business, the plan is always to get more leads trough your
        website, market better your listings, get your agents better listings
        and more.
      </p>

      <p>
        I am based in Savonlinna and Good Stuff Creations was created to help
        any real estate business .
      </p>
      <p>Your business deserves always more.</p>
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
  padding-left: 6%;
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
    align-items: flex-end;
    height: 80vh;
  }

  .text {
    flex: 1 1 0px;
  }
  .text p {
    text-align: start;
    padding-left: 0;
  }
  .social_media {
    margin-top: 2%;
  }
}
</style>
