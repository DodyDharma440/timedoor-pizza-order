<script setup lang="ts">
import pizzaList from '@/static/pizza-list.json'
import { useOrderStore } from '@/stores/order'
import PizzaCard from './PizzaCard.vue'

const store = useOrderStore()
</script>

<template>
  <h2 class="section-title">Choose your pizza</h2>
  <div class="pizza-list">
    <div class="pizza-list__item" v-for="pizza in pizzaList.data" :key="pizza.id">
      <PizzaCard
        :pizza="pizza"
        :is-selected="store.pizza?.id === pizza.id"
        @select="store.setPizza(pizza)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pizza-list {
  margin-top: spacing(10);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: spacing(3.5);
  margin-bottom: spacing(20);

  @include md {
    margin-bottom: spacing(30);
    gap: spacing(4.5);
  }

  @include lg {
    margin-bottom: spacing(40);
    gap: spacing(7.5);
  }

  &__item {
    grid-column: span 12 / span 12;

    @include xl {
      grid-column: span 6 / span 6;
    }

    @include xxl {
      grid-column: span 4 / span 4;
    }
  }
}
</style>
