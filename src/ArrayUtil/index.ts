import {
  GetValueByKeyInArray,
  getValueByKeyInArray,
  ANTD_SELECT_OPTION_CONFIG
} from './getValueByKeyInArray'

export interface ArrayUtil {
  getValueByKeyInArray: GetValueByKeyInArray
  ANTD_SELECT_OPTION_CONFIG: any
}

const arrayUtil: ArrayUtil = {
  getValueByKeyInArray,
  ANTD_SELECT_OPTION_CONFIG
}

export default arrayUtil
