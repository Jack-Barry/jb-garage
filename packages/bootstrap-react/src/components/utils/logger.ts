import { noOp } from '@jb-garage/utils-generic'

// TODO: split this off into a module that can provide an MJS version
function getConsole() {
  const { env } = process

  if (!env || env['NODE_ENV'] === 'development') {
    return console
  }

  return {
    debug: noOp,
    log: noOp,
    info: noOp,
    warn: noOp,
    error: console.error
  }
}

export const logger = getConsole()
