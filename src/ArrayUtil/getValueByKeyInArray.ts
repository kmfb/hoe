interface GetValueByKeyInArrayConfig {
  keyPropertyName: string
  valuePropertyName: string
}

type Item = {
  [x: string]: string
}

export type GetValueByKeyInArray = (
  arr: Array<Item>,
  key: string,
  config?: GetValueByKeyInArrayConfig
) => string

export const getValueByKeyInArray: GetValueByKeyInArray = (
  arr: Array<Item>,
  key: string,
  config = {
    keyPropertyName: 'key',
    valuePropertyName: 'label',
  }
) => {
  const { keyPropertyName, valuePropertyName } = config

  const findItem = arr.find((item) => item[keyPropertyName] === key)

  if (findItem) {
    return findItem[valuePropertyName]
  }
  return ''
}
