<script setup lang="ts">
import toppingList from '@/static/topping-list.json'
import sizeList from '@/static/size-list.json'
import RadioButton from './RadioButton.vue'
import { currencyFormat } from '@/utils/number-format'

import { useOrderStore } from '@/stores/order'
import type { IPizzaSize } from '@/interfaces/pizza'
import { storeToRefs } from 'pinia'

const store = useOrderStore()
const { selectedSize, pizza } = storeToRefs(store)

const handleChangeSize = (event: Event, value: IPizzaSize) => {
  const target = event.target as HTMLInputElement
  if (target.checked) {
    store.setSelectedSize(value)
  }
}
</script>

<template>
  <h2 class="section-title">Custom Pizza</h2>
  <div class="custom-pizza">
    <div class="custom-pizza__size">
      <h6 class="custom-pizza__field-label">Size</h6>
      <div class="custom-pizza__size-list">
        <RadioButton
          v-for="size in sizeList.data"
          :key="size.id"
          :value="size.id"
          :checked="size.id === selectedSize?.id"
          @change="handleChangeSize($event, size)"
        >
          {{ size.name }}
          <span class="custom-pizza__size-extra-price" v-if="size.extra_price">
            {{ `(+${currencyFormat(size.extra_price)})` }}
          </span>
        </RadioButton>
      </div>
    </div>

    <div class="custom-pizza__toppings">
      <h6 class="custom-pizza__field-label">Toppings</h6>
      <div class="custom-pizza__toppings-list">
        <div
          class="custom-pizza__toppings-list-item"
          v-for="topping in toppingList.data"
          :key="topping.id"
        >
          <button
            class="btn"
            :class="{
              'btn--primary-default': !store.isToppingSelected(topping.id),
              'btn--primary-light': store.isToppingSelected(topping.id),
            }"
            @click="store.toggleSelectTopping(topping)"
            :disabled="!pizza?.toppings.includes(topping.id)"
          >
            {{ topping.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-pizza {
  margin-top: spacing(10);

  &__field-label {
    display: block;
    font-size: to-rem(24);
    font-weight: 700;
    margin-bottom: spacing(6);
  }

  &__size {
    margin-bottom: spacing(10);

    &-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: spacing(5);

      @include lg {
        gap: spacing(7.5);
      }
    }

    &-extra-price {
      opacity: 50%;
    }
  }

  &__toppings {
    &-list {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: spacing(5);

      @include lg {
        gap: spacing(7.5);
      }

      &-item {
        grid-column: span 6 / span 6;

        @include lg {
          grid-column: span 2 / span 2;
        }

        .btn {
          width: 100%;
        }
      }
    }
  }
}
</style>
