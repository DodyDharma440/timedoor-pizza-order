<script setup lang="ts">
import ChoosePizza from './ChoosePizza.vue'
import CustomPizza from './CustomPizza.vue'
import PaymentSummary from './PaymentSummary.vue'
</script>

<template>
  <section class="container order">
    <div class="order__pizza">
      <ChoosePizza />
      <CustomPizza />
    </div>
    <div class="order__payment-summary">
      <PaymentSummary />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.order {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: spacing(7.5);

  &__pizza {
    grid-column: span 9 / span 9;
  }

  &__payment-summary {
    grid-column: span 3 / span 3;
  }
}
</style>
