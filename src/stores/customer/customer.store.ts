import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Customer } from '@/types/customer.type'
import { getCustomerByIdService } from '@/services/customer/getCustomerById.service'
import { editCustomerService } from '@/services/customer/editCustomer.service'

export const useCustomerStore = defineStore('customer', () => {
  const customer = ref<Customer>()
  const statusCode = ref()

  const get = async (id: string) => {
    const { data } = await getCustomerByIdService(id)
    customer.value = data
  }

  const edit = async (data: Customer) => {
    const { status } = await editCustomerService(data)
    statusCode.value = status
  }

  const remove = async (id: string) => {}

  return {
    customer,
    statusCode,
    get,
    edit,
    remove
  }
})
