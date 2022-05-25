interface GetValueByKeyInArrayConfig {
  keyPropertyName: string;
  valuePropertyName: string;
}

export const getValueByKeyInArray = (
  arr: Array<any>,
  key: string,
  config: GetValueByKeyInArrayConfig = {
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
