import {regex} from './common'
const emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/

export const emailWithMessage = (message = '请输入有效的电子邮件地址') => regex({type: 'email', message}, emailRegex);
export default emailWithMessage();
