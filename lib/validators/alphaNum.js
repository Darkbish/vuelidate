'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = require('./common');

exports.default = function () {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '请输入有效的字母和数字';
  return (0, _common.regex)({ type: 'alphaNum', message: message }, /^[a-zA-Z0-9]*$/);
};