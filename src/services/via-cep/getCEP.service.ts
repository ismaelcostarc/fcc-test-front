import axios from 'axios'

interface GetCPFResponse {
  bairro: string
  uf: string
  localidade: string
  logradouro: string
  complemento: string
}

export const getCEP = async (cep: string) => {
  const res = await axios.get<GetCPFResponse>(
    import.meta.env.VITE_VIA_CEP_URL + '/' + cep + '/json/'
  )

  return res.data
}
