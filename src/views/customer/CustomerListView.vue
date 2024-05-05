<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import router from '@/router'
import { useCustomerListStore } from '@/stores/customer/customerList.store'
import CustomerTable from '@/components/customer/CustomerTable.vue'
import CustomerModalDelete from '@/components/customer/CustomerModalDelete.vue'
import { useModal } from '@/composables/modal.composable'
import { ref } from 'vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import { FilterOptions } from '@/utils/enums.utils'
import BaseInputText from '@/components/base/BaseInputText.vue'

const modal = useModal()
const customerListStore = useCustomerListStore()

const customerToDelete = ref()

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
const showDeleteModal = (id?: string) => {
  customerToDelete.value = id
  modal.showModal()
}

const deleteCustomer = () => {
  modal.closeModal()
  customerListStore.remove(customerToDelete.value)
}

const options: [string, string][] = [
  ['Nome', FilterOptions.NAME],
  ['CPF', FilterOptions.CPF]
]
</script>

<template>
  <main>
    <header>
      <BaseButton @click="goCreate">Criar novo</BaseButton>
    </header>

    <div class="filter__container">
      <div>Filtrar por</div>
      <BaseSelect :options="options" v-model="customerListStore.filterBy" />

      <BaseInputText
        v-model="customerListStore.searchFor"
        size="full"
        mask="###.###.###-##"
        v-if="customerListStore.filterBy === FilterOptions.CPF"
      />

      <BaseInputText v-model="customerListStore.searchFor" size="full" v-else />
    </div>

    <CustomerTable
      :customer-list="customerListStore.list"
      @go-customer="goCustomer"
      @delete-customer="showDeleteModal"
    />
  </main>

  <CustomerModalDelete
    v-if="modal.modalIsVisible.value"
    @cancel="modal.closeModal"
    @delete="deleteCustomer"
  />
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

.filter__container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5em;
}

.filter__container > div {
  font-size: var(--font-size-sm);
}
</style>
