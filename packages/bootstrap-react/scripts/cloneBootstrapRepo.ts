import { readFile, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { existsAsync, promiseSpawn } from '../../utils-node/src'

import pkgJson from '../../../package.json' assert { type: 'json' }

const __dirname = dirname(fileURLToPath(import.meta.url))
const PACKAGE_ROOT = resolve(__dirname, '..')
const BOOTSTRAP_REPO_DIR = resolve(PACKAGE_ROOT, 'repos/bootstrap')

run()

async function run() {
  const usedBootstrapVersion = pkgJson.dependencies.bootstrap
  const hasBootstrapRepo = await existsAsync(BOOTSTRAP_REPO_DIR)
  if (!hasBootstrapRepo) {
    await cloneBootstrapRepo(usedBootstrapVersion)
    return
  }

  const bootstrapPackageJsonPath = resolve(BOOTSTRAP_REPO_DIR, 'package.json')
  const bootstrapHasPackageJson = await existsAsync(bootstrapPackageJsonPath)

  if (bootstrapHasPackageJson) {
    const bootstrapRepoPackageJson = await readFile(bootstrapPackageJsonPath, 'utf8')
    const bootstrapRepoVersion = JSON.parse(bootstrapRepoPackageJson).version
    const hasCurrentBootstrapVersion = bootstrapRepoVersion === usedBootstrapVersion
    if (hasCurrentBootstrapVersion) {
      console.log('✅ Cloned Bootstrap repo is up-to-date')
      return
    }
  }

  console.log('Removing old Bootstrap repo...')
  await rm(BOOTSTRAP_REPO_DIR, { recursive: true })
  await cloneBootstrapRepo(usedBootstrapVersion)
}

async function cloneBootstrapRepo(version: string) {
  console.log(`Cloning Bootstrap v${version}...`)
  await promiseSpawn(
    `git clone --depth 1 --branch v${version} https://github.com/twbs/bootstrap.git repos/bootstrap`,
    { cwd: PACKAGE_ROOT }
  )
  console.log('✅ Cloned Bootstrap repo has been updated')
}
