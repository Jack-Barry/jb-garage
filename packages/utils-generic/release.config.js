const { basename } = require('node:path')
const {
  SEMANTIC_RELEASE_BRANCHES,
  makeTagFormat,
  COMMON_COMMIT_PATHS
} = require('../../tools/configs/semantic-release.cjs')

const packageName = basename(__dirname)
const name = `@jb-garage/${packageName}`
const srcRoot = `packages/${packageName}`

module.exports = {
  pkgRoot: `dist/${srcRoot}`,
  tagFormat: makeTagFormat(name),
  commitPaths: [...COMMON_COMMIT_PATHS, `${srcRoot}/*`],
  branches: SEMANTIC_RELEASE_BRANCHES
}
