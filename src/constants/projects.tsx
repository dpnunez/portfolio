import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiElixir } from 'react-icons/si'
import { PiDotsSixFill } from 'react-icons/pi'
import { repoLink } from './content'

export const projectsTypes: ProjectTag[] = [
  {
    label: 'React',
    name: 'react',
    icon: <FaReact />,
  },
  {
    label: 'React Native',
    name: 'react-native',
    icon: <FaReact />,
  },
  {
    label: 'Node.js',
    name: 'node',
    icon: <FaNodeJs />,
  },
  {
    label: 'Elixir',
    name: 'elixir',
    icon: <SiElixir />,
  },
  {
    label: 'Others',
    name: 'others',
    icon: <PiDotsSixFill />,
  },
]

export const projectsList: Project[] = [
  {
    title: 'Portfolio',
    slug: 'portfolio',
    image: '/projects/portfolio/original.jpeg',
    readmeUrl:
      'https://raw.githubusercontent.com/dpnunez/portfolio/main/README.md',
    githubLink: repoLink,
    shortDescription: 'A personal portfolio made with Next.js and TypeScript.',
    link: repoLink,
    tags: ['react', 'node'],
  },
]
