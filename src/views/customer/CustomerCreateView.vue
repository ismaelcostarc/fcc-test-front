<script setup lang="ts">
import router from '@/router'
import { addCustomerService } from '@/services/customer/addCustomer.service'
import BaseButton from '@/components/base/BaseButton.vue'
import { reactive, ref } from 'vue'
import CustomerForm from '@/components/customer/CustomerForm.vue'
import { objectHasEmptyFields } from '@/utils/functions.utils'

const customer = reactive({
  cpf: '',
  nome: 'Nome',
  rg: '',
  dataExpedicao: '2018-02-10T00:00:00',
  orgaoExpedicao: 'SSP',
  uf: 'PI',
  dataNascimento: '1990-02-10T00:00:00',
  sexo: 'Masculino',
  estadoCivil: 'Solteiro',
  endereco: {
    cep: '77021-702',
    logradouro: 'Rua',
    numero: '1',
    complemento: '2',
    bairro: 'Bairro tal',
    cidade: 'Cidade tal',
    uf: 'SP'
  }
})

const goBack = () => router.push({ name: 'customerList' })

const hasEmptyFields = ref(false)
const save = async () => {
  if (objectHasEmptyFields(customer) || objectHasEmptyFields(customer.endereco)) {
    hasEmptyFields.value = true
    return
  }

  const { status } = await addCustomerService(customer)
  if (status == 200) {
    router.push({ name: 'customerList' })
  }
}
</script>

<template>
  <main>
    <header>
      <BaseButton @click="goBack" type="cancel">Voltar</BaseButton>

      <BaseButton @click="save">Salvar</BaseButton>
    </header>

    <CustomerForm v-model="customer" :show-errors="hasEmptyFields" />
  </main>
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
