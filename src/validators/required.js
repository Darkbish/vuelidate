import {withParams, req} from './common'
export const requiredWithMessage = (message = '这是必填字段') => withParams({type: 'required', message}, req);
export default requiredWithMessage();
