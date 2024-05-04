<script setup lang="ts">
import BaseLabel from '@/components/BaseLabel.vue'

const props = defineProps<{
  modelValue?: string
  disabled?: boolean
  label?: string
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
      @input="emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
    />
  </BaseLabel>
</template>

<style scoped>
input {
  padding: 0.5em;
}
</style>
