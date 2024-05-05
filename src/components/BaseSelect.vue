<script setup lang="ts">
import BaseLabel from './BaseLabel.vue'

const props = defineProps<{
  modelValue?: string
  disabled?: boolean
  options?: [string, string][]
  label?: string
}>()
const emit = defineEmits(['update:modelValue'])

const onChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLSelectElement).value)
}
</script>

<template>
  <BaseLabel :label="props.label">
    <select :disabled="props.disabled" @change="onChange" :value="props.modelValue">
      <option v-for="item in options" :key="item[0]" :value="item[1]">{{ item[0] }}</option>
    </select>
  </BaseLabel>
</template>

<style scoped>
select {
  padding: 0.5em;
}
</style>
