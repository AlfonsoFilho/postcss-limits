/* @flow */

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

import postcss from 'postcss';
import {DEFAULTS} from './config';
import {PluginOptionsType} from './types';
import {didCssExceedsLimits, validateOptions} from './helpers';

export default postcss.plugin('postcss-limits', (options: Object | PluginOptionsType): any => {

  options = Object.assign(DEFAULTS, options);
  validateOptions(options);


  return (css: Object/*, result: Object*/): Object => {

    let count: number = 0;
    let commentsCount: number = 0;
    let atRulesCount: number = 0;
    let rulesCount: number = 0;
    let selectorsCount: number = 0;

    didCssExceedsLimits(css, options.limit);

    css.walk((rule: Object) => {

      count = count + 1;

      console.log(`TYPE: ${rule.type} | NAME: ${rule.name} | SELECTORS: ${rule.selectors} | PROP: ${rule.prop}`);

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
