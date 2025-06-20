<script setup lang="ts">
import { watch } from 'vue'
import type { BaseModalEmits, BaseModalProps } from '@/interfaces/modal'

const { isOpen } = defineProps<BaseModalProps>()
const emit = defineEmits<BaseModalEmits>()

watch(
  () => isOpen,
  (_isOpen) => {
    // Used for add class `some-modal-opened` to hide scrollbar in body
    if (_isOpen) {
      const isExist = document.body.classList.contains('some-modal-opened')
      if (!isExist) {
        // Add class if doesn't exist
        document.body.classList.add('some-modal-opened')
      }
    } else {
      const openedModals = document.getElementsByClassName('modal--opened')
      // Remove class if no modals opened
      if (openedModals.length <= 1) {
        document.body.classList.remove('some-modal-opened')
      }
    }
  },
  { immediate: true },
)
</script>

<template>
  <Teleport to="body">
    <div class="modal" :class="{ 'modal--opened': isOpen }">
      <TransitionGroup name="modal__overlay-transition" tag="div">
        <div v-if="isOpen" class="modal__overlay" @click="emit('close')" />
      </TransitionGroup>
      <TransitionGroup name="modal__body-transition" tag="div">
        <div v-if="isOpen" class="modal__body">
          <slot />
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal {
  &__overlay {
    position: fixed;
    inset: 0;
    background: rgba($color: #000000, $alpha: 0.5);
    z-index: $modal-overlay-z-index;

    &-transition {
      &-enter-active,
      &-leave-active {
        transition: all 200ms ease;
      }
      &-enter-from,
      &-leave-to {
        opacity: 0;
      }
    }
  }

  &__body {
    position: fixed;
    background-color: $main-background;
    z-index: $modal-overlay-z-index;
    padding: spacing(8);
    border-radius: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &-transition {
      &-enter-active,
      &-leave-active {
        transition: all 200ms ease;
      }
      &-enter-from,
      &-leave-to {
        opacity: 0;
        transform: translate(-50%, -40%);
      }
    }
  }
}
</style>
