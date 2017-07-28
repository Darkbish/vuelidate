'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numericWithMessage = undefined;

var _common = require('./common');

var numericWithMessage = exports.numericWithMessage = function numericWithMessage() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '请输入有效的数字';
  return (0, _common.regex)({ type: 'numeric', message: message }, /^[0-9]*$/);
};
exports.default = numericWithMessage();