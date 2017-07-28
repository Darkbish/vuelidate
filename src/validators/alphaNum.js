import {regex} from './common'
export default (message = '请输入有效的字母和数字') => regex({type: 'alphaNum', message}, /^[a-zA-Z0-9]*$/)
