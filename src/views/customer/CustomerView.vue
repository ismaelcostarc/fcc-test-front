<script setup lang="ts">
import router from '@/router'
import { useCustomerStore } from '@/stores/customer/customer.store'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import BaseButton from '@/components/base/BaseButton.vue'
import CustomerModalDelete from '@/components/customer/CustomerModalDelete.vue'
import CustomerForm from '@/components/customer/CustomerForm.vue'

import { useModal } from '@/composables/modal.composable'
import { objectHasEmptyFields } from '@/utils/functions.utils'

const customerStore = useCustomerStore()
const { params } = useRoute()
const modal = useModal()

const viewMode = ref(true)

await customerStore.get(`${params.id}`)

const customer = ref({
  ...customerStore.customer,
  endereco: { ...customerStore.customer?.endereco }
})

const hasEmptyFields = ref(false)

const edit = () => (viewMode.value = false)
const cancel = async () => {
  await customerStore.get(`${params.id}`)

  customer.value = {
    ...customerStore.customer,
    endereco: { ...customerStore.customer?.endereco }
  }

  viewMode.value = true
}
const remove = () => (modal.modalIsVisible.value = true)
const goBack = () => router.push({ name: 'customerList' })
const save = async () => {
  if (objectHasEmptyFields(customer) || objectHasEmptyFields(customer.value.endereco)) {
    hasEmptyFields.value = true
    return
  }

  await customerStore.edit(customer.value)
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
      <BaseButton @click="goBack" type="cancel"
        ><font-awesome-icon :icon="['fas', 'arrow-left']"
      /></BaseButton>

      <template v-if="viewMode">
        <div class="button-group">
          <BaseButton @click="edit" type="link">Editar</BaseButton>
          <BaseButton @click="remove" type="delete"
            ><font-awesome-icon :icon="['fas', 'trash-can']"
          /></BaseButton>
        </div>
      </template>

      <template v-else>
        <div class="button-group">
          <div class="container">
            <div v-if="hasEmptyFields" class="warning">
              Confira se todos os campos<br />
              estão preenchidos corretamente
            </div>
            <BaseButton @click="save"
              >Salvar <font-awesome-icon :icon="['fas', 'floppy-disk']"
            /></BaseButton>
          </div>
          <BaseButton @click="cancel" type="cancel">Cancelar</BaseButton>
        </div>
      </template>
    </header>
    <CustomerForm v-model="customer" :view-mode="viewMode" :show-errors="hasEmptyFields" />
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
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-group {
  display: flex;
}

.container {
  display: flex;
  gap: 0.5em;
  align-items: center;
}

.warning {
  width: 100%;
  font-size: var(--font-size-sm);
  color: var(--color-cancel);
}

@media screen and (min-width: 768px) {
  main {
    min-width: 600px;
  }
}
</style>
