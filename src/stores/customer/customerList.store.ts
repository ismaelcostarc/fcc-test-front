import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Customer } from '@/types/customer.type'
import { getCustomerService } from '@/services/customer/getCustomer.service'
import { deleteCustomerService } from '@/services/customer/deleteCustomer.service'
import { FilterOptions } from '@/utils/enums.utils'

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

  const filterBy = ref(FilterOptions.NAME)
  const searchFor = ref('')

  watch(
    () => searchFor.value,
    async (value) => {
      if (!value) {
        await get()
      }

      if (filterBy.value === FilterOptions.NAME) {
        list.value = list.value?.filter((elem) =>
          elem.nome?.toLowerCase()?.includes(value.toLowerCase())
        )
      }

      if (filterBy.value === FilterOptions.CPF) {
        list.value = list.value?.filter((elem) => elem.cpf?.includes(value))
      }
    }
  )

  return {
    list,
    get,
    remove,
    filterBy,
    searchFor
  }
})
