<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseDropdown from './BaseDropdown.vue'

const props = defineProps<{
  headers: string[]
  data?: (string | undefined)[][]
  actions?: [string, string][]
}>()

const emit = defineEmits(['action'])
</script>

<template>
  <table>
    <tr>
      <th v-for="header in props.headers" :key="header">{{ header }}</th>
      <th></th>
    </tr>

    <tr v-for="row in props.data" :key="row[0]">
      <template v-for="(data, index) in row" :key="data">
        <td v-if="index !== row.length - 1">{{ data }}</td>
      </template>

      <td class="action-cell">
        <BaseDropdown>
          <template #label>
            <BaseButton size="full" type="cancel"> Ações </BaseButton>
          </template>

          <template #content>
            <BaseButton
              v-for="action in props.actions"
              :key="action[0]"
              type="link"
              size="full"
              @click="emit('action', action[1], row[row.length - 1])"
              >{{ action[0] }}</BaseButton
            >
          </template>
        </BaseDropdown>
      </td>
    </tr>
  </table>
</template>

<style scoped>
table {
  width: 100%;
}

td {
  border: 1px solid var(--color-border);
  padding-left: 0.75em;
}

.action-cell {
  width: 10%;
  border: 0;
  padding: 0;
}

th {
  padding: 0.75em;
  font-weight: bold;
  background-color: var(--color-light-gray);
}
</style>
