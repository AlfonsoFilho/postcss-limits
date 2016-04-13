type LimitPresetType = string;

export type LimitCustomType = {
  selectors: number,
  import: number,
  nesting: number
};

type LimitsType = LimitPresetType | LimitCustomType;

export type PluginOptionsType = {
  limits: LimitsType,
  log: boolean
}
