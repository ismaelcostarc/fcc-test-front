import { useAxios } from '@/composables/axios.composable'
import type { Customer } from '@/types/customer.type'

export const getCustomerService = () => {
  return useAxios<Customer[]>({ url: '/Cliente/Listar', method: 'GET' })
}
