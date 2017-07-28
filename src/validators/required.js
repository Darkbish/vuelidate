import {withParams, req} from './common'
export default (message = '这是必填字段') => withParams({type: 'required', message}, req)
