<template>
  <section class="hero">
    <img class="hero__background" src="/images/hero.png" />
    <h1 class="hero__title">Pizza order</h1>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  height: 738px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgba($color: #000000, $alpha: 0.5);
  overflow: hidden;

  &__background {
    position: absolute;
    inset: 0;
    object-fit: cover;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  &__title {
    position: relative;
    z-index: 2;
    font-size: to-rem(96);
    font-weight: 700;
    color: $primary-color;
  }
}
</style>
