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
  padding-top: spacing(20);
  padding-bottom: spacing(20);
  flex-wrap: wrap;

  @include md {
    padding-top: spacing(30);
    padding-bottom: spacing(30);
  }

  @include lg {
    padding-top: spacing(40);
    padding-bottom: spacing(40);
  }

  &__pizza {
    flex: 1;
  }

  &__payment-summary {
    width: 100%;

    @include xl {
      width: 391px;
    }
  }
}
</style>
