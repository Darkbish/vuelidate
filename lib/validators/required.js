'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requiredWithMessage = undefined;

var _common = require('./common');

var requiredWithMessage = exports.requiredWithMessage = function requiredWithMessage() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '这是必填字段';
  return (0, _common.withParams)({ type: 'required', message: message }, _common.req);
};
exports.default = requiredWithMessage();