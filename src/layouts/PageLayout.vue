<script setup lang="ts">
import MainFooter from './MainFooter.vue'
import MainNavbar from './MainNavbar.vue'
</script>

<template>
  <MainNavbar />
  <slot />
  <MainFooter />
</template>
