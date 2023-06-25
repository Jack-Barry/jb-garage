import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import StyleDictionary from 'style-dictionary'

const __dirname = dirname(fileURLToPath(import.meta.url))

StyleDictionary.extend(resolve(__dirname, 'config.cjs')).buildAllPlatforms()
