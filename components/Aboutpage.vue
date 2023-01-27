<template>
  <div class="about">
    <img class="profile_pic" src="~/assets/Svg/mw_logo.svg" />

    <div class="text">
      <p class="text_first">
        I am a developer, entrepreneur, and lifelong learner based in
        Savonlinna. Good Stuff Creations is my one-man company that specializes
        in creating websites and landing pages for small businesses and
        freelancers.
      </p>

      <p>
        With a passion for technology and a drive for innovation, I strive to
        help businesses of all sizes reach their full potential online. I
        understand the unique challenges that small businesses and freelancers
        face and am dedicated to providing the tools and support they need to
        succeed.
      </p>
      <p>
        My goal is to empower businesses to achieve more, and I achieve this by
        creating custom websites and landing pages that are tailored to their
        specific needs. Whether you're looking to increase conversions,
        streamline your online presence, or simply create a more engaging user
        experience, I have the expertise and experience to help you achieve your
        goals.
      </p>
      <p>Your business deserves always more.</p>
    </div>
  </div>
</template>

<style>
body,
html {
  background-color: white;
}

p {
  line-height: 4rem;
  padding-bottom: 3%;
}
h2 {
  color: #813405;
  text-align: center;
}
img {
  max-width: 100%;
  max-height: 100%;
}

p {
  margin-bottom: 0;
}
.text_first {
  margin-top: 10%;
}
.text p {
  line-height: 1.8;
  padding-left: 6%;
}

.about {
  display: flex;
  background-color: white;
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

  .text {
    padding: 10px 30px 10px 30px;
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
  .text p {
    text-align: start;
    padding-left: 0;
  }
  .social_media {
    margin-top: 2%;
  }
}
</style>
