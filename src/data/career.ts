export interface SubRole {
  title: {
    pt: string;
    en: string;
  };
  period: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}

export interface CareerExperience {
  company: string;
  location: string;
  current?: boolean;
  role: {
    pt: string;
    en: string;
  };
  period: {
    pt: string;
    en: string;
  };
  duration?: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  skills: string[];
  subRoles?: SubRole[];
}

export interface EducationItem {
  institution: string;
  degree: {
    pt: string;
    en: string;
  };
  field: {
    pt: string;
    en: string;
  };
  period: string;
  status: {
    pt: string;
    en: string;
  };
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  highlight?: boolean;
}

export interface LanguageItem {
  language: {
    pt: string;
    en: string;
  };
  proficiency: {
    pt: string;
    en: string;
  };
}

export const careerSummary = {
  pt: {
    title: 'Carreira Profissional',
    subtitle:
      'Mais de uma década de vivência no ecossistema de tecnologia, atuando com engenharia de software de alta escala, arquitetura front-end e contínua especialização em IA.',
    currentRole: 'Senior Software Engineer no Mercado Livre',
    location: 'São Paulo, Brasil',
    linkedInCta: 'Ver perfil no LinkedIn',
    downloadResume: 'Entrar em contato',
  },
  en: {
    title: 'Professional Career',
    subtitle:
      'Over a decade of experience across the tech ecosystem, specializing in large-scale software engineering, modern frontend architecture, and applied AI.',
    currentRole: 'Senior Software Engineer at Mercado Libre',
    location: 'São Paulo, Brazil',
    linkedInCta: 'View LinkedIn Profile',
    downloadResume: 'Get in Touch',
  },
};

