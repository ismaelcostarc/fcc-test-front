import { useAxios } from '@/composables/axios.composable'
import type { Customer } from '@/types/customer.type'

export const editCustomerService = async (customer: Customer) => {
  return await useAxios<Customer[]>({
    url: `/Cliente/Alterar`,
    method: 'PUT',
    data: {
      ...customer
    }
  })
}
