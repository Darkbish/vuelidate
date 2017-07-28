'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailWithMessage = undefined;

var _common = require('./common');

var emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

var emailWithMessage = exports.emailWithMessage = function emailWithMessage() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '请输入有效的电子邮件地址';
  return (0, _common.regex)({ type: 'email', message: message }, emailRegex);
};
exports.default = emailWithMessage();