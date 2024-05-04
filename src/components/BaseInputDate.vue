<script setup lang="ts">
import { computed } from 'vue'
import BaseLabel from '@/components/BaseLabel.vue'

const props = defineProps<{
  modelValue?: string
  disabled?: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const formatedDate = computed(() => {
  const date = props.modelValue ? new Date(props.modelValue) : Date.now
  return date.toString().replace(/T.*/, '').split('-').join('-')
})

const handleInput = (event: Event) => {
  const rawDate = new Date((event.target as HTMLSelectElement).value)
  console.log(rawDate)
  emit('update:modelValue', rawDate)
}
</script>

<template>
  <input type="date" :value="formatedDate" :disabled="props.disabled" @input="handleInput" />
</template>
