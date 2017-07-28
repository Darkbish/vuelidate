import {regex} from './common'
export default (message = '请输入有效的字母') => regex({type: 'alpha', message}, /^[a-zA-Z]*$/)
