import {req, len, withParams} from './common'
export default (length, message = `最多可以输入 ${length} 个字符`) => withParams(
  { type: 'maxLength', max: length, message },
  value => !req(value) || len(value) <= length
)
