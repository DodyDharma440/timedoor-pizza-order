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
  display: flex;
  gap: spacing(7.5);
  padding: spacing(40) 0px;

  &__pizza {
    flex: 1;
  }

  &__payment-summary {
    width: 391px;
  }
}
</style>
