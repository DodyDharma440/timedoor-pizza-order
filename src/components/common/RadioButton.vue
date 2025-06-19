<template>
  <div class="radio-button">
    <input type="radio" class="radio-button__input" v-bind="$attrs" />
    <span class="radio-button__look"></span>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.radio-button {
  display: flex;
  align-items: center;
  gap: spacing(2.5);
  font-size: to-rem(20);
  position: relative;

  &__input {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    &:checked + .radio-button__look:after {
      background: $primary-color;
    }
  }

  &__look {
    width: spacing(6);
    height: spacing(6);
    display: inline-block;
    vertical-align: middle;
    padding: 5px;
    border: 1px solid $primary-color;
    border-radius: 50%;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 5px;
      top: 5px;
      bottom: 5px;
      right: 5px;
      border-radius: 50%;
    }
  }
}
</style>
