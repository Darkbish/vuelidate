import {regex} from './common'
export const alphaWithMessage = (message = '请输入有效的字母') => regex({type: 'alpha', message}, /^[a-zA-Z]*$/);
export default alphaWithMessage();
