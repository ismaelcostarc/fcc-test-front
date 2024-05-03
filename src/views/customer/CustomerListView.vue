<script setup lang="ts">
import router from '@/router'
import { useCustomerListStore } from '@/stores/customer/customerList.store'

const customerListStore = useCustomerListStore()

await customerListStore.get()

const goToCustomer = (id?: string) => {
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
        <th>CPF</th>
        <th>Nome</th>
        <th></th>
        <th></th>
      </tr>

      <tr v-for="customer in customerListStore.list" :key="customer.clienteId">
        <td>{{ customer.cpf }}</td>
        <td>{{ customer.nome }}</td>
        <th><button @click="goToCustomer(customer.clienteId)">Visualizar</button></th>
        <th><button @click="deleteCustomer()">Excluir</button></th>
      </tr>
    </table>
  </main>
</template>
