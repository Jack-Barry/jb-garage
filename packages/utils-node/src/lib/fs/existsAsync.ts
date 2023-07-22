import { PathLike } from 'node:fs'
import { stat } from 'node:fs/promises'

export async function existsAsync(path: PathLike) {
  try {
    await stat(path)
    return true
  } catch (err) {
    return false
  }
}
