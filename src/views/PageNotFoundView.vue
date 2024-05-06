<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import router from '@/router'

const goHome = () => {
  router.push({ name: 'customerList' })
}
</script>
<template>
  <div class="container">
    <div class="message">Essa página não foi encontrada :(</div>
    <BaseButton @click="goHome">Voltar ao início</BaseButton>
  </div>
</template>
<style scoped>
.message {
  font-size: var(--font-size-xxl);
  font-weight: 100;
}

.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxl);
  padding: var(--spacing-xxl);
}
</style>
