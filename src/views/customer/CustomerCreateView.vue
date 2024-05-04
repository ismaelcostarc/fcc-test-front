<script setup lang="ts">
import router from '@/router'
import { addCustomerService } from '@/services/customer/addCustomer.service'
import { ref } from 'vue'

const customer = ref({
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
  const { status } = await addCustomerService(customer.value)
  if (status == 200) {
    router.push({ name: 'customerList' })
  }
}
</script>

<template>
  <main>
    <header>
      <button @click="goBack">Voltar</button>
    </header>
    <form @submit.prevent="save">
      <label
        >Nome:
        <input type="text" v-model="customer.nome" />
      </label>

      <label
        >CPF:
        <input type="text" v-model="customer.cpf" />
      </label>

      <label
        >RG:
        <input type="text" v-model="customer.rg" />
      </label>

      <label
        >Data de expedição:
        <input type="text" v-model="customer.dataExpedicao" />
      </label>

      <label
        >Órgão de expedição:
        <input type="text" v-model="customer.orgaoExpedicao" />
      </label>

      <label
        >Estado de expedição:
        <input type="text" v-model="customer.uf" />
      </label>

      <label
        >Data de nascimento:
        <input type="text" v-model="customer.dataNascimento" />
      </label>

      <label
        >Sexo:
        <input type="text" v-model="customer.sexo" />
      </label>

      <label
        >Estado civil:
        <input type="text" v-model="customer.estadoCivil" />
      </label>

      <h2>Endereço</h2>

      <label
        >CEP:
        <input type="text" v-model="customer.endereco.cep" />
      </label>

      <label
        >Logradouro:
        <input type="text" v-model="customer.endereco.logradouro" />
      </label>

      <label
        >Número:
        <input type="text" v-model="customer.endereco.numero" />
      </label>

      <label
        >Complemento:
        <input type="text" v-model="customer.endereco.complemento" />
      </label>

      <label
        >Bairro:
        <input type="text" v-model="customer.endereco.bairro" />
      </label>

      <label
        >Cidade:
        <input type="text" v-model="customer.endereco.cidade" />
      </label>

      <label
        >Estado:
        <input type="text" v-model="customer.endereco.uf" />
      </label>

      <button type="submit">Salvar</button>
    </form>
  </main>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 2p;
  width: 500px;
  padding: 100px;
  justify-content: center;
  align-items: center;
}
</style>
