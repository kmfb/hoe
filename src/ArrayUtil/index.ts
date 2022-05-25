import {
  GetValueByKeyInArray,
  getValueByKeyInArray,
} from './getValueByKeyInArray'

export interface ArrayUtil {
  getValueByKeyInArray: GetValueByKeyInArray
}

const arrayUtil: ArrayUtil = {
  getValueByKeyInArray,
}

export default arrayUtil
