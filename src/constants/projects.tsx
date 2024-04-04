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
    image: '/projects/portfolio/original.jpeg',
    imageBlur:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHCAkIBgoJCAkMCwoMDxoRDw4ODx8WGBMaJSEnJiQhJCMpLjsyKSw4LCMkM0Y0OD0/QkNCKDFITUhATTtBQj//2wBDAQsMDA8NDx4RER4/KiQqPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz//wAARCAANABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCBQf/xAAhEAABAwQBBQAAAAAAAAAAAAABAgMRAAQhQRIFEyJCkf/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EACARAAICAQQDAQAAAAAAAAAAAAABAgMRBBIiUhMUFTH/2gAMAwEAAhEDEQA/AMoZuLhkJabdKBoTjNaVffTwUmsATcvLxOFXBII9SDT9zUd2AsUqX5cZndOuMprc1kYNkLWlJBzAmahGHkmk3+iLYdJbInur+Cux8iHdle8RdZDaygGeO6oelVXHOSSZ/9k=',
    readmeUrl:
      'https://raw.githubusercontent.com/dpnunez/portfolio/main/README.md',
    githubLink: 'https://github.com/dpnunez/portfolio',
    shortDescription: 'A personal portfolio made with Next.js and TypeScript.',
    link: 'https://github.com/dpnunez/portfolio',
    tags: ['react', 'node'],
  },
]
