<script setup lang="ts">
import { ref } from 'vue'
import user from '@/user.json'
import router from '@/router'

const email = ref('')
const password = ref('')

const isWrong = ref(false)

const login = () => {
  if (email.value === user.email && password.value === user.password) {
    router.push({ name: 'customersList' })
  } else isWrong.value = true
}
</script>

<template>
  <main>
    <form @submit.prevent="login">
      <label>
        E-mail:
        <input type="text" v-model="email" />
      </label>

      <label>
        Senha:
        <input type="password" v-model="password" />
      </label>

      <button type="submit">Entrar</button>

      <div v-if="isWrong">
        O e-mail e senha estão incorretos. Confira os dados e tente novamente.
      </div>
    </form>
  </main>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 2p;
  width: 300px;
  padding: 300px;
  justify-content: center;
  align-items: center;
}
</style>
