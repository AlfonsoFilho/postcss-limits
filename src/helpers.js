/* @flow */

import {PRESETS} from './config';
import {PluginOptionsType} from './types';

export function didCssExceedsLimits(css: Object = {}, preset: PluginOptionsType = 'ie9'): boolean {

  let count: number = 0;

  css.walk((rule: Object) => {
    if (rule.selectors !== undefined) {
      count += rule.selectors.length;
    }
  });
  // 
  // console.log('didCssExceedsLimits:count', count);
  // console.log('didCssExceedsLimits:count', count);
  // console.log('didCssExceedsLimits:exceeds', count >= PRESETS[String(preset).toLowerCase()].selectors);
  return count >= PRESETS[String(preset).toLowerCase()].selectors;
}

export function validateOptions(options: PluginOptionsType) {
  console.log('validate', options);
  // console.log('validate', typeof options);
}
