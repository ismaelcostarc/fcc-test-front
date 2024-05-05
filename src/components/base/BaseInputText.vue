<script setup lang="ts">
import { reactive } from 'vue'
import { vMaska } from 'maska'
import BaseLabel from '@/components/base/BaseLabel.vue'

const props = defineProps<{
  mask?: string
  modelValue?: string
  disabled?: boolean
  label?: string
  errorMsg?: string
  showError?: boolean
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
      :class="{ error: showError }"
      @input="emit('update:modelValue', boundObject.unmasked)"
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
