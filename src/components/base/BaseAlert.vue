<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'success' | 'error' | 'warning'
  }>(),
  {
    type: 'success'
  }
)
</script>

<template>
  <div :class="[props.type]" class="alert"><slot /></div>
</template>

<style scoped>
.alert {
  width: 100%;
  padding: var(--spacing-lg);
  color: var(--color-white);
  font-size: var(--font-size-sm);
}

.error {
  background-color: var(--color-error);
}

.success {
  background-color: var(--color-success);
}

.warning {
  background-color: var(--color-warning);
}
</style>
