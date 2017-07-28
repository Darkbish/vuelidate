import {req, len, withParams} from './common'
export default (length, message = `最少要输入 ${length} 个字符`) => withParams(
  { type: 'minLength', min: length, message },
  value => !req(value) || len(value) >= length
)
