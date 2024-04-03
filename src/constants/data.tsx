import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { SiTypescript } from 'react-icons/si'

export const menu: MenuItem[] = [
  {
    label: 'About',
    name: '/about',
    href: '/about/profile.ts',
    subItems: [
      {
        label: 'Profile',
        name: 'profile.ts',
        href: '/about/profile.ts',
      },
      {
        label: 'Skills',
        name: 'skills.ts',
        href: '/about/skills.ts',
      },
      {
        label: 'Experience',
        name: 'experience.ts',
        href: '/about/experience.ts',
      },
      {
        label: 'Education',
        name: 'education.ts',
        href: '/about/education.ts',
      },
    ],
  },
  {
    label: 'Projects',
    name: '/projects',
    href: '/projects/data.sql',
  },
  {
    label: 'Blog',
    name: 'blog.md',
    href: '/blog',
  },
  {
    label: 'Guest Book',
    name: 'guest-book',
    href: '/guest-book/data.sql',
  },
  {
    label: 'Contact',
    name: '/contact',
    href: '/contact/form.ts',
    subItems: [
      {
        label: 'Form',
        name: 'form.ts',
        href: '/contact',
        Icon: <SiTypescript />,
      },
      {
        label: 'Email',
        name: 'Email',
        href: 'mailto:daniel.portonunez@gmail.com',
        Icon: <MdOutlineAlternateEmail />,
        target: '_blank',
      },
      {
        label: 'Github',
        name: 'github',
        href: 'https://github.com/dpnunez',
        Icon: <FaGithubSquare />,
        target: '_blank',
      },
      {
        label: 'LinkedIn',
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/daniel-porto-nunez/',
        Icon: <FaLinkedin />,
        target: '_blank',
      },
    ],
  },
]

export const projectsTypes: ProjectTypes[] = [
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
