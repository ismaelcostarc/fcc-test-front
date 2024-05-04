<script setup lang="ts">
const props = defineProps<{
  modelValue?: string
  disabled?: boolean
  options?: [string, string][]
}>()
const emit = defineEmits(['update:modelValue'])

const onChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLSelectElement).value)
}
</script>

<template>
  <select :disabled="props.disabled" @change="onChange" :value="props.modelValue">
    <option v-for="item in options" :key="item[0]" :value="item[1]">{{ item[0] }}</option>
  </select>
</template>
