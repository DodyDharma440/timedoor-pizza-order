<script setup lang="ts">
import { navMenu } from '@/constants/menu'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="container navbar">
    <div class="navbar__logo">
      <img src="/images/logo.svg" />
    </div>
    <div class="navbar__menu">
      <RouterLink v-for="(menu, index) in navMenu" :to="menu.path" :key="index">
        <span>{{ menu.label }}</span>
      </RouterLink>
    </div>
    <div class="navbar__buttons">
      <button class="btn navbar__buttons-login">Login</button>
      <button class="btn btn--primary navbar__buttons-register">Register</button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: spacing(6);
  gap: spacing(4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  z-index: $navbar-z-index;

  &__logo,
  &__buttons {
    width: 240px;
  }

  &__logo {
    img {
      width: 220px;
      height: 65px;
      object-fit: contain;
    }
  }

  &__menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: spacing(7.5);
    font-weight: 700;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: $primary-color;
      }

      &.router-link-active {
        color: $primary-color;
      }
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: spacing(1);

    &-login {
      &:hover {
        color: $primary-color;
      }
    }

    &-register {
      min-width: 160px;
    }
  }
}
</style>
