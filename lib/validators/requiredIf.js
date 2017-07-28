'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = require('./common');

exports.default = function (prop) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '这是必填字段';
  return (0, _common.withParams)({ type: 'requiredIf', prop: prop, message: message }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};