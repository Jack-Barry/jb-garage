/**
 * By default, this script will copy the `setThemeOnLoad.js` script into the current
 *   working directory's "public" folder.
 *
 * - The first argument passed is the relative path from current working directory
 *     to where the script should be copied
 * - The second argument passed is a custom theme key if needed
 */
import { copyFile, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

run()

async function run() {
  const SET_THEME_ON_LOAD_FILENAME = 'setThemeOnLoad.js'
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const cwd = process.cwd()
  const destination = process.argv[2]
  const themeKey = process.argv[3]
  const destinationPath = resolve(cwd, destination || `public/${SET_THEME_ON_LOAD_FILENAME}`)

  await copyFile(resolve(__dirname, SET_THEME_ON_LOAD_FILENAME), destinationPath)
  const fileContents = await readFile(destinationPath, 'utf8')
  const modifiedFileContents = themeKey
    ? fileContents.replace('"theme"', `"${themeKey}"`)
    : fileContents
  await writeFile(destinationPath, modifiedFileContents, 'utf8')
}
