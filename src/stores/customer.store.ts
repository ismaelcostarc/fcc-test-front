import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Customer } from '@/types/customer.type'
import { getCustomerService } from '@/services/customer/getCustomer.service'

export const useCustomerStore = defineStore('customer', () => {
  const list = ref<Customer[] | undefined>([])

  const updateList = async () => {
    list.value = (await getCustomerService()).value
  }

  const getById = (id: string) => {}

  const edit = (id: string, data: Customer) => {}

  const remove = (id: string) => {}

  return {
    list,
    updateList,
    getById,
    edit,
    remove
  }
})
