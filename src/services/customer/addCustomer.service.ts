import { useAxios } from '@/composables/axios.composable'
import type { Customer } from '@/types/customer.type'

export const addCustomerService = (customer: Customer) => {
  return useAxios<Customer[]>({
    url: `/Cliente/Adicionar`,
    method: 'POST',
    data: {
      ...customer
    }
  })
}
