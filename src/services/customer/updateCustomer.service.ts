import { useAxios } from '@/composables/useAxios.composable'
import type { Customer } from '@/types/customer.type'

export const updateCustomerService = (id: string, customer: Customer) => {
  return useAxios<Customer[]>({
    url: `/Cliente/Excluir/${id}`,
    method: 'PUT',
    data: {
      ...customer
    }
  })
}
