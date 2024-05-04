<script setup lang="ts">
import { reactive } from 'vue'
import { vMaska } from 'maska'

const props = defineProps<{
  mask?: string
  modelValue?: string
  disabled?: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const boundObject = reactive({
  masked: '',
  unmasked: '',
  completed: false
})
</script>

<template>
  <input
    type="text"
    v-maska="boundObject"
    :data-maska="props.mask"
    :value="props.modelValue"
    :disabled="props.disabled"
    @input="emit('update:modelValue', boundObject.unmasked)"
  />
</template>
