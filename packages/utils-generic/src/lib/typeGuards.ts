export function isString(value?: unknown): value is string {
  return typeof value === 'string'
}

export function isNumber(value?: unknown): value is number {
  return typeof value === 'number'
}

export function isUndefined(value?: unknown): value is undefined {
  return typeof value === 'undefined'
}
