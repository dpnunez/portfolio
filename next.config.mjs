
import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import withPlaceholder from '@plaiceholder/next'
 
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: [
      'images.unsplash.com',
      'images.example.com',
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})


export default withPlaceholder(withMDX(nextConfig))
