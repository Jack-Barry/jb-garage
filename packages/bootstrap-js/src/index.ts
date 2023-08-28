import { BootstrapJs } from './lib/BootstrapJs'
import { BsJsConfig } from './lib.types'

/** `BootstrapJs.bsJs` method that uses the default Bootstrap prefix (`"bs"`) */
const bsJs = new BootstrapJs().bsJs

export { ALL_BREAKPOINTS_KEY } from './lib/constants'
export type { BsJsConfig }
export { BootstrapJs, bsJs }
