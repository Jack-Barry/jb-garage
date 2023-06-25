/** Generates the tag format used throughout the repo */
function makeTagFormat(name) {
  return name + '_v${version}'
}

/** Common semantic release branches array */
const SEMANTIC_RELEASE_BRANCHES = [
  '+([0-9])?(.{+([0-9]),x}).x',
  'main',
  { name: 'beta', prerelease: true },
  { name: 'alpha', prerelease: true }
]

/** Commit paths that affect all projects */
const COMMON_COMMIT_PATHS = [
  'workspace.json',
  'nx.json',
  '.nxignore',
  'package.json',
  '.prettierrc',
  '.prettierignore'
]

/** Builds a release config that can be used for packages */
function makePackageReleaseConfig(packageName) {
  const name = `@jb-garage/${packageName}`
  const srcRoot = `packages/${packageName}`

  return {
    pkgRoot: `dist/${srcRoot}`,
    tagFormat: makeTagFormat(name),
    commitPaths: [...COMMON_COMMIT_PATHS, `${srcRoot}/*`],
    branches: SEMANTIC_RELEASE_BRANCHES
  }
}

module.exports = {
  makeTagFormat,
  SEMANTIC_RELEASE_BRANCHES,
  COMMON_COMMIT_PATHS,
  makePackageReleaseConfig
}
