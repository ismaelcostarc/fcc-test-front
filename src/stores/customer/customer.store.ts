import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Customer } from '@/types/customer.type'
import { getCustomerByIdService } from '@/services/customer/getCustomerById.service'
import { editCustomerService } from '@/services/customer/editCustomer.service'

export const useCustomerStore = defineStore('customer', () => {
  const customer = ref<Customer>()

  const get = async (id: string) => {
    customer.value = (await getCustomerByIdService(id)).value
  }

  const edit = async (data: Customer) => {
    await editCustomerService(data)
  }

  const remove = async (id: string) => {}

  return {
    customer,
    get,
    edit,
    remove
  }
})
