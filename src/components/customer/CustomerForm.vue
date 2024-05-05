<script setup lang="ts">
import BaseInputText from '@/components/base/BaseInputText.vue'
import BaseInputDate from '@/components/base/BaseInputDate.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import type { Customer } from '@/types/customer.type'
import STATES from '@/utils/constants/states.constant'
import SEX from '@/utils/constants/sex.constant'

const customer = defineModel<Customer>()

const props = defineProps<{
  viewMode?: boolean
}>()

const states: [string, string][] = STATES.map((elem) => [elem, elem])
const sex: [string, string][] = SEX.map((elem) => [elem, elem])
</script>

<template>
  <BaseInputText v-model="customer!.nome" :disabled="props.viewMode" label="Nome:" />

  <BaseInputText
    mask="###.###.###-##"
    v-model="customer!.cpf"
    :disabled="props.viewMode"
    label="CPF:"
  />

  <BaseInputText mask="#.###.###" v-model="customer!.rg" :disabled="props.viewMode" label="RG:" />

  <BaseInputDate
    v-model="customer!.dataExpedicao"
    :disabled="props.viewMode"
    label="Data de expedição:"
  />

  <BaseInputText
    v-model="customer!.orgaoExpedicao"
    :disabled="props.viewMode"
    label="Órgão de expedição:"
  />

  <BaseSelect
    v-model="customer!.uf"
    :disabled="props.viewMode"
    :options="states"
    label="Estado de expedição:"
  />

  <BaseInputDate
    v-model="customer!.dataNascimento"
    :disabled="props.viewMode"
    label="Data de nascimento:"
  />

  <BaseSelect v-model="customer!.sexo" :disabled="props.viewMode" :options="sex" label="Sexo:" />

  <BaseInputText v-model="customer!.estadoCivil" :disabled="props.viewMode" label="Estado Civil:" />

  <hr />

  <h2>Endereço</h2>

  <hr />

  <BaseInputText
    mask="#####-###"
    v-model="customer!.endereco!.cep"
    :disabled="props.viewMode"
    label="CEP:"
  />

  <BaseInputText
    v-model="customer!.endereco!.logradouro"
    :disabled="props.viewMode"
    label="Logradouro:"
  />

  <BaseInputText v-model="customer!.endereco!.numero" :disabled="props.viewMode" label="Número:" />

  <BaseInputText
    v-model="customer!.endereco!.complemento"
    :disabled="props.viewMode"
    label="Complemento:"
  />

  <BaseInputText v-model="customer!.endereco!.bairro" :disabled="props.viewMode" label="Bairro:" />

  <BaseInputText v-model="customer!.endereco!.cidade" :disabled="props.viewMode" label="Cidade:" />

  <BaseSelect
    v-model="customer!.endereco!.uf"
    :disabled="props.viewMode"
    :options="states"
    label="Estado:"
  />
</template>

<style scoped>
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
