import { useAxios } from '@/composables/axios.composable'
import type { Customer } from '@/types/customer.type'

export const editCustomerService = (id: string, customer: Customer) => {
  return useAxios<Customer[]>({
    url: `/Cliente/Excluir/${id}`,
    method: 'PUT',
    data: {
      ...customer
    }
  })
}
