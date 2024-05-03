import axios, { type AxiosRequestConfig } from 'axios'
import { ref } from 'vue'

export async function useAxios<T>(opts: AxiosRequestConfig) {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 15000
  })

  const res = ref<T>()

  try {
    const { data } = await instance.request<T>({
      ...opts
    })

    res.value = data
  } catch (error) {
    // Handle errors
  }

  return res
}
