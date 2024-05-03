<script setup lang="ts">
import router from '@/router'
import { useCustomerStore } from '@/stores/customer.store'

const customerStore = useCustomerStore()

await customerStore.updateList()

const goToCustomer = (id: string) => {
  router.push({
    name: 'customer',
    params: {
      id
    }
  })
}
const deleteCustomer = () => {}
</script>

<template>
  <main>
    <header></header>
    <table>
      <tr>
        <th>cpf</th>
        <th>Nome</th>
        <th></th>
        <th></th>
      </tr>

      <tr v-for="customer in customerStore.list" :key="customer.clienteId">
        <td>{{ customer.cpf }}</td>
        <td>{{ customer.nome }}</td>
        <th><button @click="goToCustomer(customer.clienteId)">Visualizar</button></th>
        <th><button @click="deleteCustomer()">Excluir</button></th>
      </tr>
    </table>
  </main>
</template>
