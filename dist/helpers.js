'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.didCssExceedsLimits = didCssExceedsLimits;
exports.validateOptions = validateOptions;

var _config = require('./config');

var _types = require('./types');

function didCssExceedsLimits() {
  var css = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var preset = arguments.length <= 1 || arguments[1] === undefined ? 'ie9' : arguments[1];


  var count = 0;

  css.walk(function (rule) {
    if (rule.selectors !== undefined) {
      count += rule.selectors.length;
    }
  });
  //
  // console.log('didCssExceedsLimits:count', count);
  // console.log('didCssExceedsLimits:count', count);
  // console.log('didCssExceedsLimits:exceeds', count >= PRESETS[String(preset).toLowerCase()].selectors);
  return count >= _config.PRESETS[String(preset).toLowerCase()].selectors;
}

function validateOptions(options) {
  console.log('validate', options);
  // console.log('validate', typeof options);
}