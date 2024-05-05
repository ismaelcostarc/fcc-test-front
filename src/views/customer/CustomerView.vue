<script setup lang="ts">
import router from '@/router'
import { useCustomerStore } from '@/stores/customer/customer.store'
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

import BaseButton from '@/components/base/BaseButton.vue'
import CustomerModalDelete from '@/components/customer/CustomerModalDelete.vue'
import CustomerForm from '@/components/customer/CustomerForm.vue'

import { useModal } from '@/composables/modal.composable'

const customerStore = useCustomerStore()
const { params } = useRoute()
const modal = useModal()

const viewMode = ref(true)

await customerStore.get(`${params.id}`)

const customer = reactive({
  ...customerStore.customer,
  endereco: { ...customerStore.customer?.endereco }
})

const edit = () => (viewMode.value = false)
const cancel = () => (viewMode.value = true)
const remove = () => (modal.modalIsVisible.value = true)
const goBack = () => router.push({ name: 'customerList' })
const save = async () => {
  await customerStore.edit(customer)
  if (customerStore.statusCode == 200) {
    router.push({ name: 'customerList' })
  }
}

const deleteCustomer = async () => {
  modal.closeModal()
  await customerStore.remove()
  if (customerStore.statusCode == 200) {
    router.push({
      name: 'customerList'
    })
  }
}
</script>

<template>
  <main>
    <header>
      <BaseButton @click="goBack" type="cancel">Voltar</BaseButton>

      <template v-if="viewMode">
        <div class="button-group">
          <BaseButton @click="edit" type="link">Editar</BaseButton>
          <BaseButton @click="remove" type="delete">Apagar</BaseButton>
        </div>
      </template>

      <template v-else>
        <div class="button-group">
          <BaseButton @click="save">Salvar</BaseButton>
          <BaseButton @click="cancel" type="cancel">Cancelar</BaseButton>
        </div>
      </template>
    </header>
    <CustomerForm v-model="customer" :view-mode="viewMode" />
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
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  min-width: 600px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
