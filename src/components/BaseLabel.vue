<script setup lang="ts">
const props = defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="container">
    <label :for="props.label">{{ props.label }}</label>
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

label {
  font-size: var(--font-size-md);
}
</style>
