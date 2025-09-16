import norepCover from '@/public/images/norep1.png'
import { color } from 'framer-motion';


export const DATA = {
  home: {
    hero: {
      name: "Raúl Brito",
      title: "Full Stack Web & Mobile Developer",
      subtitle:
        "Construyo experiencias web rápidas, accesibles y visualmente atractivas.",
    },
    skills: {
      sectionTitle: "Habilidades y experiencia  ",
      sectionDescription:
        "Especializados en crear experiencias digitales modernas con tecnologías de vanguardia.",
      overview: [
        {
          name: "Desarrollo Frontend",
          level: 90,
          icon: "lucide:code",
          color: "primary",
        },
        {
          name: "Diseño de Sistemas",
          level: 70,
          icon: "lucide:layout-dashboard",
          color: "secondary",
        },
        {
          name: "Desarrollo Mobile",
          level: 85,
          icon: "lucide:smartphone",
          color: "success",
        },
        {
          name: "Desarrollo Backend",
          level: 70,
          icon: "lucide:database",
          color: "warning",
        },
      ],
    },
    testimonials: {
      sectionTitle: "Client Testimonials",
      sectionDescription: "What clients say about working together",
      items: [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "Product Manager at TechNova",
          content:
            "The design system created for our SaaS platform reduced our development time by 40% while improving consistency across all our products. The attention to accessibility standards was particularly impressive.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
        },
        {
          id: 2,
          name: "Michael Chen",
          role: "CTO at StartUpGrid",
          content:
            "Working with this team transformed our mobile app's user retention by 35% in just three months. Their data-driven design approach helped us identify pain points we didn't even know existed.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
        },
        {
          id: 3,
          name: "David Rodriguez",
          role: "UX Director at FinTech Global",
          content:
            "The dashboard redesign resulted in a 50% reduction in support tickets. Their ability to balance complex financial data with clean visualization is unmatched in the industry.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=3",
        },
        {
          id: 4,
          name: "Priya Patel",
          role: "E-commerce Manager at StyleHub",
          content:
            "Our conversion rate increased by 28% after implementing their checkout flow redesign. They understood our international user base better than our internal team.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=4",
        },
        {
          id: 5,
          name: "James Wilson",
          role: "Head of Product at HealthTrack",
          content:
            "The healthcare app we built together received FDA approval largely due to its intuitive patient interface. Their understanding of regulatory requirements saved us months of rework.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=5",
        },
        {
          id: 6,
          name: "Lisa Nguyen",
          role: "Marketing Director at EduTech Solutions",
          content:
            "Our user onboarding completion rate went from 65% to 92% after their redesign. The way they simplified complex educational concepts into clear interfaces was remarkable.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=6",
        },
        {
          id: 7,
          name: "Thomas Okafor",
          role: "Founder at AgriTech Africa",
          content:
            "They designed an agricultural monitoring app that works perfectly even in low-connectivity rural areas. Cultural sensitivity and technical innovation in perfect balance.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=7",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Raúl Brito",
      title: "Desarrollador Full-Stack",
      image:
        "https://res.cloudinary.com/devq06psf/image/upload/v1750626859/chic_soba_apc1ht.png",
      description: [
        "Soy un desarrollador full-stack creativo con pasión por los desafios lógicos y el código limpio. Me centro en crear sitios web y aplicaciones web atractivos, funcionales y de alto rendimiento.",
        "Mi enfoque es mayormente dirigido hacia mis usuarios: disfruto convirtiendo problemas complejos en experiencias elegantes para mis clientes. Trabajo principalmente con frameworks modernos como React, Vite y TailwindCSS.",
        "Además de codear, disfruto del arte y la combinación de lo técnico con lo elegante, el desarrollo de videojuegos y el pixelart me ayudan a mantener mis habilidades e ideas frescas constantemente.",
      ],
    },
    education: [
      {
        title: "Ing. Sistemas - U.E.C.P Santiago Mariño",
        date: "2018 - 2020",
        icon: "mdi:palette",
        description:
          "Aprendí los conceptos básicos de la programación, desde los inicios con C++, VisualBasic y Java, hasta el prototipado de aplicaciones.",
      },
      {
        title: "React: De cero a experto - Udemy Fernando Herrera",
        date: "2019 - 2020",
        icon: "mdi:school",
        description:
          "Desarrollé mis habilidades como programador web, masterizando React como mi framework y profundizando en el espectro MERN dirigido al Full-Stack",
      },
      {
        title: "React: Aplicaciones en tiempo real - Udemy Fernando Herrera",
        date: "2020 - 2020",
        icon: "mdi:school-outline",
        description:
          "Expandí mis conocimientos hacia los Web Sockets para la creación de aplicaciones en tiempo real, como Geolocation y chats virtuales.",
      },
    ],
    experience: [
      {
        title: "Freelancer (Remote)",
        date: "2020 - 2022",
        icon: "mdi:briefcase",
        description:
          "Como freelancer he tenido la oportunidad de perfeccionar un gran repertorio de tecnologías en el Front y Backend, además de interactuar con múltiples clientes y creando herramientas en base a las necesidades de mis usuarios.",
      },
      {
        title: "Faindit",
        date: "2022 - 2023",
        icon: "mdi:code-tags",
        description:
          "Encargado de la planificación y el desarrollo del proyecto, incluyendo: base de datos, API RESTful, front-end para mobile y microservicios como S3 (AWS), hosting y dominio.",
      },
      {
        title: "Academia de flamenco Andalucía ",
        date: "03/2023 - 08/2023",
        icon: "mdi:monitor-dashboard",
        description:
          "Desarrollo Mobile, Backend, Estadísticas de invitados y administración de entradas para evento cultural.",
      },
      {
        title: "NoRep",
        date: "11/2023 - 06/2025",
        icon: "mdi:code-tags",
        description:
          "Encargado de la creación de un sistema administrativo para la administración de eventos Crossfit, con tabulación por participantes y categorías. Implementado con lógica Tie-Brake en base al rendimiento de los competidores.",
      },
    ],
    technologies: {
      frontend: {
        description:
          "Creo interfaces de usuario dinámicas y responsivas utilizando marcos de JavaScript modernos y TailwindCSS.",
        tools: [
          { name: "React & React native", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
          { name: "Svelte", icon: "logos:svelte-icon" },
          { name: "Expo", icon: "file-icons:expo" },
        ],
      },
      backend: {
        description:
          "Construyo API rápidas y backends escalables utilizando Node.js o Deno con MongoDB o Supabase",
        tools: [
          { name: "Deno", icon: "logos:deno" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "MongoDB", icon: "logos:mongodb-icon" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "PostgresSQL", icon: "logos:postgresql" },
          { name: "Supabase", icon: "simple-icons:supabase" },
        ],
      },
      diseñoDeSistemas: {
        description:
          "Diseño y prototipeo aplicaciones o funciones para discutirlas con clientes y usuarios.",
        tools: [
          { name: "Figma", icon: "skill-icons:figma-dark" },
          { name: "Miro", icon: "logos:miro-icon", },
          { name: "Notion", icon: "logos:notion-icon" },
        ],
      },
      microservicios: {
        description:
          "Dependiendo de la complejidad del proyecto, soy capaz de integrar microservicios para facilitar el trabajo.",
        tools: [
          { name: "Cloudinary", icon: "logos:cloudinary-icon" },
          { name: "AWS S3", icon: "logos:aws-s3" },
          { name: "Vercel", icon: "skill-icons:vercel-light",color:'#fff' },
          { name: "Heroku", icon: "cib:heroku", color:'#fff' },
          { name: "Maps", icon: "logos:google-maps" },
          { name: "Play Console", icon: "logos:google-play-console-icon" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Proyectos destacados",
    sectionDescription:
      "Una selección de mis proyectos recientes que muestran mi experiencia en diseño de sistemas y desarrollo de aplicaciones.",
    work: [
      {
        id: 1,
        title: "NoRep App",
        description:
          "Una aplicación web y móvil de CrossFit con gestión de competiciones y logística de inscripción de usuarios.",
        image: 'https://res.cloudinary.com/deliveryplanet/image/upload/v1756179445/Folio/norep1_vp5pnb.png',
        gallery: [
          "https://res.cloudinary.com/deliveryplanet/image/upload/v1756179445/Folio/norep1_vp5pnb.png",
          "https://res.cloudinary.com/deliveryplanet/image/upload/v1756179445/Folio/norep2_kf3ia1.png",
          "https://res.cloudinary.com/deliveryplanet/image/upload/v1756179445/Folio/norep3_yfh8fj.png",
          "https://res.cloudinary.com/deliveryplanet/image/upload/v1756179445/Folio/norep4_aw2vid.png",
        ],
        category: "App Full-stack",
        details:
          "NoRep es la herramienta definitiva para atletas y organizadores de eventos de CrossFit. Simplifica la creación, gestión y seguimiento de competiciones. Diseñada con un sistema de desempate basado en el rendimiento de los atletas. Desarrollada con React y React Native, ¡Próximamente en Google Play!.",
        github: undefined,
        playstore: 'https://play.google.com/store/apps/details?id=norep.app',
        live: "https://norep.com.ve",
        tech: [
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "React", icon: "logos:react" },
          { name: "Expo", icon: "file-icons:expo" },
          { name: "NodeJS", icon: "logos:nodejs-icon" },
          { name: "MongoDB", icon: "simple-icons:mongodb" },
          // { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
        ],
      },
      {
        id: 2,
        title: "Faindit",
        description:
          "Mobile e-commerce app con registro para Organizaciones, Marketplace y buscador de empleos.",
        image: "https://res.cloudinary.com/deliveryplanet/image/upload/v1756180425/Folio/f0_ni65eh.png",
        gallery: [
          "https://res.cloudinary.com/deliveryplanet/image/upload/v1756180425/Folio/f0_ni65eh.png",
          "https://res.cloudinary.com/deliveryplanet/image/upload/v1756180425/Folio/f2_jyjiba.png",
          "https://res.cloudinary.com/deliveryplanet/image/upload/v1756180425/Folio/f1_ddwln2.png",
        ],
        category: "Startup",
        details:
          "Una E-Commerce App en concepto, desarollada con React y TailwindCSS. Incluye listados de productos, filtros avanzados, mas de 100 categorías, un sistema de carrito de compras y pago. Con logística adminsitrativa para emprendedores y marketplace para los usuarios.",
        github: "https://github.com",
        live: undefined,
        tech: [
          { name: "React Native", icon: "logos:react" },
          { name: "Expo", icon: "simple-icons:expo" },
          { name: "NodeJS", icon: "logos:nodejs-icon" },
          { name: "MongoDB", icon: "simple-icons:mongodb" },
        ],
      },
      // {
      //   id: 3,
      //   title: "Ticket Master",
      //   description:
      //     "Aplicación móvil para la creación y administración de entradas para eventos mediante códigos QR.",
      //   image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
      //   gallery: [
      //     "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
      //     "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-1",
      //     "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-2",
      //     "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-3",
      //   ],
      //   category: "Mobile Development",
      //   details:
      //     "Aplicación sencilla que consta de un dashboard para la creación del evento, y otro para el proceso y escaneo de códigos QR proveniente de las entradas previamente creadas.",
      //   github: "https://github.com",
      //   live: undefined,
      //   tech: [
      //     { name: "React", icon: "logos:react" },
      //     { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
      //     { name: "Expo", icon: "simple-icons:expo" },
      //     { name: "NodeJS", icon: "logos:nodejs-icon" },
      //     { name: "Supabase", icon: "simple-icons:supabase" },
      //   ],
      // },
    ],
  },
  contact: {
    heading:
      "¿Tienes un proyecto en mente? Contáctanos y creemos algo increíble.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.017947223557!2d-122.41941508468191!3d37.774929779759245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbb69f3ef%3A0x4c80b42c33b6a77d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1715701234567!5m2!1sen!2sus",
      address: "San Francisco, CA",
    },
  },
  morphingTexts: {
    about: ["Creativo", "Apasionado", "Desarrollador"] as const,
    projects: ["Mis Proyectos", "Experimentos", "Ideas"] as const,
    contact: ["Desarrollemos", "La Web", "Juntos"] as const,
  },
  navigation: [
    { name: "Inicio", href: "/", icon: "lucide:home" },
    { name: "Acerca de mi", href: "/about", icon: "lucide:user" },
    { name: "Proyectos", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contacto", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Raúl Brito",
    description: "Siempre interesado en nuevos proyectos y colaboraciones.",
    contact: {
      email: "raulbritogonz@gmail.com",
      phone: "+58 414-6382366",
      location: "Zulia, Venezuela",
    },
    socialLinks: [
      // { platform: "X", url: "https://x.com", icon: "simple-icons:x" },
      { platform: "GitHub", url: "https://github.com/RauBrito", icon: "mdi:github" }
      // ,{
      //   platform: "Dribbble",
      //   url: "https://dribbble.com",
      //   icon: "mdi:dribbble",
      // },
    ],
    services: ["Diseño de Sistema", "Desarrollo Full-Stack", "Consultas"],
  },
} as const;


// export const DATA = {
//   home: {
//     hero: {
//       name: "Raúl Brito",
//       title: "Full Stack Web & Mobile Developer",
//       subtitle:
//         "I build fast, accessible and visually engaging web experiences.",
//     },
//     skills: {
//       sectionTitle: "Skills & Expertise",
//       sectionDescription:
//         " Specialized in creating modern digital experiences with cutting-edge technologies",
//       overview: [
//         {
//           name: "Frontend Development",
//           level: 90,
//           icon: "lucide:code",
//           color: "primary",
//         },
//         {
//           name: "UI/UX Design",
//           level: 70,
//           icon: "lucide:layout-dashboard",
//           color: "secondary",
//         },
//         {
//           name: "Mobile Development",
//           level: 85,
//           icon: "lucide:smartphone",
//           color: "success",
//         },
//         {
//           name: "Backend Development",
//           level: 70,
//           icon: "lucide:database",
//           color: "warning",
//         },
//       ],
//     },
//     testimonials: {
//       sectionTitle: "Client Testimonials",
//       sectionDescription: "What clients say about working together",
//       items: [
//         {
//           id: 1,
//           name: "Sarah Johnson",
//           role: "Product Manager at TechNova",
//           content:
//             "The design system created for our SaaS platform reduced our development time by 40% while improving consistency across all our products. The attention to accessibility standards was particularly impressive.",
//           avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
//         },
//         {
//           id: 2,
//           name: "Michael Chen",
//           role: "CTO at StartUpGrid",
//           content:
//             "Working with this team transformed our mobile app's user retention by 35% in just three months. Their data-driven design approach helped us identify pain points we didn't even know existed.",
//           avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
//         },
//         {
//           id: 3,
//           name: "David Rodriguez",
//           role: "UX Director at FinTech Global",
//           content:
//             "The dashboard redesign resulted in a 50% reduction in support tickets. Their ability to balance complex financial data with clean visualization is unmatched in the industry.",
//           avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=3",
//         },
//         {
//           id: 4,
//           name: "Priya Patel",
//           role: "E-commerce Manager at StyleHub",
//           content:
//             "Our conversion rate increased by 28% after implementing their checkout flow redesign. They understood our international user base better than our internal team.",
//           avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=4",
//         },
//         {
//           id: 5,
//           name: "James Wilson",
//           role: "Head of Product at HealthTrack",
//           content:
//             "The healthcare app we built together received FDA approval largely due to its intuitive patient interface. Their understanding of regulatory requirements saved us months of rework.",
//           avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=5",
//         },
//         {
//           id: 6,
//           name: "Lisa Nguyen",
//           role: "Marketing Director at EduTech Solutions",
//           content:
//             "Our user onboarding completion rate went from 65% to 92% after their redesign. The way they simplified complex educational concepts into clear interfaces was remarkable.",
//           avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=6",
//         },
//         {
//           id: 7,
//           name: "Thomas Okafor",
//           role: "Founder at AgriTech Africa",
//           content:
//             "They designed an agricultural monitoring app that works perfectly even in low-connectivity rural areas. Cultural sensitivity and technical innovation in perfect balance.",
//           avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=7",
//         },
//       ],
//     },
//   },
//   about: {
//     profile: {
//       name: "Raúl Brito",
//       title: "Full Stack Developer",
//       image:
//         "https://res.cloudinary.com/devq06psf/image/upload/v1750626859/chic_soba_apc1ht.png",
//       description: [
//         "I'm a creative full-stack developer with a passion for UI/UX design and clean code. I focus on building beautiful, functional, and high-performance websites and web apps.",
//         "My approach is both technical and aesthetic — I enjoy turning complex problems into elegant user experiences. I work primarily with modern frameworks like React, Vite, and TailwindCSS.",
//         "Outside of code, I enjoy motion design, product strategy, and always pushing the boundaries of front-end development.",
//       ],
//     },
//     education: [
//       {
//         title: "High School of Art and Design",
//         date: "2003 - 2006",
//         icon: "mdi:palette",
//         description:
//           "Focused on foundational art and visual design principles, which sparked my early interest in creative problem solving. Explored traditional media, digital illustration, and visual storytelling.",
//       },
//       {
//         title: "University of Technology and Design",
//         date: "2006 - 2010",
//         icon: "mdi:school",
//         description:
//           "Earned a Bachelor's degree in Computer Science with a minor in Design. Gained strong skills in software development, user interface engineering, data structures, and human-computer interaction.",
//       },
//       {
//         title: "Institute of Interactive Media",
//         date: "2011 - 2012",
//         icon: "mdi:school-outline",
//         description:
//           "Completed a Master's degree specializing in UX/UI Design and Front-End Development. Merged technical expertise with visual communication to design user-centered digital products and prototypes.",
//       },
//     ],
//     experience: [
//       {
//         title: "Creative Director",
//         date: "2018 - Present",
//         icon: "mdi:briefcase",
//         description:
//           "Lead creative and development teams to build digital experiences that combine innovation with user empathy. Oversee branding, UI/UX strategy, and development pipelines for tech startups and clients.",
//       },
//       {
//         title: "Senior UX Engineer",
//         date: "2015 - 2018",
//         icon: "mdi:monitor-dashboard",
//         description:
//           "Designed and implemented high-fidelity web interfaces using React, Figma, and Tailwind. Collaborated cross-functionally with developers and designers to craft intuitive user flows and interactions.",
//       },
//       {
//         title: "Front-End Developer & Designer",
//         date: "2012 - 2015",
//         icon: "mdi:code-tags",
//         description:
//           "Developed responsive websites and applications with a focus on accessibility, visual aesthetics, and performance. Delivered pixel-perfect interfaces from wireframes to production code.",
//       },
//     ],
//     technologies: {
//       frontend: {
//         description:
//           "I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.",
//         tools: [
//           { name: "React", icon: "logos:react" },
//           { name: "Next.js", icon: "skill-icons:nextjs-dark" },
//           { name: "Tailwind", icon: "logos:tailwindcss-icon" },
//           { name: "TypeScript", icon: "logos:typescript-icon" },
//           { name: "HTML5", icon: "logos:html-5" },
//           { name: "CSS3", icon: "logos:css-3" },
//         ],
//       },
//       backend: {
//         description:
//           "I build fast APIs and scalable backends using Node.js, Bun, and Python.",
//         tools: [
//           { name: "Node.js", icon: "logos:nodejs-icon" },
//           { name: "Bun", icon: "logos:bun" },
//           { name: "Python", icon: "logos:python" },
//           { name: "MySQL", icon: "logos:mysql-icon" },
//           { name: "PostgresSQL", icon: "logos:postgresql" },
//           { name: "OpenAI", icon: "simple-icons:openai" },
//         ],
//       },
//       uiUx: {
//         description:
//           "I design smooth, user-centered interfaces and high-fidelity prototypes.",
//         tools: [
//           { name: "Figma", icon: "logos:figma" },
//           { name: "Framer", icon: "simple-icons:framer", color: "#0055FF" },
//           { name: "Notion", icon: "logos:notion-icon" },
//         ],
//       },
//       graphicDesign: {
//         description:
//           "My graphic work includes logos, branding, and posters using Adobe Suite.",
//         tools: [
//           { name: "Photoshop", icon: "logos:adobe-photoshop" },
//           { name: "Illustrator", icon: "logos:adobe-illustrator" },
//         ],
//       },
//       motionDesign: {
//         description:
//           "I animate UI flows and cinematic intros using After Effects and Blender.",
//         tools: [
//           { name: "After Effects", icon: "logos:adobe-after-effects" },
//           { name: "Premiere Pro", icon: "logos:adobe-premiere" },
//           { name: "Blender", icon: "logos:blender" },
//         ],
//       },
//     },
//   },
//   projects: {
//     sectionTitle: "Featured Projects",
//     sectionDescription:
//       "A selection of my recent projects showcasing UI/UX design and development expertise",
//     work: [
//       {
//         id: 1,
//         title: "NoRep App",
//         description:
//           "A Crossfit web & mobile application with competition management and user inscription logistic.",
//         image: norepCover,
//         gallery: [
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-1",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-2",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-3",
//         ],
//         category: "App Full-stack",
//         details:
//           "A feature-rich digital banking app built with React and TailwindCSS, integrating seamless animations via Framer Motion. Designed with a mobile-first approach and a modular component system powered by TypeScript and Vite.",
//         github: "https://github.com",
//         live: "https://example.com",
//         tech: [
//           { name: "React", icon: "logos:react" },
//           { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
//           { name: "TypeScript", icon: "logos:typescript-icon" },
//           { name: "Expo", icon: "simple-icons:expo" },
//         ],
//       },
//       {
//         id: 2,
//         title: "Faindit",
//         description:
//           "Mobile e-commerce app with ",
//         image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
//         gallery: [
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-1",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-2",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-3",
//         ],
//         category: "Startup",
//         details:
//           "A fully functional e-commerce platform built with React and TailwindCSS. Features product listings, advanced filters, cart and checkout system, and a modern UI with responsive design for all devices.",
//         github: "https://github.com",
//         live: "https://example.com",
//         tech: [
//           { name: "React", icon: "logos:react" },
//           { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
//           { name: "TypeScript", icon: "logos:typescript-icon" },
//           { name: "PostgreSQL", icon: "logos:postgresql" },
//         ],
//       },
//       {
//         id: 3,
//         title: "Travel Booking System",
//         description:
//           "Comprehensive booking platform for flights, hotels, and rentals with live availability.",
//         image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
//         gallery: [
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-1",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-2",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-3",
//         ],
//         category: "Web Development",
//         details:
//           "A modern travel booking system built with Next.js and TailwindCSS. Users can search and book flights, hotels, and car rentals with real-time availability and intuitive UI components powered by HeroUI.",
//         github: "https://github.com",
//         live: "https://example.com",
//         tech: [
//           { name: "Next.js", icon: "skill-icons:nextjs-dark" },
//           { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
//           { name: "TypeScript", icon: "logos:typescript-icon" },
//         ],
//       },
//       {
//         id: 4,
//         title: "AI Chat Assistant",
//         description:
//           "Smart customer support assistant with contextual awareness and real-time replies.",
//         image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
//         gallery: [
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-1",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-2",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-3",
//         ],
//         category: "Applications",
//         details:
//           "AI-powered chat assistant developed with React and TailwindCSS. Integrated with OpenAI’s GPT API for contextual conversations, deployed via Vercel with real-time response and adaptive UI.",
//         github: "https://github.com",
//         live: "https://example.com",
//         tech: [
//           { name: "React", icon: "logos:react" },
//           { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
//           { name: "OpenAI API", icon: "simple-icons:openai" },
//           { name: "Vercel", icon: "simple-icons:vercel" },
//         ],
//       },
//       {
//         id: 5,
//         title: "Portfolio API & CMS",
//         description:
//           "Headless API backend with admin-friendly CMS capabilities.",
//         image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
//         gallery: [
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-1",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-2",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-3",
//         ],
//         category: "Backend Services",
//         details:
//           "A modular REST API built with Node.js and Express, powering dynamic portfolio websites. It includes JWT-based authentication, MySQL integration, and a Swagger-documented CMS interface for easy content management by non-developers.",
//         github: "https://github.com",
//         tech: [
//           { name: "Node.js", icon: "logos:nodejs-icon" },
//           { name: "MySQL", icon: "logos:mysql-icon" },
//           { name: "JWT", icon: "simple-icons:jsonwebtokens" },
//           { name: "Swagger", icon: "simple-icons:swagger" },
//         ],
//       },
//       {
//         id: 6,
//         title: "Fitness Tracker App",
//         description:
//           "Monitor workouts, calorie intake, and goals in one place.",
//         image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6",
//         gallery: [
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-1",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-2",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-3",
//         ],
//         category: "Applications",
//         details:
//           "A cross-platform fitness application developed with React Native and styled using TailwindCSS via Expo. It offers calorie tracking, workout logging, analytics via charts, and custom goal-setting—all within a mobile-optimized interface.",
//         github: "https://github.com",
//         live: "https://example.com",
//         tech: [
//           { name: "React Native", icon: "logos:react" },
//           { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
//           { name: "Expo", icon: "simple-icons:expo" },
//         ],
//       },
//       {
//         id: 7,
//         title: "Content Scheduler",
//         description:
//           "Plan, schedule, and automate your social media posts effortlessly.",
//         image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7",
//         gallery: [
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-1",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-2",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-3",
//         ],
//         category: "Applications",
//         details:
//           "A productivity app designed for content creators featuring calendar syncing, automated post publishing, rich media previews, and cloud synchronization for seamless cross-device access.",
//         github: "https://github.com",
//         live: "https://example.com",
//         tech: [
//           { name: "Next.js", icon: "skill-icons:nextjs-dark" },
//           { name: "MySQL", icon: "logos:mysql-icon" },
//           { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
//         ],
//       },
//       {
//         id: 8,
//         title: "Real Estate Dashboard",
//         description:
//           "Comprehensive dashboard to manage properties, leads, and sales pipelines effectively.",
//         image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8",
//         gallery: [
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-1",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-2",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-3",
//         ],
//         category: "Web Development",
//         details:
//           "An admin panel tailored for real estate professionals featuring interactive data visualizations, lead tracking, and CRM system integrations to streamline client and property management.",
//         github: "https://github.com",
//         live: "https://example.com",
//         tech: [
//           { name: "React", icon: "logos:react" },
//           { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
//           { name: "Chart.js", icon: "simple-icons:chartdotjs" },
//         ],
//       },
//       {
//         id: 9,
//         title: "Crypto Wallet API",
//         description:
//           "Robust backend API for secure cryptocurrency operations and blockchain interactions.",
//         image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9",
//         gallery: [
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-1",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-2",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-3",
//         ],
//         category: "Backend Services",
//         details:
//           "Secure Node.js API supporting Ethereum and Bitcoin transactions. Features transaction signing, wallet address creation, and real-time blockchain event monitoring using Web3.js. Enhanced with hardware security module (HSM) integration for secure key management.",
//         github: "https://github.com",
//         tech: [
//           { name: "Node.js", icon: "logos:nodejs-icon" },
//           { name: "Ethereum", icon: "logos:ethereum" },
//           { name: "Web3.js", icon: "simple-icons:web3dotjs" },
//           { name: "PostgreSQL", icon: "logos:postgresql" },
//           { name: "JWT", icon: "simple-icons:jsonwebtokens" },
//         ],
//       },
//       {
//         id: 10,
//         title: "SaaS Subscription API",
//         description:
//           "Backend API managing SaaS subscriptions, billing, and user accounts.",
//         image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10",
//         gallery: [
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-1",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-2",
//           "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-3",
//         ],
//         category: "Backend Services",
//         details:
//           "RESTful API supporting SaaS subscription workflows with Stripe integration, usage metering, tiered pricing, webhook handling, trial periods, and analytics. Optimized for high concurrency with Redis caching.",
//         github: "https://github.com",
//         tech: [
//           { name: "Node.js", icon: "logos:nodejs-icon" },
//           { name: "Stripe", icon: "logos:stripe" },
//           { name: "PostgreSQL", icon: "logos:postgresql" },
//           { name: "Redis", icon: "logos:redis" },
//           { name: "JWT", icon: "simple-icons:jsonwebtokens" },
//         ],
//       },
//     ],
//   },
//   contact: {
//     heading:
//       "Have a project in mind? Get in touch and let's create something amazing.",
//     location: {
//       mapSrc:
//         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.017947223557!2d-122.41941508468191!3d37.774929779759245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbb69f3ef%3A0x4c80b42c33b6a77d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1715701234567!5m2!1sen!2sus",
//       address: "San Francisco, CA",
//     },
//   },
//   morphingTexts: {
//     about: ["Creative", "Passionate", "Developer"] as const,
//     projects: ["My Work", "Creations", "Experiments", "Innovations"] as const,
//     contact: ["Let's", "Build", "Together"] as const,
//   },
//   navigation: [
//     { name: "Home", href: "/", icon: "lucide:home" },
//     { name: "About", href: "/about", icon: "lucide:user" },
//     { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
//     { name: "Contact", href: "/contact", icon: "lucide:send" },
//   ],
//   footer: {
//     name: "Raúl Brito",
//     description: "Always interested in new projects and collaborations.",
//     contact: {
//       email: "hello@example.com",
//       phone: "+1 (555) 123-4567",
//       location: "San Francisco, CA",
//     },
//     socialLinks: [
//       { platform: "X", url: "https://x.com", icon: "simple-icons:x" },
//       { platform: "GitHub", url: "https://github.com", icon: "mdi:github" },
//       {
//         platform: "LinkedIn",
//         url: "https://linkedin.com",
//         icon: "mdi:linkedin",
//       },
//       {
//         platform: "Dribbble",
//         url: "https://dribbble.com",
//         icon: "mdi:dribbble",
//       },
//     ],
//     services: ["UI/UX Design", "Web Development", "Mobile Apps", "Consulting"],
//   },
// } as const;
