/** Value that can be used to configure a border width */
type BrBorderConfigValue =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | string
  | number
/** Value that can be used to configure an individual border */
type BrBorderConfig = {
  width?: BrBorderConfigValue
  rounded?: 'circle' | 'pill' | boolean | BrBorderConfigValue
}
/** Prop that can be accepted by `BrElement` for Bootstrap border utilities */
export type BrBorderProp =
  | boolean
  | (BrBorderConfig & {
      color?: string
      opacity?: 10 | 25 | 50 | 75 | number
      top?: boolean | BrBorderConfig
      end?: boolean | BrBorderConfig
      bottom?: boolean | BrBorderConfig
      start?: boolean | BrBorderConfig
    })

export function brBorderClasses(prop: BrBorderProp = {}) {
  if (typeof prop === 'boolean') {
    return { border: true, 'border-0': !prop }
  }

  const { width, rounded, opacity, color, ...rest } = prop
  const hasWidth = typeof width !== 'undefined'
  const hasRounded = typeof rounded !== 'undefined'
  const hasOpacity = typeof opacity !== 'undefined'
  const hasColor = typeof color !== 'undefined'
  const hasDirectional = !!Object.keys(rest).length
  if (!hasWidth && !hasRounded && !hasOpacity && !hasColor && !hasDirectional) {
    return {}
  }

  const classes: Record<string, boolean> = {}

  if (hasWidth) {
    classes['border'] = true
    classes[`border-${width}`] = true
  }

  if (hasRounded) {
    classes[`rounded-${rounded}`] = typeof rounded !== 'boolean'
    classes['rounded'] = typeof rounded === 'boolean'
  }

  if (hasOpacity) {
    classes[`border-opacity-${opacity}`] = true
  }

  if (hasColor) {
    classes['border'] = true
    classes[`border-${color}`] = true
  }

  for (const [key, directionalProp] of Object.entries(rest)) {
    if (typeof directionalProp === 'boolean') {
      classes[`border-${key}`] = directionalProp
      classes[`border-${key}-0`] = !directionalProp
      classes['border'] = !directionalProp
      continue
    }

    const { width: directionalWidth, rounded: directionalRounded } = directionalProp
    if (typeof directionalWidth !== 'undefined') {
      classes[`border-${key}-${directionalWidth}`] = true
    }

    if (typeof directionalRounded !== 'undefined') {
      classes[`rounded-${key}-${directionalRounded}`] = typeof directionalRounded !== 'boolean'
      classes[`rounded-${key}`] = typeof directionalRounded === 'boolean'
    }
  }

  return classes
}
