import {regex} from './common'
export const numericWithMessage = (message = '请输入有效的数字') => regex({type: 'numeric', message}, /^[0-9]*$/);
export default numericWithMessage();
