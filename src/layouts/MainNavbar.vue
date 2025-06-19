<script setup lang="ts">
import { navMenu } from '@/constants/menu'
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const solidNav = ref(false)
const isOpenMobileMenu = ref(false)

const toggleMobileMenu = () => {
  isOpenMobileMenu.value = !isOpenMobileMenu.value
}

const handleScroll = () => {
  solidNav.value = window.scrollY > 500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--solid': solidNav }">
    <div class="container">
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

      <button class="navbar__mobile-btn" @click="toggleMobileMenu">
        <img src="/images/icons/menu.svg" class="navbar__mobile-btn-icon" alt="menu" />
      </button>
    </div>

    <Teleport to="body">
      <div class="navbar__mobile-menu" :class="{ 'navbar__mobile-menu-opened': isOpenMobileMenu }">
        <button class="navbar__mobile-menu-close" @click="toggleMobileMenu">
          <img src="/images/icons/close.svg" class="navbar__mobile-menu-close-icon" alt="menu" />
        </button>

        <RouterLink v-for="(menu, index) in navMenu" :to="menu.path" :key="index">
          <span>{{ menu.label }}</span>
        </RouterLink>

        <div class="navbar__buttons navbar__buttons--mobile">
          <button class="btn navbar__buttons-login">Login</button>
          <button class="btn btn--primary navbar__buttons-register">Register</button>
        </div>
      </div>
    </Teleport>
  </nav>
</template>

<style lang="scss" scoped>
@mixin link-styles {
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

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  z-index: $navbar-z-index;
  transition: background-color 300ms;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: spacing(4);
    gap: spacing(4);

    @include lg {
      padding: spacing(6);
    }
  }

  &--solid,
  &__mobile-menu {
    background-color: rgba($color: #000000, $alpha: 0.5);
    backdrop-filter: blur(10px);
  }

  &__logo,
  &__buttons {
    min-width: 240px;
  }

  &__logo {
    img {
      object-fit: contain;
      width: 120px;
      height: 36px;

      @include md {
        width: 150px;
        height: 40px;
      }

      @include lg {
        width: 220px;
        height: 65px;
      }
    }
  }

  &__menu {
    flex: 1;
    display: none;
    font-weight: 700;

    @include lg {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: spacing(7.5);
    }

    @include link-styles;
  }

  &__buttons {
    display: none;
    align-items: center;
    gap: spacing(1);

    @include lg {
      display: flex;
    }

    &--mobile {
      display: flex;
      margin-top: spacing(4);
      width: 100%;
      .btn {
        flex: 1;
      }
    }

    &-login {
      &:hover {
        color: $primary-color;
      }
    }

    &-register {
      min-width: 160px;
    }
  }

  &__mobile-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    @include lg {
      display: none;
    }

    &-icon {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }
  }

  &__mobile-menu {
    color: #ffffff;
    padding-top: 72px;
    padding-left: spacing(6);
    padding-right: spacing(6);
    padding-bottom: spacing(10);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: to-rem(24);
    gap: spacing(6);
    z-index: $navbar-z-index + 1;
    transform: translateY(-100%);
    transition: transform 300ms ease;

    @include link-styles;

    &-close {
      position: absolute;
      top: spacing(6);
      right: spacing(6);

      &-icon {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
    }

    &-opened {
      transform: translateY(0);
    }
  }
}
</style>
