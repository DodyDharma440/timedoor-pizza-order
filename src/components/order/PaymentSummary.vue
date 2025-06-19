<script setup lang="ts">
import { useOrderStore } from '@/stores/order'
import { currencyFormat } from '@/utils/number-format'
import { computed, ref } from 'vue'
import ConfirmationModal from './ConfirmationModal.vue'

const store = useOrderStore()
const isConfirmOpen = ref(false)

const handleToggle = () => {
  isConfirmOpen.value = !isConfirmOpen.value
}

const disabledOrder = computed(() => {
  return !store.pizza || !store.selectedSize
})
</script>

<template>
  <div class="payment-summary">
    <div>
      <h3 class="payment-summary__title">Payment Summary</h3>
      <ul>
        <li
          class="payment-summary__detail-item"
          v-for="(item, index) in store.paymentDetails"
          :key="index"
        >
          <p class="payment-summary__detail-item-label">
            {{ item.label }}
          </p>
          <p>
            {{ currencyFormat(item.value) }}
          </p>
        </li>
      </ul>
    </div>
    <hr class="payment-summary__divider" />
    <div class="payment-summary__total">
      <p>Total Price</p>
      <p class="payment-summary__total-price">
        {{ currencyFormat(store.totalPrice) }}
      </p>
    </div>

    <button class="btn btn--primary" @click="handleToggle()" :disabled="disabledOrder">
      Order Now
    </button>
  </div>

  <ConfirmationModal :is-open="isConfirmOpen" @close="handleToggle()" />
</template>

<style lang="scss" scoped>
.payment-summary {
  background-color: #ffffff;
  box-shadow: 0px 12.52px 10.02px 0px #a3a0a00d;
  border-radius: spacing(4);
  padding: spacing(8);
  display: flex;
  flex-direction: column;
  gap: spacing(6);

  &__title {
    font-size: to-rem(24);
    font-weight: 700;
    color: $primary-color;
    margin-bottom: spacing(4);
  }

  &__detail-item {
    display: flex;
    align-items: center;
    padding: spacing(2);

    &-label {
      flex: 1;
      color: #626f79;
    }
  }

  &__divider {
    width: 100%;
    border-top: 1px solid rgba($color: $text-color, $alpha: 0.1);
  }

  &__total {
    display: flex;
    align-items: center;
    font-size: to-rem(24);

    &-price {
      text-align: right;
      color: $primary-color;
      font-weight: 700;
      flex: 1;
    }
  }
}
</style>
