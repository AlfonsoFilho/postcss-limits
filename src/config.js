import {LimitCustomType, PluginOptionsType} from './types';

const BUILDIN_PRESETS: {ie9: LimitCustomType, ie10: LimitCustomType} = {
  ie9: {
    selectors: 4095,
    import: 31,
    nesting: 4
  },
  ie10: {
    selectors: 65534,
    import: 4095,
    nesting: 4095
  }
};

export const PRESETS = {
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

export const DEFAULTS: PluginOptionsType = {
  limits: 'ie9',
  log: false
};
