<script setup lang="ts">
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

    <tr v-if="props.data?.length === 0">
      <td colspan="3">
        <div class="empty-table">Tabela vazia</div>
      </td>
    </tr>

    <tr v-for="row in props.data" :key="row[0]">
      <template v-for="(data, index) in row" :key="data">
        <td v-if="index !== row.length - 1">{{ data }}</td>
      </template>

      <td class="action-cell">
        <BaseDropdown>
          <template #label>
            <BaseButton size="full" type="cancel">
              <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </BaseButton>
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
  border: 1px solid var(--color-border);
  padding: 0.75em;
  font-weight: bold;
  background-color: var(--color-light-gray);
}

.empty-table {
  padding: 2em;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-gray);
}
</style>
