<script setup lang="ts">
import type { BaseModalEmits, BaseModalProps } from '@/interfaces/modal'
import BaseModal from '../common/BaseModal.vue'
import { useOrderStore } from '@/stores/order'

const { isOpen } = defineProps<BaseModalProps>()
const emit = defineEmits<BaseModalEmits>()

const store = useOrderStore()

const handleClose = () => {
  emit('close')
  store.reset()
}
</script>

<template>
  <BaseModal :is-open="isOpen" @close="handleClose">
    <div class="order-confirm">
      <div class="order-confirm__content">
        <div class="order-confirm__icon">
          <img src="/images/icons/order.svg" alt="order" class="order-confirm__icon-image" />
        </div>
        <div>
          <h6 class="order-confirm__title">Order Success</h6>
          <p>Thank you, we have received your order successfully.</p>
        </div>
      </div>
      <button class="btn btn--primary order-confirm__close" @click="handleClose">Close</button>
    </div>
  </BaseModal>
</template>

<style lang="scss" scoped>
.order-confirm {
  width: 340px;

  &__content {
    margin-bottom: spacing(8);
    text-align: center;
    font-size: to-rem(20);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: spacing(3);
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3.5px solid $primary-color;
    background-color: rgba($color: $primary-color, $alpha: 0.3);
    width: 120px;
    height: 120px;
    margin-bottom: spacing(3);

    &-image {
      width: 60px;
      height: 68px;
      object-fit: contain;
    }
  }

  &__title {
    font-size: to-rem(24);
    font-weight: 600;
    margin-bottom: spacing(1);
  }

  &__close {
    width: 100%;
  }
}
</style>
