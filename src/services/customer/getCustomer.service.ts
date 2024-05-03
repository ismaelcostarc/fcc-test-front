import { useAxios } from '@/composables/useAxios.composable'
import type { Customer } from '@/types/customer.type'

export const getCustomerService = () => {
  return useAxios<Customer[]>({ url: '/Cliente/Listar', method: 'GET' })
}
