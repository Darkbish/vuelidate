import {regex} from './common'
export const alphaNumWithMessage = (message = '请输入有效的字母和数字') => regex({type: 'alphaNum', message}, /^[a-zA-Z0-9]*$/);
export default alphaNumWithMessage();
