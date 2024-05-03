import { useAxios } from '@/composables/useAxios.composable'
import type { Customer } from '@/types/customer.type'

export const getCustomerByIdService = (id: string) => {
  return useAxios<Customer>({ url: `/Cliente/ListarPorId/${id}`, method: 'GET' })
}