export const careerExperiences: CareerExperience[] = [
  {
    company: 'Mercado Livre',
    location: 'São Paulo, Brasil',
    current: true,
    role: {
      pt: 'Senior Software Engineer',
      en: 'Senior Software Engineer',
    },
    period: {
      pt: 'Agosto de 2023 — Presente',
      en: 'August 2023 — Present',
    },
    duration: {
      pt: 'Atual',
      en: 'Current',
    },
    description: {
      pt: 'Atuação na arquitetura e engenharia de aplicações front-end de altíssimo tráfego e impacto no maior ecossistema de e-commerce e pagamentos da América Latina. Foco contínuo em escalabilidade, resiliência, experiência do usuário e exploração de inteligência artificial aplicada ao desenvolvimento de software.',
      en: 'Architecting and building high-traffic front-end web applications at the largest e-commerce and fintech ecosystem in Latin America. Continuous focus on scalability, resilience, UX performance, and applied AI exploration in software workflows.',
    },
    skills: [
      'React',
      'TypeScript',
      'Node.js',
      'Golang',
      'Micro-frontends',
      'High Scale Architecture',
      'Applied AI',
      'Performance Optimization',
    ],
  },
  {
    company: 'Luizalabs',
    location: 'Uberlândia, MG (Remoto)',
    role: {
      pt: 'Senior Software Engineer',
      en: 'Senior Software Engineer',
    },
    period: {
      pt: 'Abril de 2021 — Agosto de 2023',
      en: 'April 2021 — August 2023',
    },
    duration: {
      pt: '2 anos e 5 meses',
      en: '2 yrs 5 mos',
    },
    description: {
      pt: 'Engenharia de software no ecossistema de inovação do Magazine Luiza. Liderança técnica na evolução de arquiteturas web, componentização escalável, micro-frontends e alinhamento estratégico com times multidisciplinares para entregas de alto impacto.',
      en: 'Software engineering within Magazine Luiza’s innovation lab. Technical leadership in modern web architectures, scalable design systems, micro-frontends, and strategic cross-functional product delivery.',
    },
    skills: ['React', 'TypeScript', 'Micro-frontends', 'REST APIs', 'Design Systems', 'Jest & Testing Library', 'CI/CD'],
  },
  {
    company: 'B2W Digital',
    location: 'São Paulo, Brasil',
    role: {
      pt: 'Senior Software Engineer / Software Engineer',
      en: 'Senior Software Engineer / Software Engineer',
    },
    period: {
      pt: 'Janeiro de 2019 — Abril de 2021',
      en: 'January 2019 — April 2021',
    },
    duration: {
      pt: '2 anos e 4 meses',
      en: '2 yrs 4 mos',
    },
    description: {
      pt: 'Atuação de alto impacto nas plataformas de e-commerce da Americanas, Submarino e Shoptime, cobrindo esteiras críticas de pós-compra e jornadas de entrega com foco em disponibilidade máxima em eventos de pico (Black Friday).',
      en: 'High-impact development across Brazilian retail giants (Americanas, Submarino, Shoptime), focusing on critical post-purchase journeys, high availability, and peak traffic resilience during events like Black Friday.',
    },
    subRoles: [
      {
        title: {
          pt: 'Senior Software Engineer',
          en: 'Senior Software Engineer',
        },
        period: {
          pt: 'Julho de 2020 — Abril de 2021 (10 meses)',
          en: 'July 2020 — April 2021 (10 mos)',
        },
        description: {
          pt: 'Liderança técnica e mentoria de desenvolvedores em iniciativas de esteira de pedidos, estabilidade de interfaces e integração de microsserviços.',
          en: 'Technical leadership and mentoring across order tracking journeys, web stability, and distributed services integrations.',
        },
      },
      {
        title: {
          pt: 'Software Engineer',
          en: 'Software Engineer',
        },
        period: {
          pt: 'Janeiro de 2019 — Julho de 2020 (1 ano e 7 meses)',
          en: 'January 2019 — July 2020 (1 yr 7 mos)',
        },
        description: {
          pt: 'Desenvolvimento e manutenção evolutiva de aplicações Single Page Applications (SPA) e SSR, otimizando tempos de carregamento e experiência de navegação.',
          en: 'Engineered SPA and SSR applications, optimizing page speeds, checkout touchpoints, and responsive UI components.',
        },
      },
    ],
    skills: ['React', 'Redux', 'Node.js', 'JavaScript (ES6+)', 'Docker', 'Distributed Systems', 'Git Flow'],
  },
  {
    company: 'Opah IT Consulting',
    location: 'São Paulo e Região, Brasil',
    role: {
      pt: 'Software Engineer / Junior Software Engineer',
      en: 'Software Engineer / Junior Software Engineer',
    },
    period: {
      pt: 'Junho de 2017 — Dezembro de 2018',
      en: 'June 2017 — December 2018',
    },
    duration: {
      pt: '1 ano e 7 meses',
      en: '1 yr 7 mos',
    },
    description: {
      pt: 'Consultoria técnica e desenvolvimento de produtos digitais robustos para grandes corporações como Gerdau, SENAC e CVC, com metodologias ágeis e arquiteturas modernas.',
      en: 'Technical consulting and application development for enterprise corporate accounts including Gerdau, SENAC, and CVC, adhering to agile best practices.',
    },
    subRoles: [
      {
        title: {
          pt: 'Software Engineer',
          en: 'Software Engineer',
        },
        period: {
          pt: 'Julho de 2017 — Dezembro de 2018 (1 ano e 6 meses)',
          en: 'July 2017 — December 2018 (1 yr 6 mos)',
        },
        description: {
          pt: 'Desenvolvimento full-stack de soluções web e integração com APIs e bancos de dados para clientes de grande porte.',
          en: 'Full-stack development of web solutions and API integrations for enterprise corporate clients.',
        },
      },
      {
        title: {
          pt: 'Junior Software Engineer',
          en: 'Junior Software Engineer',
        },
        period: {
          pt: 'Junho de 2017 — Julho de 2018 (1 ano e 2 meses)',
          en: 'June 2017 — July 2018 (1 yr 2 mos)',
        },
        description: {
          pt: 'Criação de interfaces responsivas, resolução de bugs e implementação de novas funcionalidades com JavaScript e HTML5/CSS3.',
          en: 'Created responsive web interfaces, bug fixing, and implemented features with modern JavaScript, HTML5, and CSS3.',
        },
      },
    ],
    skills: ['JavaScript', 'HTML5/CSS3', 'REST APIs', 'Agile / Scrum', 'Git'],
  },
  {
    company: 'Psychemedics Brasil',
    location: 'São Paulo e Região, Brasil',
    role: {
      pt: 'Information Technology Assistant',
      en: 'Information Technology Assistant',
    },
    period: {
      pt: 'Setembro de 2016 — Abril de 2017',
      en: 'September 2016 — April 2017',
    },
    duration: {
      pt: '8 meses',
      en: '8 mos',
    },
    description: {
      pt: 'Suporte de TI e sustentação técnica de infraestrutura, atendimento a usuários internos, manutenção de estações de trabalho e apoio à continuidade operacional de sistemas analíticos.',
      en: 'IT infrastructure support and operational maintenance, assisting internal end-users, managing workstations, and upholding analytical systems continuity.',
    },
    skills: ['IT Infrastructure', 'Help Desk', 'Troubleshooting', 'Hardware & Networks'],
  },
  {
    company: 'FUCHS Lubrificantes do Brasil',
    location: 'Barueri, SP, Brasil',
    role: {
      pt: 'Trainee',
      en: 'Trainee',
    },
    period: {
      pt: 'Abril de 2014 — Março de 2016',
      en: 'April 2014 — March 2016',
    },
    duration: {
      pt: '2 anos',
      en: '2 yrs',
    },
    description: {
      pt: 'Início no ambiente corporativo de grande porte, desenvolvendo disciplina, organização de processos internos, rotinas de suporte e comunicação profissional.',
      en: 'Early immersion in an enterprise corporate environment, developing discipline, process management, and business operations support.',
    },
    skills: ['Process Management', 'Business Operations', 'Enterprise Communication'],
  },
];

