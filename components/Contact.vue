<template>
  <div class="contact_form">
    <section class="contact">
      <article class="call">
        <h2>Phone</h2>
        <img class="phone_icon" src="~/assets/Svg/phone.svg" alt="" />
        <p>303-354395426</p>
      </article>
      <article class="email">
        <h2>Email</h2>
        <img class="email_icon" src="~/assets/Svg/email.svg" alt="" />
        <p class="contact_name">Ricardo Moreira</p>
        <p>firstname.lastname@gscreations.io</p>
      </article>
      <article class="social">
        <h2>Social</h2>
        <SocialMedia />
      </article>
    </section>
  </div>
</template>

<style scoped>
h2 {
  color: #f5fbf9;
}
p {
  color: #f5fbf9;
}
img {
  width: 30px;
}

section article {
  display: flex;
  flex-direction: column;
  padding-top: 15%;
  align-items: center;
}

.social h2 {
  margin-bottom: 16%;
}

article h2 {
  margin-bottom: 6%;
}

article img {
  margin-bottom: 6%;
}

.contact_name {
  margin-bottom: 0;
}

.call {
  background-color: rgba(9, 82, 86, 0.8);
  flex: 1 1 0px;
}

.email {
  background-color: rgba(8, 127, 140, 0.8);
  flex: 1 1 0px;
}

.social {
  background-color: rgba(90, 170, 149, 0.8);
  flex: 1 1 0px;
}

@media (min-width: 720px) {
  .contact {
    display: flex;
    height: 600px;
    background-image: url('~/assets/Svg/patternpad.svg');
  }
}
</style>
