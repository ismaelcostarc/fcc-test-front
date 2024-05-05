<script setup lang="ts">
const props = defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="container">
    <label :for="props.label" v-if="props.label">{{ props.label }}</label>
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 0.5em;
  align-items: center;
}

label {
  font-size: var(--font-size-md);
}
</style>
