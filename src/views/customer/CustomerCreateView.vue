<script setup lang="ts">
import router from '@/router'
import { addCustomerService } from '@/services/customer/addCustomer.service'
import BaseButton from '@/components/base/BaseButton.vue'
import { reactive, ref } from 'vue'
import CustomerForm from '@/components/customer/CustomerForm.vue'
import { objectHasEmptyFields } from '@/utils/functions.utils'

const customer = reactive({
  cpf: '',
  nome: '',
  rg: '',
  dataExpedicao: '2018-02-10T00:00:00',
  orgaoExpedicao: '',
  uf: 'SP',
  dataNascimento: '1990-02-10T00:00:00',
  sexo: 'Masculino',
  estadoCivil: '',
  endereco: {
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
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
      <BaseButton @click="goBack" type="cancel"
        ><font-awesome-icon :icon="['fas', 'arrow-left']"
      /></BaseButton>

      <div class="container">
        <div v-if="hasEmptyFields" class="warning">
          Confira se todos os campos<br />
          estão preenchidos corretamente
        </div>
        <BaseButton @click="save">Salvar</BaseButton>
      </div>
    </header>

    <CustomerForm v-model="customer" :show-errors="hasEmptyFields" />
  </main>
</template>

<style scoped>
main {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  display: flex;
  gap: var(--spacing-md);
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
