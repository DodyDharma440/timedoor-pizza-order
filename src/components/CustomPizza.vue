<script setup lang="ts">
import toppingList from '@/static/topping-list.json'
import sizeList from '@/static/size-list.json'
import { ref } from 'vue'
import RadioButton from './RadioButton.vue'
import type { IPizzaSize } from '@/interfaces/pizza'
import { currencyFormat } from '@/utils/number-format'

const selectedToppings = ref<number[]>([])
const selectedSize = ref<IPizzaSize>(sizeList.data[0])

const isSelected = (toppingId: number) => {
  return selectedToppings.value.includes(toppingId)
}

const handleSelect = (toppingId: number) => {
  if (isSelected(toppingId)) {
    selectedToppings.value = selectedToppings.value.filter((v) => v !== toppingId)
  } else {
    selectedToppings.value = [...selectedToppings.value, toppingId]
  }
}

const handleChangeSize = (event: Event, value: IPizzaSize) => {
  const target = event.target as HTMLInputElement
  if (target.checked) {
    selectedSize.value = value
  }
}
</script>

<template>
  <h2 class="section-title">Custom Pizza</h2>
  <div class="custom-pizza">
    <div class="custom-pizza__size">
      <label class="custom-pizza__field-label">Size</label>
      <div class="custom-pizza__size-list">
        <RadioButton
          v-for="size in sizeList.data"
          :key="size.id"
          :value="size.id"
          :checked="size.id === selectedSize.id"
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
      <label class="custom-pizza__field-label">Toppings</label>
      <div class="custom-pizza__toppings-list">
        <div
          class="custom-pizza__toppings-list-item"
          v-for="topping in toppingList.data"
          :key="topping.id"
        >
          <button
            class="btn"
            :class="{
              'btn--primary-default': !isSelected(topping.id),
              'btn--primary-light': isSelected(topping.id),
            }"
            @click="handleSelect(topping.id)"
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
      gap: spacing(7.5);
    }

    &-extra-price {
      opacity: 50%;
    }
  }

  &__toppings {
    &-list {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: spacing(7.5);

      &-item {
        grid-column: span 2 / span 2;

        .btn {
          width: 100%;
        }
      }
    }
  }
}
</style>
