import { useAxios } from '@/composables/axios.composable'
import type { Customer } from '@/types/customer.type'

export const deleteCustomerService = (id: string) => {
  return useAxios<Customer[]>({ url: `/Cliente/Excluir/${id}`, method: 'DELETE' })
}
