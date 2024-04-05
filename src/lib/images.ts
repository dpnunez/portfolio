import fs from 'node:fs/promises'
import { getPlaiceholder } from 'plaiceholder'

interface GeneratePlaceholder {
  base64?: string
  src: string
}

export async function generatePlaceholder(
  file: string,
): Promise<GeneratePlaceholder> {
  try {
    const buffer = await fs.readFile(`./public${file}`)
    const plaiceholder = await getPlaiceholder(buffer)

    return {
      ...plaiceholder,
      src: file,
    }
  } catch {
    return {
      src: file,
    }
  }
}
