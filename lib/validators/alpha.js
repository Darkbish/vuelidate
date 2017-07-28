'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alphaWithMessage = undefined;

var _common = require('./common');

var alphaWithMessage = exports.alphaWithMessage = function alphaWithMessage() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '请输入有效的字母';
  return (0, _common.regex)({ type: 'alpha', message: message }, /^[a-zA-Z]*$/);
};
exports.default = alphaWithMessage();