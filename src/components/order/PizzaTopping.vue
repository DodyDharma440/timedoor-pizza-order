<script setup lang="ts">
import type { IPizzaTopping } from '@/interfaces/pizza'
import { useOrderStore } from '@/stores/order'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

type PizzaToppingProps = {
  topping: IPizzaTopping
}

const { topping } = defineProps<PizzaToppingProps>()

const store = useOrderStore()
const { pizza } = storeToRefs(store)

const isChecked = computed(() => store.isToppingSelected(topping.id))
const isDisabled = computed(() => !pizza.value?.toppings.includes(topping.id))
</script>

<template>
  <input
    type="checkbox"
    class="pizza-topping__input"
    :id="`topping-${topping.id}`"
    :checked="isChecked"
    @change="store.toggleSelectTopping(topping)"
    :disabled="isDisabled"
  />
  <label
    class="btn pizza-topping__button"
    :class="{
      'btn--disabled': isDisabled,
      'btn--primary-default': !isChecked && !isDisabled,
      'btn--primary-light': isChecked && !isDisabled,
    }"
    :for="`topping-${topping.id}`"
  >
    {{ topping.name }}
  </label>
</template>

<style lang="scss" scoped>
.pizza-topping {
  &__input {
    display: none;
  }

  &__button {
    width: 100%;
  }
}
</style>
