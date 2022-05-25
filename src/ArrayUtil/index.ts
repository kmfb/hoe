import { GetValueByKeyInArray, getValueByKeyInArray } from "./getValueByKeyInArray";

export interface ArrayUtil {
    getValueByKeyInArray: GetValueByKeyInArray;
}

export const arrayUtil: ArrayUtil = {
    getValueByKeyInArray
}

