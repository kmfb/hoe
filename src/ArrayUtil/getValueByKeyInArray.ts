interface GetValueByKeyInArrayConfig {
  keyPropertyName: string;
  valuePropertyName: string;
}

export type GetValueByKeyInArray = (
  arr: Array<any>,
  key: string,
  config: GetValueByKeyInArrayConfig
) => string;

export const getValueByKeyInArray: GetValueByKeyInArray = (
  arr: Array<any>,
  key: string,
  config = {
    keyPropertyName: "key",
    valuePropertyName: "label",
  }
) => {
  const { keyPropertyName, valuePropertyName } = config;

  const findItem = arr.find((item) => item[keyPropertyName] === key);

  if (findItem) {
    return findItem[valuePropertyName];
  }
  return "";
};
