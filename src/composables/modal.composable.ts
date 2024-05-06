import { ref } from 'vue'

export const useModal = () => {
  const modalIsVisible = ref(false)
  const message = ref('')
  const closeModal = () => (modalIsVisible.value = false)
  const showModal = () => (modalIsVisible.value = true)

  return {
    modalIsVisible,
    message,
    closeModal,
    showModal
  }
}
