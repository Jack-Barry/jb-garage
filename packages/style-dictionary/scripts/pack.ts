import { cp } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { glob } from 'glob'

const __dirname = dirname(fileURLToPath(import.meta.url))
const packageRoot = resolve(__dirname, '..')
const projectRoot = resolve(packageRoot, '../..')

run()

async function run() {
  const filesToCopy = await glob(['tokens/**/*.json', 'package.json', '*.md'], { cwd: packageRoot })
  await Promise.all(
    filesToCopy.map(async (file) => {
      await cp(
        resolve(packageRoot, file),
        resolve(projectRoot, 'dist/packages/style-dictionary', file)
      )
    })
  )
}
