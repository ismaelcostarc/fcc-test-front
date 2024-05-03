<script setup lang="ts">
import { useCustomerStore } from '@/stores/customer.store'

const customerStore = useCustomerStore()

await customerStore.updateList()

console.log('a')
console.log(customerStore.list)

const goToCustomer = (id: string) => {}
const deleteCustomer = () => {}
</script>

<template>
  <main>
    <header></header>
    <table>
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th></th>
        <th></th>
      </tr>

      <tr v-for="customer in customerStore.list" :key="customer.clienteId">
        <td>{{ customer.clienteId }}</td>
        <td>{{ customer.nome }}</td>
        <th><button @click="goToCustomer(customer.clienteId)">Visualizar</button></th>
        <th><button @click="deleteCustomer()">Excluir</button></th>
      </tr>
    </table>
  </main>
</template>
