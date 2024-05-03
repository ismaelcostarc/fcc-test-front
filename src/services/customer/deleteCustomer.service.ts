import { useAxios } from '@/composables/useAxios.composable'
import type { Customer } from '@/types/customer.type'

export const deleteCustomerService = (id: string) => {
  return useAxios<Customer[]>({ url: `/Cliente/Excluir/${id}`, method: 'DELETE' })
}
