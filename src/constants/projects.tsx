import { FaLinkedin } from 'react-icons/fa'

export const projectsTypes: ProjectTag[] = [
  {
    label: 'React',
    name: 'react',
    icon: <FaLinkedin />,
  },
  {
    label: 'React Native',
    name: 'react-native',
    icon: <FaLinkedin />,
  },
  {
    label: 'Node.js',
    name: 'node',
    icon: <FaLinkedin />,
  },
  {
    label: 'Others',
    name: 'others',
    icon: <FaLinkedin />,
  },
  {
    label: 'Elixir',
    name: 'elixir',
    icon: <FaLinkedin />,
  },
]

export const projectsList: Project[] = [
  {
    title: 'Portfolio',
    slug: 'portfolio',
    image: '/assets/images/projects/portfolio.jpeg',
    readmeUrl:
      'https://raw.githubusercontent.com/dpnunez/portfolio/main/README.md',
    githubLink: 'https://github.com/dpnunez/portfolio',
    shortDescription: 'A personal portfolio made with Next.js and TypeScript.',
    link: 'https://github.com/dpnunez/portfolio',
    tags: ['react', 'node'],
  },
]
