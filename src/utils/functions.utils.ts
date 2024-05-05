export const objectHasEmptyFields = (obj: object) => {
  for (const chave in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, chave) &&
      // @ts-ignore
      typeof obj[chave] === 'string' &&
      // @ts-ignore
      obj[chave].trim() === ''
    ) {
      return true
    }
  }
  return false
}
