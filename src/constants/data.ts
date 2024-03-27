interface MenuItem {
  label: string
  name: string
  href: string
  subItems?: MenuItem[]
}

export const menu: MenuItem[] = [
  {
    label: 'About',
    name: 'about.ts',
    href: '/about',
    subItems: [
      {
        label: 'Skills',
        name: 'skills.ts',
        href: '/skills',
        subItems: [
          {
            label: 'Languages',
            name: 'languages.ts',
            href: '/languages',
          },
          {
            label: 'Frameworks',
            name: 'frameworks.ts',
            href: '/frameworks',
          },
          {
            label: 'Tools',
            name: 'tools.ts',
            href: '/tools',
          },
        ],
      },
      {
        label: 'Experience',
        name: 'experience.ts',
        href: '/experience',
      },
      {
        label: 'Education',
        name: 'education.ts',
        href: '/education',
      },
    ],
  },
  {
    label: 'Projects',
    name: 'projects.ts',
    href: '/projects',
  },
  {
    label: 'Blog',
    name: 'blog.md',
    href: '/blog',
  },
  {
    label: 'Contact',
    name: 'contact.sql',
    href: '/contact',
  },
]
