import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isLogged = ref(false)

  return {
    isLogged
  }
})
