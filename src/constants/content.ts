export const about = {
  profile: (age: number) => `const name = "Daniel Pôrto Núñez"

const age = ${age};

const location = {
  city: "Pelotas",
  state: "Rio Grande do Sul",
  country: "Brazil",
}

let hobbies = {
  chess: {
    chesscom: {
      nick: "portoEuru"
      rapid: 1000,
      blitz: 800
    }
  },
  cs2: { /*RIP csgo*/
    faceit: 8,
    gc: 17
  },
  league: {
    nick: "Dubov",
    rank: "Gold"
  }
  soccer_team: "Grêmio"
}
`,

  skills: `const skills = {
  languages: ["JavaScript", "TypeScript", "Swift", "Elixir"],
  frameworks: [
    "React", 
    "Next.js", 
    "Vue", 
    "Svelte", 
    "Express", 
    "NestJS", 
    "Phoenix"
  ],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  orm: ["TypeORM", "Prisma"],
  tools: [
    "Git", 
    "Docker", 
    "Vitest", 
    "Playwright", 
    "VSCode (sorry theprimeagen)", 
    "XCode",
    "Figma",
    "TablePlus"
  ],
}
`,

  work: `const role = "FullStack Engineer"

const timeline = [
  {
    company: "nav9",
    role: "FullStack Engineer",
    period: "2019 dec - 2023 dec",
    description: 
      "Considering that nav9 is a software house, I've worked with a lot of different technologies and projects."
  },
  {
    company: "nav9",
    role: "Intern",
    period: "2019 jul - 2019 dec",
    description: "📍 Starting my carrer on web world"
  }
]`,

  education: `const education = [
  {
    institution: "Universidade Federal de Pelotas",
    course: "Bacharel in Computer Science",
    period: "2020 - 2025 (expected)",
  },
  {
    institution: "Instituto Federal Sul-rio-grandense",
    course: "Technical in electronics",
    period: "2015 - 2019",
  }
]`,
}

export const contactData = {
  req: (
    name: string,
    email: string,
    message: string,
  ) => `function ContactForm() {
  const methods = useForm<Schema>();

  const onSubmit = async (data: Schema) => {
    try {
      await ky.post('/api/contact', {
        json: {
          name: "${name}",
          email: "${email}",
          message: "${message}"
        },
      })

      alert("Message sent!")
    } catch (error) {
      // Press F to my form (and send a sentry report)
    }
  }

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      {/* inputs */}
      <Button type="submit">Send</Button>
    </form>
  )
}`,
}

export const projects = {
  list: [
    {
      title: 'Portfolio',
      slug: 'portfolio',
      image: 'https://source.unsplash.com/random',
      shortDescription:
        'A personal portfolio made with Next.js and TypeScript.',
      link: 'https://github.com/dpnunez/portfolio',
      tags: ['react', 'node'],
    },
    {
      title: 'Delivery',
      slug: 'delivery',
      image: 'https://source.unsplash.com/random?delivery',
      shortDescription: 'A delivery system made with React and Node.',
      link: '',
      tags: ['react', 'node'],
    },
    {
      title: 'E-commerce',
      slug: 'e-commerce',
      image: 'https://source.unsplash.com/random?commerce',
      shortDescription: 'An e-commerce made with Vue and Node.',
      link: '',
      tags: ['vue', 'node'],
    },
    {
      title: 'Blog',
      slug: 'blog',
      image: 'https://source.unsplash.com/random?blog',
      shortDescription: 'A blog made with Svelte and Node.',
      link: '',
      tags: ['svelte', 'node'],
    },
    {
      title: 'Social network',
      slug: 'social-network',
      image: 'https://source.unsplash.com/random?social',
      shortDescription: 'A social network made with React and Node.',
      link: '',
      tags: ['react', 'node'],
    },
    {
      title: 'Dashboard',
      slug: 'dashboard',
      image: 'https://source.unsplash.com/random?dashboard',
      shortDescription: 'A dashboard made with Vue and Node.',
      link: '',
      tags: ['vue', 'node'],
    },
  ],
  content: {
    portfolio: {
      description: `# Portfolio
This is my personal portfolio, made with Next.js and TypeScript.`,
      techs: ['next', 'typescript'],
      images: ['https://source.unsplash.com/random'],
    },
  },
}
