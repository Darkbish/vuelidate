import {req, withParams} from './common'

export default (min, max, message = `请输入 ${min} 至 ${max} 之间的数字`) =>
  withParams({type: 'between', min, max, message}, value =>
    !req(value) || (!/\s/.test(value) && +min <= +value && +max >= +value))
