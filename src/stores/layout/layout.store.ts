import { useModal } from '@/composables/modal.composable'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  const modal = useModal()

  return {
    modal
  }
})
