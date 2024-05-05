import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Customer } from '@/types/customer.type'
import { getCustomerService } from '@/services/customer/getCustomer.service'
import { deleteCustomerService } from '@/services/customer/deleteCustomer.service'

export const useCustomerListStore = defineStore('customerList', () => {
  const list = ref<Customer[] | undefined>([])

  const get = async () => {
    const { data } = await getCustomerService()
    list.value = data
  }

  const remove = async (id: string) => {
    const { status } = await deleteCustomerService(id)
    if (status == 200) {
      get()
    }
  }

  return {
    list,
    get,
    remove
  }
})
