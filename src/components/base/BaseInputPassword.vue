<script setup lang="ts">
import BaseLabel from '@/components/base/BaseLabel.vue'

const props = defineProps<{
  modelValue?: string
  disabled?: boolean
  label?: string
  errorMsg?: string
  showError?: boolean
}>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <BaseLabel :label="props.label">
    <input
      :id="props.label"
      type="password"
      :value="props.modelValue"
      :disabled="props.disabled"
      :class="{ error: showError }"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
    />
    <div class="error-msg" v-if="showError">{{ errorMsg }}</div>
  </BaseLabel>
</template>

<style scoped>
input {
  padding: var(--spacing-md);
}

.error {
  border: 2px solid var(--color-error);
}

.error-msg {
  color: var(--color-error);
  font-size: var(--font-size-sm);
}
</style>
