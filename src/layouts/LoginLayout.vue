<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
</script>
<template>
  <div class="container">
    <BaseCard><slot /></BaseCard>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
}
</style>
