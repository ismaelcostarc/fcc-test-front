<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import router from '@/router'

const logout = () => {
  localStorage.setItem('user', JSON.stringify({ isLogged: false }))

  router.push({
    name: 'login'
  })
}
</script>
<template>
  <header>
    <h1>Sistema de gerenciamento de clientes</h1>
    <BaseButton @click="logout"
      >Sair <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </BaseButton>
  </header>
  <main>
    <div><slot></slot></div>
  </main>
  <footer>
    <div>
      Rua das Ideias, 123<br />
      Bairro dos Sonhos<br />
      São Paulo - SP, Brasil<br />
      CEP: 01234-567
    </div>
  </footer>
</template>

<style scoped>
header {
  height: 10vh;
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
  font-size: var(--font-size-md);
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: var(--font-size-lg);
  }
}

main {
  background-color: var(--color-light-gray);
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 2em 0;
}

main div {
  background-color: var(--color-white);
}

footer {
  height: 20vh;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-md);
}
</style>
