import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'

interface GeneratePlaceholder {
  base64?: string
  src: string
}

function bufferToBase64(buffer: Buffer): string {
  return `data:image/png;base64,${buffer.toString('base64')}`
}

async function getBufferFromFilePath(file: string): Promise<Buffer> {
  const pathFile = path.join(process.cwd(), 'public', file)
  const buffer = await fs.readFile(pathFile)

  return buffer
}

export async function generatePlaceholder(
  file: string,
): Promise<GeneratePlaceholder> {
  'use server'
  try {
    const buffer = await getBufferFromFilePath(file)
    const resizedBuff = await sharp(buffer).resize(20).toBuffer()
    const base64 = bufferToBase64(resizedBuff)

    return {
      base64,
      src: file,
    }
  } catch {
    return {
      base64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==',
      src: file,
    }
  }
}
