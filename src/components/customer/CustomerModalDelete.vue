<script setup lang="ts">
import BaseModal from '@/components/base/BaseModal.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const emit = defineEmits(['delete', 'cancel'])
</script>

<template>
  <BaseModal>
    <div class="modal__container">
      <div class="modal__title">Deseja excluir o cliente?</div>
      <div class="modal__group-button">
        <BaseButton type="delete" size="full" @click="emit('delete')">Excluir</BaseButton>
        <BaseButton type="cancel" size="full" @click="emit('cancel')">Cancelar</BaseButton>
      </div>
    </div>
  </BaseModal>
</template>

<style scoped>
.modal__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4em;
}

.modal__title {
  font-size: var(--font-size-lg);
  font-weight: 500;
  text-align: center;
}

.modal__group-button {
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  align-items: center;
}
</style>
