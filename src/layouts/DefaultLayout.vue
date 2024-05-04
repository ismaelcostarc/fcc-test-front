<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'

const logout = () => {}
</script>
<template>
  <header>
    <h1>Sistema de gerenciamento de clientes</h1>
    <BaseButton @click="logout">Sair</BaseButton>
  </header>
  <main><slot></slot></main>
  <footer></footer>
</template>

<style scoped>
header {
  height: 20vh;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
}

h1 {
  color: var(--color-white);
  font-weight: bold;
  font-size: var(--font-size-xl);
}

main {
}
footer {
}
</style>
