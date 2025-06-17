<script setup lang="ts">
import { navMenu } from '@/constants/menu'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="main-nav container">
    <div class="logo">
      <img src="/images/logo.svg" />
    </div>
    <div class="menu">
      <RouterLink v-for="(menu, index) in navMenu" :to="menu.path" :key="index">
        <span>{{ menu.label }}</span>
      </RouterLink>
    </div>
    <div class="buttons">
      <button class="btn">Login</button>
      <button class="btn btn-primary register">Register</button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.main-nav {
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

  .logo,
  .buttons {
    width: 240px;
  }

  .logo {
    img {
      width: 220px;
      height: 65px;
      object-fit: contain;
    }
  }

  .menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: spacing(7.5);
    font-size: font-size(18);
    font-weight: 700;

    a {
      text-decoration: none;
      color: inherit;
    }

    a.router-link-active {
      color: $primary-color;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: spacing(1);

    .register {
      min-width: 160px;
    }
  }
}
</style>
