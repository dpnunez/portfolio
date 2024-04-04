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

interface ProjectsData {
  list: Project[]
}

export const projects: ProjectsData = {
  list: [
    {
      title: 'Portfolio',
      slug: 'portfolio',
      image: '/projects/portfolio.jpeg',
      readmeUrl:
        'https://raw.githubusercontent.com/dpnunez/portfolio/main/README.md',
      githubLink: 'https://github.com/dpnunez/portfolio',
      shortDescription:
        'A personal portfolio made with Next.js and TypeScript.',
      link: 'https://github.com/dpnunez/portfolio',
      tags: ['react', 'node'],
    },
  ],
}
