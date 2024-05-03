import { useAxios } from '@/composables/axios.composable'
import type { Customer } from '@/types/customer.type'

export const deleteCustomerService = async (id: string) => {
  return await useAxios<Customer[]>({ url: `/Cliente/Excluir/${id}`, method: 'DELETE' })
}
