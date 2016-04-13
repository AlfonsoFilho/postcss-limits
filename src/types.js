type LimitStringType = string;

export type LimitObjectType = {
  RULES: number,
  IMPORT: number,
  NESTING: number
};

type LimitsType = LimitStringType | LimitObjectType;

export type PluginOptionsType = {
  limits: LimitsType,
  log: boolean
}
