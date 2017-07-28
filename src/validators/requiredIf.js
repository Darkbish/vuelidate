import {req, ref, withParams} from './common'

export default (prop, message = '这是必填字段') => withParams(
  {type: 'requiredIf', prop, message},
  function (value, parentVm) {
    return ref(prop, this, parentVm) ? req(value) : true
  }
)
