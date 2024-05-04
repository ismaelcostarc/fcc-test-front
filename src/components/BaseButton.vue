<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'default' | 'cancel'
  }>(),
  {
    type: 'default'
  }
)
const emit = defineEmits(['click'])
</script>

<template>
  <button @click.stop="emit('click')" :class="[props.type]"><slot /></button>
</template>

<style scoped>
button {
  color: var(--color-white);
  border: 0;
  padding: 0.75em 1.3em;
  cursor: pointer;
}

.default {
  background-color: var(--color-secondary);
}

.cancel {
  background-color: var(--color-gray);
}
</style>
