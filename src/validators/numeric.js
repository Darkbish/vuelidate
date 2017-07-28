import {regex} from './common'
export default (message = '请输入有效的数字') => regex({type: 'numeric', message}, /^[0-9]*$/)
