interface MenuItem {
  label: string
  name: string
  href: string
  subItems?: MenuItem[]
}

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
