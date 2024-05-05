<script setup lang="ts">
import BaseInputText from '@/components/base/BaseInputText.vue'
import BaseInputDate from '@/components/base/BaseInputDate.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import type { Customer } from '@/types/customer.type'
import { ref, watch, withDefaults } from 'vue'
import { SEX, STATES } from '@/utils/constants.utils'
import { testCPF } from '@/utils/functions.utils'

const customer = defineModel<Customer>()

const props = withDefaults(
  defineProps<{
    viewMode?: boolean
    showErrors?: boolean
  }>(),
  {
    viewMode: false
  }
)

const states: [string, string][] = STATES.map((elem) => [elem, elem])
const sex: [string, string][] = SEX.map((elem) => [elem, elem])

const errorMsg = 'Campo obrigatório'

const cpfIsValid = ref(true)

watch(
  () => customer.value?.cpf,
  (value) => {
    cpfIsValid.value = testCPF(value ?? '')
  }
)
</script>

<template>
  <BaseInputText
    v-model="customer!.nome"
    :disabled="props.viewMode"
    label="Nome:"
    :show-error="showErrors && !customer?.nome"
    :error-msg="errorMsg"
  />

  <BaseInputText
    mask="###.###.###-##"
    v-model="customer!.cpf"
    :disabled="props.viewMode"
    :show-error="(showErrors && !customer?.cpf) || !cpfIsValid"
    label="CPF:"
    :error-msg="cpfIsValid ? errorMsg : 'Insira um cpf válido'"
  />

  <BaseInputText
    mask="#.###.###"
    v-model="customer!.rg"
    :disabled="props.viewMode"
    label="RG:"
    :show-error="showErrors && !customer?.rg"
    :error-msg="errorMsg"
  />

  <BaseInputDate
    v-model="customer!.dataExpedicao"
    :disabled="props.viewMode"
    label="Data de expedição:"
    :show-error="showErrors && !customer?.dataExpedicao"
    :error-msg="errorMsg"
  />

  <BaseInputText
    v-model="customer!.orgaoExpedicao"
    :disabled="props.viewMode"
    :show-error="showErrors && !customer?.orgaoExpedicao"
    label="Órgão de expedição:"
    :error-msg="errorMsg"
  />

  <BaseSelect
    v-model="customer!.uf"
    :disabled="props.viewMode"
    :options="states"
    :show-error="showErrors && !customer?.uf"
    label="Estado de expedição:"
    :error-msg="errorMsg"
  />

  <BaseInputDate
    v-model="customer!.dataNascimento"
    :disabled="props.viewMode"
    label="Data de nascimento:"
    :show-error="showErrors && !customer?.dataNascimento"
    :error-msg="errorMsg"
  />

  <BaseSelect
    v-model="customer!.sexo"
    :disabled="props.viewMode"
    :options="sex"
    label="Sexo:"
    :show-error="showErrors && !customer?.sexo"
    :error-msg="errorMsg"
  />

  <BaseInputText
    v-model="customer!.estadoCivil"
    :disabled="props.viewMode"
    label="Estado Civil:"
    :show-error="showErrors && !customer?.estadoCivil"
    :error-msg="errorMsg"
  />

  <hr />

  <h2>Endereço</h2>

  <hr />

  <BaseInputText
    mask="#####-###"
    v-model="customer!.endereco!.cep"
    :disabled="props.viewMode"
    label="CEP:"
    :show-error="showErrors && !customer?.endereco?.cep"
    :error-msg="errorMsg"
  />

  <BaseInputText
    v-model="customer!.endereco!.logradouro"
    :disabled="props.viewMode"
    label="Logradouro:"
    :show-error="showErrors && !customer?.endereco?.logradouro"
    :error-msg="errorMsg"
  />

  <BaseInputText
    v-model="customer!.endereco!.numero"
    :disabled="props.viewMode"
    label="Número:"
    :show-error="showErrors && !customer?.endereco?.numero"
    :error-msg="errorMsg"
  />

  <BaseInputText
    v-model="customer!.endereco!.complemento"
    :disabled="props.viewMode"
    label="Complemento:"
    :show-error="showErrors && !customer?.endereco?.complemento"
    :error-msg="errorMsg"
  />

  <BaseInputText
    v-model="customer!.endereco!.bairro"
    :disabled="props.viewMode"
    label="Bairro:"
    :show-error="showErrors && !customer?.endereco?.bairro"
    :error-msg="errorMsg"
  />

  <BaseInputText
    v-model="customer!.endereco!.cidade"
    :disabled="props.viewMode"
    label="Cidade:"
    :show-error="showErrors && !customer?.endereco?.cidade"
    :error-msg="errorMsg"
  />

  <BaseSelect
    v-model="customer!.endereco!.uf"
    :disabled="props.viewMode"
    :options="states"
    label="Estado:"
    :show-error="showErrors && !customer?.endereco?.uf"
    :error-msg="errorMsg"
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
