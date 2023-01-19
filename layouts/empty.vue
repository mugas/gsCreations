<template>
  <nuxt />
</template>

<style>
body {
  width: 100vw;
}

html,
body {
  background: linear-gradient(
    65deg,
    hsl(31deg 94% 61%) 0%,
    hsl(30deg 76% 55%) 7%,
    hsl(28deg 67% 48%) 14%,
    hsl(27deg 72% 41%) 20%,
    hsl(25deg 79% 35%) 26%,
    hsl(23deg 89% 28%) 31%,
    hsl(21deg 61% 36%) 36%,
    hsl(21deg 38% 50%) 40%,
    hsl(20deg 41% 64%) 44%,
    hsl(20deg 44% 77%) 47%,
    hsl(19deg 47% 91%) 51%,
    hsl(183deg 14% 95%) 55%,
    hsl(183deg 14% 79%) 60%,
    hsl(183deg 14% 64%) 67%,
    hsl(184deg 15% 50%) 77%,
    hsl(184deg 28% 35%) 88%,
    hsl(183deg 81% 19%) 100%
  );
  background-size: 600% 600%;

  -webkit-animation: AnimationName 14s ease infinite;
  -moz-animation: AnimationName 14s ease infinite;
  animation: AnimationName 14s ease infinite;

  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  widows: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
</style>
