import { useAxios } from '@/composables/axios.composable'
import type { Customer } from '@/types/customer.type'

export const getCustomerService = async () => {
  return await useAxios<Customer[]>(
    { url: '/Cliente/Listar', method: 'GET' },
    'Não foi possível obter a lista de clientes.'
  )
}
