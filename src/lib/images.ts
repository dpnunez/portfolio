'use server'
import fs from 'fs/promises'
import ky from 'ky'
import { getPlaiceholder, GetPlaiceholderOptions } from 'plaiceholder'

function isRelative(str: string) {
  return str.startsWith('/')
}

const placeholderConfig = {
  size: 50,
} as GetPlaiceholderOptions

export async function getPlaceholder(str: string) {
  if (isRelative(str)) {
    return getPlaceholderFromLocalImage(str)
  } else {
    return getPlaceholderFromRemoteImage(str)
  }
}

export async function getPlaceholderFromLocalImage(file: string) {
  const nextRelativePath = file.replace('public', '')
  const fsPath = 'public' + nextRelativePath
  const buffer = await fs.readFile(fsPath)
  const plaiceholder = await getPlaiceholder(buffer)
  return plaiceholder.base64
}

export async function getPlaceholderFromRemoteImage(str: string) {
  try {
    const arrBuffer = await ky.get(str).arrayBuffer()
    const { base64 } = await getPlaiceholder(
      Buffer.from(arrBuffer),
      placeholderConfig,
    )
    return base64
  } catch {
    return undefined
  }
}
