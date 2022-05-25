export const getValueByKeyInArray = (
    arr,
    key,
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

