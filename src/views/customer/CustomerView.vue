<script setup lang="ts">
import router from '@/router'
import { useCustomerStore } from '@/stores/customer.store'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const customerStore = useCustomerStore()
const route = useRoute()

const res = await customerStore.getById(`${route.params.id}`)
const address = { ...res?.endereco }
const customer = { ...res, endereco: address }

const viewMode = ref(true)

const edit = () => (viewMode.value = false)
const cancel = () => (viewMode.value = true)
const remove = () => {}
const update = () => {}
const goBack = () => router.push({ name: 'customerList' })
</script>

<template>
  <main>
    <header>
      <button @click="goBack">Voltar</button>

      <div v-if="viewMode">
        <div>{{ customer.nome }}</div>

        <button @click="edit">Editar</button>
        <button @click="remove">Apagar</button>
      </div>

      <div v-else>
        <label
          >Nome:
          <input type="text" v-model="customer.nome" :disabled="viewMode" />
        </label>
        <button @click="update">Salvar</button>
        <button @click="cancel">Cancelar</button>
      </div>
    </header>
    <form>
      <label
        >Nome:
        <input type="text" v-model="customer.nome" :disabled="viewMode" />
      </label>

      <label
        >CPF:
        <input type="text" v-model="customer.cpf" :disabled="viewMode" />
      </label>

      <label
        >RG:
        <input type="text" v-model="customer.rg" :disabled="viewMode" />
      </label>

      <label
        >Data de expedição:
        <input type="text" v-model="customer.dataExpedicao" :disabled="viewMode" />
      </label>

      <label
        >Órgão de expedição:
        <input type="text" v-model="customer.orgaoExpedicao" :disabled="viewMode" />
      </label>

      <label
        >Estado de expedição:
        <input type="text" v-model="customer.uf" :disabled="viewMode" />
      </label>

      <label
        >Data de nascimento:
        <input type="text" v-model="customer.dataNascimento" :disabled="viewMode" />
      </label>

      <label
        >Sexo:
        <input type="text" v-model="customer.sexo" :disabled="viewMode" />
      </label>

      <label
        >Estado civil:
        <input type="text" v-model="customer.estadoCivil" :disabled="viewMode" />
      </label>

      <h2>Endereço</h2>

      <label
        >CEP:
        <input type="text" v-model="customer.endereco.cep" :disabled="viewMode" />
      </label>

      <label
        >Logradouro:
        <input type="text" v-model="customer.endereco.logradouro" :disabled="viewMode" />
      </label>

      <label
        >Número:
        <input type="text" v-model="customer.endereco.numero" :disabled="viewMode" />
      </label>

      <label
        >Complemento:
        <input type="text" v-model="customer.endereco.complemento" :disabled="viewMode" />
      </label>

      <label
        >Bairro:
        <input type="text" v-model="customer.endereco.bairro" :disabled="viewMode" />
      </label>

      <label
        >Cidade:
        <input type="text" v-model="customer.endereco.cidade" :disabled="viewMode" />
      </label>

      <label
        >Estado:
        <input type="text" v-model="customer.endereco.uf" :disabled="viewMode" />
      </label>
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
