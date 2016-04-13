'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULTS = exports.PRESETS = undefined;

var _types = require('./types');

var BUILDIN_PRESETS = {
  ie9: {
    RULES: 4095,
    IMPORT: 31,
    NESTING: 4
  },
  ie10: {
    RULES: 65534,
    IMPORT: 4095,
    NESTING: 4095
  }
};

var PRESETS = exports.PRESETS = {
  ie6: BUILDIN_PRESETS.ie9,
  ie7: BUILDIN_PRESETS.ie9,
  ie8: BUILDIN_PRESETS.ie9,
  ie9: BUILDIN_PRESETS.ie9,
  ie10: BUILDIN_PRESETS.ie10,
  ie11: BUILDIN_PRESETS.ie10,
  edge12: BUILDIN_PRESETS.ie10,
  edge13: BUILDIN_PRESETS.ie10,
  edge14: BUILDIN_PRESETS.ie10
};

var DEFAULTS = exports.DEFAULTS = {
  limits: 'ie9',
  log: false
};