export const educationList: EducationItem[] = [
  {
    institution: 'UNIPDS',
    degree: {
      pt: 'Pós-graduação Lato Sensu',
      en: 'Postgraduate Specialization',
    },
    field: {
      pt: 'Engenharia de Software em IA Aplicada',
      en: 'Software Engineering in Applied AI',
    },
    period: '2026 — 2027',
    status: {
      pt: 'Em andamento',
      en: 'In progress',
    },
  },
  {
    institution: 'Descomplica',
    degree: {
      pt: 'Pós-graduação Lato Sensu',
      en: 'Postgraduate Specialization',
    },
    field: {
      pt: 'Engenharia de Software (Tecnologia da Informação)',
      en: 'Software Engineering (Information Technology)',
    },
    period: '2025',
    status: {
      pt: 'Concluído',
      en: 'Completed',
    },
  },
  {
    institution: 'Universidade Paulista (UNIP)',
    degree: {
      pt: 'Bacharelado',
      en: "Bachelor's Degree",
    },
    field: {
      pt: 'Sistemas de Informação (Ciências Exatas)',
      en: 'Information Systems (Exact Sciences)',
    },
    period: '2013 — 2016',
    status: {
      pt: 'Graduado',
      en: 'Graduated',
    },
  },
];

export const certificationsList: CertificationItem[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    highlight: true,
  },
  {
    title: 'Curso de Arquitetura Hexagonal',
    issuer: 'Full Cycle / Especialização Técnica',
  },
  {
    title: 'Curso de Arquitetura Baseada em Microsserviços',
    issuer: 'Especialização Técnica',
  },
  {
    title: 'Curso de Domain Driven Design (DDD)',
    issuer: 'Especialização Técnica',
  },
  {
    title: 'Curso de Sistemas Monolíticos',
    issuer: 'Especialização Técnica',
  },
  {
    title: 'Curso de Fundamentos da Arquitetura de Software',
    issuer: 'Especialização Técnica',
  },
];

export const languagesList: LanguageItem[] = [
  {
    language: {
      pt: 'Português',
      en: 'Portuguese',
    },
    proficiency: {
      pt: 'Nativo ou Bilíngue',
      en: 'Native or Bilingual',
    },
  },
  {
    language: {
      pt: 'Inglês',
      en: 'English',
    },
    proficiency: {
      pt: 'Básico (Técnico em evolução contínua)',
      en: 'Elementary (Continuous technical practice)',
    },
  },
  {
    language: {
      pt: 'Espanhol',
      en: 'Spanish',
    },
    proficiency: {
      pt: 'Básico',
      en: 'Elementary',
    },
  },
];

export const coreCompetencies = [
  {
    category: { pt: 'Arquitetura & Engenharia', en: 'Architecture & Engineering' },
    items: ['Front-End Architecture', 'Distributed Systems', 'Micro-frontends', 'Microservices', 'DDD', 'Clean Code'],
  },
  {
    category: { pt: 'Linguagens & Frameworks', en: 'Languages & Frameworks' },
    items: ['TypeScript', 'JavaScript (ESNext)', 'Golang', 'React', 'Node.js', 'Astro', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: { pt: 'Inovação & Cloud', en: 'Innovation & Cloud' },
    items: ['Applied AI & Agents', 'AWS Cloud', 'Docker', 'CI/CD Pipelines', 'Web Performance & CWV'],
  },
];
