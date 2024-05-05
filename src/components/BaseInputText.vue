<script setup lang="ts">
import { reactive } from 'vue'
import { vMaska } from 'maska'
import BaseLabel from '@/components/BaseLabel.vue'

const props = defineProps<{
  mask?: string
  modelValue?: string
  disabled?: boolean
  label?: string
}>()
const emit = defineEmits(['update:modelValue'])

const boundObject = reactive({
  masked: '',
  unmasked: '',
  completed: false
})
</script>

<template>
  <BaseLabel :label="props.label">
    <input
      :id="label"
      type="text"
      v-maska="boundObject"
      :data-maska="props.mask"
      :value="props.modelValue"
      :disabled="props.disabled"
      @input="emit('update:modelValue', boundObject.unmasked)"
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
