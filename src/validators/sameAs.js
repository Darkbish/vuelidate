import {ref, withParams} from './common'
export default (equalTo, message = '你的输入不相同') => withParams(
  {type: 'sameAs', eq: equalTo, message},
  function (value, parentVm) {
    return value === ref(equalTo, this, parentVm)
  }
)
