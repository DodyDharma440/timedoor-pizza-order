<script setup lang="ts">
import type { IPizza } from '@/interfaces/pizza'
import { currencyFormat } from '@/utils/number-format'

type PizzaCardProps = {
  pizza: IPizza
  isSelected: boolean
}

const { pizza, isSelected } = defineProps<PizzaCardProps>()

const finalPrice = pizza.discount.is_active ? pizza.discount.final_price : pizza.price
</script>

<template>
  <div class="pizza-card" :class="{ 'pizza-card--selected': isSelected }">
    <div class="pizza-card__discount-ribbon" v-if="pizza.discount.is_active">OFFER</div>

    <img class="pizza-card__image" :src="`/images/pizza/${pizza.name}.png`" />

    <div>
      <p class="pizza-card__name">{{ pizza.name }}</p>
      <p class="pizza-card__price">
        {{ currencyFormat(finalPrice) }}
        <span class="pizza-card__price-before-discount" v-if="pizza.discount.is_active">
          {{ currencyFormat(pizza.price) }}
        </span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pizza-card {
  border-radius: spacing(4);
  min-height: 208px;
  background-color: $main-background;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba($color: $text-color, $alpha: 0.1);
  transition: all 300ms;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: spacing(4);
  gap: spacing(4);
  font-size: to-rem(20);

  @include lg {
    padding: spacing(8);
    gap: spacing(8);
  }

  &:hover {
    background-color: rgba($color: $primary-color, $alpha: 0.3);

    .pizza-card {
      &__image {
        transform: rotate(20deg);
      }
    }
  }

  &--selected {
    background-color: $primary-color;
    color: #ffffff;
    &:hover {
      background-color: $primary-color;
    }
  }

  &__discount-ribbon {
    position: absolute;
    background-color: $text-color;
    color: #ffffff;
    width: 182px;
    transform: rotate(41.55deg);
    right: -50px;
    top: 20px;
    text-align: center;
    font-size: to-rem(14);
    padding: spacing(1.5);
    z-index: 2;
  }

  &__image {
    width: 144px;
    height: 144px;
    object-fit: contain;
    transition: transform 300ms;
  }

  &__name {
    font-weight: 700;
    margin-bottom: spacing(1.25);
  }

  &__price {
    &-before-discount {
      opacity: 0.4;
      text-decoration: line-through;
      margin-left: spacing(2);
    }
  }
}
</style>
