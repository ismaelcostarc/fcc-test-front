<script setup lang="ts">
import router from '@/router'
import { useCustomerStore } from '@/stores/customer/customer.store'
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import BaseInputText from '@/components/BaseInputText.vue'
import BaseInputDate from '@/components/BaseInputDate.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseButton from '@/components/BaseButton.vue'
import STATES from '@/utils/constants/states.constant'
import SEX from '@/utils/constants/sex.constant'

const customerStore = useCustomerStore()
const { params } = useRoute()
const viewMode = ref(true)

await customerStore.get(`${params.id}`)

const customer = reactive({
  ...customerStore.customer,
  endereco: { ...customerStore.customer?.endereco }
})

const edit = () => (viewMode.value = false)
const cancel = () => (viewMode.value = true)
const remove = () => {}
const goBack = () => router.push({ name: 'customerList' })
const save = async () => {
  await customerStore.edit(customer)
  if (customerStore.statusCode == 200) {
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
    <form>
      <BaseInputText v-model="customer.nome" :disabled="viewMode" label="Nome:" />

      <BaseInputText
        mask="###.###.###-##"
        v-model="customer.cpf"
        :disabled="viewMode"
        label="CPF:"
      />

      <BaseInputText mask="#.###.###" v-model="customer.rg" :disabled="viewMode" label="RG:" />

      <BaseInputDate
        v-model="customer.dataExpedicao"
        :disabled="viewMode"
        label="Data de expedição:"
      />

      <BaseInputText
        v-model="customer.orgaoExpedicao"
        :disabled="viewMode"
        label="Órgão de expedição:"
      />

      <BaseSelect
        v-model="customer.uf"
        :disabled="viewMode"
        :options="states"
        label="Estado de expedição:"
      />

      <BaseInputDate
        v-model="customer.dataNascimento"
        :disabled="viewMode"
        label="Data de nascimento:"
      />

      <BaseSelect v-model="customer.sexo" :disabled="viewMode" :options="sex" label="Sexo:" />

      <BaseInputText v-model="customer.estadoCivil" :disabled="viewMode" label="Estado Civil:" />

      <hr />

      <h2>Endereço</h2>

      <hr />

      <BaseInputText
        mask="#####-###"
        v-model="customer.endereco.cep"
        :disabled="viewMode"
        label="CEP:"
      />

      <BaseInputText
        v-model="customer.endereco.logradouro"
        :disabled="viewMode"
        label="Logradouro:"
      />

      <BaseInputText v-model="customer.endereco.numero" :disabled="viewMode" label="Número:" />

      <BaseInputText
        v-model="customer.endereco.complemento"
        :disabled="viewMode"
        label="Complemento:"
      />

      <BaseInputText v-model="customer.endereco.bairro" :disabled="viewMode" label="Bairro:" />

      <BaseInputText v-model="customer.endereco.cidade" :disabled="viewMode" label="Cidade:" />

      <BaseSelect
        v-model="customer.endereco.uf"
        :disabled="viewMode"
        :options="states"
        label="Estado:"
      />
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
