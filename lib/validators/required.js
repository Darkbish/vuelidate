'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = require('./common');

exports.default = function () {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '这是必填字段';
  return (0, _common.withParams)({ type: 'required', message: message }, _common.req);
};