<script setup lang="ts">
import { computed } from 'vue'
import BaseLabel from '@/components/base/BaseLabel.vue'

const props = defineProps<{
  modelValue?: string
  disabled?: boolean
  label?: string
  errorMsg?: string
  showError?: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const zeroPad = (num: number) => {
  if (num < 10) {
    return '0' + num
  } else return num
}

const formatedDate = computed(() => {
  const date = new Date(`${props.modelValue}`)
  return date.getFullYear() + '-' + zeroPad(date.getMonth() + 1) + '-' + zeroPad(date.getDate())
})

const handleInput = (event: Event) => {
  const rawDate = (event.target as HTMLInputElement).value + 'T00:00:00'
  emit('update:modelValue', rawDate.toString())
}
</script>

<template>
  <BaseLabel :label="props.label">
    <input
      type="date"
      :id="props.label"
      :value="formatedDate"
      :disabled="props.disabled"
      :class="{ error: showError }"
      @input="handleInput"
    />
    <div class="error-msg" v-if="showError">{{ errorMsg }}</div>
  </BaseLabel>
</template>

<style scoped>
input {
  height: 2em;
  font-weight: 400;
}

input:disabled {
  color: var(--color-black);
  border: 2px solid transparent;
  background-color: transparent;
  font-weight: 500;
}

.error {
  border: 2px solid var(--color-error);
}

.error-msg {
  color: var(--color-error);
  font-size: var(--font-size-sm);
}
</style>
