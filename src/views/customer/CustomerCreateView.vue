<script setup lang="ts">
import router from '@/router'
import { addCustomerService } from '@/services/customer/addCustomer.service'
import SEX from '@/utils/constants/sex.constant'
import STATES from '@/utils/constants/states.constant'
import BaseInputText from '@/components/BaseInputText.vue'
import BaseInputDate from '@/components/BaseInputDate.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseButton from '@/components/BaseButton.vue'
import { reactive } from 'vue'

const customer = reactive({
  cpf: '',
  nome: '',
  rg: '',
  dataExpedicao: '02/03/2018 00:00:00',
  orgaoExpedicao: '',
  uf: '',
  dataNascimento: '02/03/1990 00:00:00',
  sexo: '',
  estadoCivil: '',
  endereco: {
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: ''
  }
})

const goBack = () => router.push({ name: 'customerList' })
const save = async () => {
  const { status } = await addCustomerService(customer)
  if (status == 200) {
    router.push({ name: 'customerList' })
  }
}

const states: [string, string][] = STATES.map((elem) => [elem, elem])
const sex: [string, string][] = SEX.map((elem) => [elem, elem])
</script>

<template>
  <main>
    <header>
      <BaseButton @click="goBack" type="cancel">Voltar</BaseButton>

      <BaseButton @click="save">Salvar</BaseButton>
    </header>

    <form>
      <BaseInputText v-model="customer.nome" label="Nome:" />

      <BaseInputText mask="###.###.###-##" v-model="customer.cpf" label="CPF:" />

      <BaseInputText mask="#.###.###" v-model="customer.rg" label="RG:" />

      <BaseInputDate v-model="customer.dataExpedicao" label="Data de expedição:" />

      <BaseInputText v-model="customer.orgaoExpedicao" label="Órgão de expedição:" />

      <BaseSelect v-model="customer.uf" :options="states" label="Estado de expedição:" />

      <BaseInputDate v-model="customer.dataNascimento" label="Data de nascimento:" />

      <BaseSelect v-model="customer.sexo" :options="sex" label="Sexo:" />

      <BaseInputText v-model="customer.estadoCivil" label="Estado Civil:" />

      <hr />

      <h2>Endereço</h2>

      <hr />

      <BaseInputText mask="#####-###" v-model="customer.endereco.cep" label="CEP:" />

      <BaseInputText v-model="customer.endereco.logradouro" label="Logradouro:" />

      <BaseInputText v-model="customer.endereco.numero" label="Número:" />

      <BaseInputText v-model="customer.endereco.complemento" label="Complemento:" />

      <BaseInputText v-model="customer.endereco.bairro" label="Bairro:" />

      <BaseInputText v-model="customer.endereco.cidade" label="Cidade:" />

      <BaseSelect v-model="customer.endereco.uf" :options="states" label="Estado:" />
    </form>
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

form {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.button-group {
  display: flex;
}

hr {
  border-top: 1px solid var(--color-light-gray);
  width: 100%;
}

h2 {
  font-weight: bold;
  text-align: center;
}
</style>
