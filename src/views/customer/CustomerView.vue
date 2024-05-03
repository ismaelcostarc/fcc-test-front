<script setup lang="ts">
import { useCustomerStore } from '@/stores/customer.store'

const customerStore = useCustomerStore()

await customerStore.updateList()

console.log('a')
console.log(customerStore.list)
</script>

<template>
  <main>
    <header></header>
    <table></table>
  </main>
</template>
