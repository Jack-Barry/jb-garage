const { basename } = require('node:path')

const {
  makePackageReleaseConfig: makeReleaseConfig
} = require('../../tools/configs/semantic-release.cjs')

const packageName = basename(__dirname)

module.exports = makeReleaseConfig(packageName)
