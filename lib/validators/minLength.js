'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = require('./common');

exports.default = function (length) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\u6700\u5C11\u8981\u8F93\u5165 ' + length + ' \u4E2A\u5B57\u7B26';
  return (0, _common.withParams)({ type: 'minLength', min: length, message: message }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};