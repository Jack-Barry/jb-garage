import { SpawnOptionsWithoutStdio, spawn } from 'node:child_process'

/** Promisifies a call to `child_process.spawn` */
export async function promiseSpawn(
  /** Full command + arguments to be passed to spawned process */
  command: string,
  /** Options to be used for spawned process */
  options: Omit<SpawnOptionsWithoutStdio, 'stdio'> = {}
) {
  const splitString = command.split(' ')

  await new Promise<void>((resolve, reject) => {
    const childProcess = spawn(splitString[0], splitString.slice(1), {
      ...options,
      stdio: 'inherit'
    })
    childProcess.on('error', (error) => reject(error))
    childProcess.on('exit', (code) => {
      if (code !== 0) {
        reject(`Process exited with non-zero code: ${code}`)
      }
      resolve()
    })
  })
}
