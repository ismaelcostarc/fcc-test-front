import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Customer } from '@/types/customer.type'
import { getCustomerService } from '@/services/customer/getCustomer.service'

export const useCustomerListStore = defineStore('customerList', () => {
  const list = ref<Customer[] | undefined>([])

  const get = async () => {
    const { data } = await getCustomerService()
    list.value = data
  }

  return {
    list,
    get
  }
})
