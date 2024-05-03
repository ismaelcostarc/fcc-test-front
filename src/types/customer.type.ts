import type { Address } from './address.type'

export interface Customer {
  clienteId?: string
  cpf?: string
  nome?: string
  rg?: string
  dataExpedicao?: string
  orgaoExpedicao?: string
  uf?: string
  dataNascimento?: string
  sexo?: string
  estadoCivil?: string
  endereco?: Address
}
