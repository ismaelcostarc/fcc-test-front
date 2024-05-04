<script setup lang="ts">
import { ref } from 'vue'
import user from '@/user.json'
import router from '@/router'
import BaseInputText from '@/components/BaseInputText.vue'
import BaseInputPassword from '@/components/BaseInputPassword.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseAlert from '@/components/BaseAlert.vue'

const email = ref('')
const password = ref('')

const isWrong = ref(false)

const login = () => {
  if (email.value === user.email && password.value === user.password) {
    router.push({ name: 'customerList' })
  } else isWrong.value = true
}
</script>

<template>
  <form @submit.prevent="login">
    <BaseInputText v-model="email" label="E-mail:" />
    <BaseInputPassword v-model="password" label="Senha:" />

    <BaseButton @click="login">Entrar</BaseButton>

    <BaseAlert v-if="isWrong" type="error">
      O e-mail e senha estão incorretos.<br />
      Confira os dados e tente novamente.
    </BaseAlert>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
}
</style>
