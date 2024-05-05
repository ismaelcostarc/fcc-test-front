<script setup lang="ts">
import type { Customer } from '@/types/customer.type'
import BaseTable from '@/components/BaseTable.vue'
import { computed } from 'vue'

const props = defineProps<{
  customerList?: Customer[]
}>()

const emit = defineEmits(['goCustomer', 'deleteCustomer'])

const headers = ['CPF', 'Nome']
const data = computed(() =>
  props.customerList?.map((elem) => {
    return [elem.cpf, elem.nome, elem.clienteId]
  })
)
const actions: [string, string][] = [
  ['Visualizar', 'view-item'],
  ['Excluir', 'delete-item']
]

const handleAction = (action: string, id: string) => {
  if (action === 'view-item') emit('goCustomer', id)
  if (action === 'delete-item') emit('deleteCustomer', id)
}
</script>

<template>
  <BaseTable :headers="headers" :data="data" :actions="actions" @action="handleAction"></BaseTable>
</template>
