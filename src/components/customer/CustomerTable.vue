<script setup lang="ts">
import type { Customer } from '@/types/customer.type'
import BaseTable from '@/components/base/BaseTable.vue'
import { computed } from 'vue'
import { formatCPF } from '@/utils/functions.utils'

const props = defineProps<{
  customerList?: Customer[]
}>()

const emit = defineEmits(['goCustomer', 'deleteCustomer'])

const headers = ['CPF', 'Nome']
const data = computed(() =>
  props.customerList?.map((elem) => {
    return [formatCPF(elem.cpf ?? ''), elem.nome, elem.clienteId]
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
