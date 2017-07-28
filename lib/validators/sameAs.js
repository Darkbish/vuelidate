'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = require('./common');

exports.default = function (equalTo) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '你的输入不相同';
  return (0, _common.withParams)({ type: 'sameAs', eq: equalTo, message: message }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};