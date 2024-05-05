export const objectHasEmptyFields = (obj: object) => {
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      // @ts-ignore
      typeof obj[key] === 'string' &&
      // @ts-ignore
      obj[key].trim() === ''
    ) {
      return true
    }
  }
  return false
}

export const testCPF = (strCPF: string) => {
  let sum
  let rest
  sum = 0
  if (strCPF == '00000000000') return false

  for (let i = 1; i <= 9; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
  rest = (sum * 10) % 11

  if (rest == 10 || rest == 11) rest = 0
  if (rest != parseInt(strCPF.substring(9, 10))) return false

  sum = 0
  for (let i = 1; i <= 10; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i)
  rest = (sum * 10) % 11

  if (rest == 10 || rest == 11) rest = 0
  if (rest != parseInt(strCPF.substring(10, 11))) return false
  return true
}

export const isDateEqualToOrBeforeToday = (date: Date) => {
  const today = new Date()

  date.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)

  return date <= today
}

export const formatCPF = (cpf: string) => {
  if (cpf.length !== 11) {
    return cpf
  }

  return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9)
}
