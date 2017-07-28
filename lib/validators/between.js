'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = require('./common');

exports.default = function (min, max) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '\u8BF7\u8F93\u5165 ' + min + ' \u81F3 ' + max + ' \u4E4B\u95F4\u7684\u6570\u5B57';
  return (0, _common.withParams)({ type: 'between', min: min, max: max, message: message }, function (value) {
    return !(0, _common.req)(value) || !/\s/.test(value) && +min <= +value && +max >= +value;
  });
};