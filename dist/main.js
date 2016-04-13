'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _config = require('./config');

var _types = require('./types');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

https://blogs.msdn.microsoft.com/ieinternals/2011/05/14/stylesheet-limits-in-internet-explorer/

<= IE9
A sheet may contain up to 4095 rules
A sheet may @import up to 31 sheets
@import nesting supports up to 4 levels deep

>= IE10
A sheet may contain up to 65534 rules
A document may use up to 4095 stylesheets
@import nesting is limited to 4095 levels (due to the 4095 stylesheet limit)

- Must be last plugin
- Must use preset and custom split setup
- Must check Rules limits per sheets
- Must check @import limits combinig all deeps
- Must check @import deep level limits
- Must output files
- Must Conserve SourceMap
- Must customise filename

SASS
The file’s extension is .css
The filename begins with http://
The filename is a url()
The @import has any media queries

*/

exports.default = _postcss2.default.plugin('postcss-limits', function (options) {

  options = Object.assign(_config.DEFAULTS, options);
  (0, _helpers.validateOptions)(options);

  return function (css) {

    var count = 0;
    var commentsCount = 0;
    var atRulesCount = 0;
    var rulesCount = 0;
    var selectorsCount = 0;

    (0, _helpers.didCssExceedsLimits)(css, options.limit);

    css.walk(function (rule) {

      count = count + 1;

      console.log('TYPE: ' + rule.type + ' | NAME: ' + rule.name + ' | SELECTORS: ' + rule.selectors + ' | PROP: ' + rule.prop);

      if (rule.name === 'import') {
        console.log('@IMPORT', rule);
      }

      if (rule.type === 'rule') {
        rulesCount = rulesCount + 1;
      }
      if (rule.type === 'atrule') {
        atRulesCount = atRulesCount + 1;
      }
      if (rule.type === 'comment') {
        commentsCount = commentsCount + 1;
      }
      if (rule.selectors !== undefined) {
        selectorsCount = selectorsCount + rule.selectors.length;
      }
    });

    console.log('Nodes Lenght', css.nodes.length);
    console.log('Total Nodes', count);
    console.log('Total Rules', rulesCount);
    console.log('Total AtRules', atRulesCount);
    console.log('Total Comments', commentsCount);
    console.log('Total Selector', selectorsCount);

    return css;
  };
});