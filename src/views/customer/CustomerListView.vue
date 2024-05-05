<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import router from '@/router'
import { useCustomerListStore } from '@/stores/customer/customerList.store'
import CustomerTable from '@/components/CustomerTable.vue'

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
const deleteCustomer = (id?: string) => {}
</script>

<template>
  <main>
    <header>
      <BaseButton @click="goCreate">Criar novo</BaseButton>
    </header>

    <CustomerTable
      :customer-list="customerListStore.list"
      @go-customer="goCustomer"
      @delete-customer="deleteCustomer"
    />
  </main>
</template>

<style scoped>
main {
  padding: 1em;
  width: 80vw;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

header {
  display: flex;
  flex-direction: row-reverse;
}
</style>
