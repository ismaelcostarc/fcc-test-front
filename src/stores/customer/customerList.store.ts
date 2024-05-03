import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Customer } from '@/types/customer.type'
import { getCustomerService } from '@/services/customer/getCustomer.service'

export const useCustomerListStore = defineStore('customerList', () => {
  const list = ref<Customer[] | undefined>([])

  const get = async () => {
    list.value = (await getCustomerService()).value
  }

  return {
    list,
    get
  }
})
