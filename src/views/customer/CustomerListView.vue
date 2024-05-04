<script setup lang="ts">
import router from '@/router'
import { useCustomerListStore } from '@/stores/customer/customerList.store'

const customerListStore = useCustomerListStore()

await customerListStore.get()

const goCustomer = (id?: string) => {
  router.push({
    name: 'customer',
    params: {
      id
    }
  })
}
const goCreate = () => {
  router.push({ name: 'customerCreate' })
}
const deleteCustomer = () => {}
</script>

<template>
  <main>
    <header>
      <button @click="goCreate">Criar novo</button>
    </header>
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
        <th><button @click="goCustomer(customer.clienteId)">Visualizar</button></th>
        <th><button @click="deleteCustomer()">Excluir</button></th>
      </tr>
    </table>
  </main>
</template>
