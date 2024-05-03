import { useAxios } from '@/composables/axios.composable'
import type { Customer } from '@/types/customer.type'

export const getCustomerByIdService = async (id: string) => {
  return await useAxios<Customer>(
    { url: `/Cliente/ListarPorId/${id}`, method: 'GET' },
    'Não foi possível obter os dados do cliente.'
  )
}
