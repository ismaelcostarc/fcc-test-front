<script setup lang="ts">
import { computed } from 'vue'
import BaseLabel from '@/components/BaseLabel.vue'

const props = defineProps<{
  modelValue?: string
  disabled?: boolean
  label?: string
}>()
const emit = defineEmits(['update:modelValue'])

const formatedDate = computed(() => {
  const date = new Date(`${props.modelValue}`)
  return date.toLocaleDateString().split('/').reverse().join('-')
})

const handleInput = (event: Event) => {
  const rawDate = new Date((event.target as HTMLSelectElement).value)
  console.log(rawDate)
  emit('update:modelValue', rawDate)
}
</script>

<template>
  <BaseLabel :label="props.label">
    <input
      type="date"
      :id="props.label"
      :value="formatedDate"
      :disabled="props.disabled"
      @input="handleInput"
    />
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
</style>
