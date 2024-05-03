import { useAxios } from '@/composables/axios.composable'
import type { Customer } from '@/types/customer.type'

export const addCustomerService = async (customer: Customer) => {
  return await useAxios<Customer[]>(
    {
      url: `/Cliente/Adicionar`,
      method: 'POST',
      data: {
        ...customer
      }
    },
    'Não foi possível cadastrar o cliente.'
  )
}
