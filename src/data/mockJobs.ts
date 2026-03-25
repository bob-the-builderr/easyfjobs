import type { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'Stripe',
    slug: 'senior-frontend-developer-stripe',
    salary: '$140k - $180k',
    job_type: 'Full-Time',
    workplace_type: 'Remote',
    description: 'Join our world-class engineering team building the future of internet payments.',
    responsibilities: [
      'Build and maintain high-performance React components',
      'Collaborate with designers to implement pixel-perfect UIs',
      'Mentor junior developers and lead code reviews'
    ],
    requirements: [
      '5+ years of experience with React and TypeScript',
      'Strong understanding of modern CSS and responsive design',
      'Experience with performance optimization'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Unlimited PTO',
      'Home office stipend'
    ],
    tags: ['React', 'TypeScript', 'Frontend', 'Remote'],
    company_logo_url: '',
    application_url: 'https://stripe.com/jobs',
    featured: true,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'Figma',
    slug: 'product-designer-figma',
    salary: '$120k - $160k',
    job_type: 'Full-Time',
    workplace_type: 'Hybrid',
    description: 'Help shape the future of collaborative design tools.',
    responsibilities: [
      'Design intuitive user interfaces',
      'Conduct user research and usability testing',
      'Create and maintain design systems'
    ],
    requirements: [
      '3+ years of product design experience',
      'Proficiency in Figma (obviously!)',
      'Portfolio demonstrating strong visual design skills'
    ],
    benefits: [
      'Competitive compensation',
      'Flexible work arrangements',
      'Learning and development budget',
      'Wellness programs'
    ],
    tags: ['Design', 'UI/UX', 'Figma', 'Product'],
    company_logo_url: '',
    application_url: 'https://figma.com/careers',
    featured: true,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Backend Engineer',
    company: 'Discord',
    slug: 'backend-engineer-discord',
    salary: '$150k - $200k',
    job_type: 'Full-Time',
    workplace_type: 'Remote',
    description: 'Build scalable systems that power conversations for millions.',
    responsibilities: [
      'Design and implement distributed systems',
      'Optimize database performance',
      'Ensure reliability at scale'
    ],
    requirements: [
      '4+ years of backend development experience',
      'Strong knowledge of Rust or Go',
      'Experience with PostgreSQL and Redis'
    ],
    benefits: [
      'Top-tier compensation',
      'Comprehensive health benefits',
      'Gaming setup allowance',
      'Remote-first culture'
    ],
    tags: ['Rust', 'Go', 'Backend', 'Distributed Systems'],
    company_logo_url: '',
    application_url: 'https://discord.com/careers',
    featured: true,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), // 8 hours ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Full Stack Developer',
    company: 'Vercel',
    slug: 'full-stack-developer-vercel',
    salary: '$130k - $170k',
    job_type: 'Full-Time',
    workplace_type: 'Remote',
    description: 'Build the platform that powers the modern web.',
    responsibilities: [
      'Develop full-stack features using Next.js',
      'Optimize application performance',
      'Contribute to open source projects'
    ],
    requirements: [
      'Strong experience with React and Node.js',
      'Knowledge of modern deployment practices',
      'Passion for developer experience'
    ],
    benefits: [
      'Equity and competitive salary',
      'Flexible PTO',
      'Remote work support',
      'Conference and learning budget'
    ],
    tags: ['Next.js', 'React', 'Node.js', 'Full Stack'],
    company_logo_url: '',
    application_url: 'https://vercel.com/careers',
    featured: false,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'GitHub',
    slug: 'devops-engineer-github',
    salary: '$140k - $180k',
    job_type: 'Full-Time',
    workplace_type: 'Hybrid',
    description: 'Keep the home of open source running smoothly.',
    responsibilities: [
      'Maintain CI/CD pipelines',
      'Manage cloud infrastructure',
      'Ensure system security and reliability'
    ],
    requirements: [
      'Experience with AWS or Azure',
      'Strong knowledge of Kubernetes',
      'Infrastructure as Code expertise'
    ],
    benefits: [
      'Excellent compensation package',
      'Parental leave',
      'Learning stipend',
      'Inclusive work environment'
    ],
    tags: ['DevOps', 'AWS', 'Kubernetes', 'CI/CD'],
    company_logo_url: '',
    application_url: 'https://github.com/about/careers',
    featured: false,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(), // 18 hours ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '6',
    title: 'Mobile Engineer (iOS)',
    company: 'Notion',
    slug: 'mobile-engineer-ios-notion',
    salary: '$135k - $175k',
    job_type: 'Full-Time',
    workplace_type: 'On-site',
    description: 'Bring the all-in-one workspace to iOS devices.',
    responsibilities: [
      'Build native iOS features',
      'Optimize app performance',
      'Collaborate with design team'
    ],
    requirements: [
      '3+ years of iOS development',
      'Proficiency in Swift',
      'Experience with Core Data'
    ],
    benefits: [
      'Competitive pay',
      'Health and wellness',
      'Team events',
      'Office perks'
    ],
    tags: ['iOS', 'Swift', 'Mobile', 'Native'],
    company_logo_url: '',
    application_url: 'https://notion.so/careers',
    featured: false,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '7',
    title: 'Data Scientist',
    company: 'Netflix',
    slug: 'data-scientist-netflix',
    salary: '$160k - $220k',
    job_type: 'Full-Time',
    workplace_type: 'Hybrid',
    description: 'Help us understand what our members want to watch.',
    responsibilities: [
      'Build recommendation algorithms',
      'Analyze user behavior data',
      'Present insights to stakeholders'
    ],
    requirements: [
      'MS or PhD in quantitative field',
      'Experience with ML frameworks',
      'Strong Python skills'
    ],
    benefits: [
      'Top of market pay',
      'Free Netflix subscription',
      'Flexible time off',
      'Parental leave'
    ],
    tags: ['Data Science', 'Python', 'ML', 'Analytics'],
    company_logo_url: '',
    application_url: 'https://jobs.netflix.com',
    featured: true,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(), // 30 hours ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '8',
    title: 'Technical Writer',
    company: 'Twilio',
    slug: 'technical-writer-twilio',
    salary: '$90k - $120k',
    job_type: 'Contract',
    workplace_type: 'Remote',
    description: 'Create clear documentation for developers worldwide.',
    responsibilities: [
      'Write API documentation',
      'Create tutorials and guides',
      'Maintain documentation standards'
    ],
    requirements: [
      'Strong writing skills',
      'Technical background',
      'Experience with docs-as-code'
    ],
    benefits: [
      'Competitive contract rate',
      'Flexible schedule',
      'Remote work',
      'Professional development'
    ],
    tags: ['Writing', 'Documentation', 'API', 'Technical'],
    company_logo_url: '',
    application_url: 'https://twilio.com/company/jobs',
    featured: false,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(), // 36 hours ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '9',
    title: 'Junior Frontend Developer',
    company: 'Linear',
    slug: 'junior-frontend-developer-linear',
    salary: '$80k - $110k',
    job_type: 'Full-Time',
    workplace_type: 'Remote',
    description: 'Start your career building beautiful software.',
    responsibilities: [
      'Build UI components',
      'Fix bugs and improve performance',
      'Learn from senior developers'
    ],
    requirements: [
      '1-2 years of experience',
      'Basic React knowledge',
      'Eagerness to learn'
    ],
    benefits: [
      'Mentorship program',
      'Competitive salary',
      'Remote-friendly',
      'Growth opportunities'
    ],
    tags: ['React', 'Junior', 'Frontend', 'Entry Level'],
    company_logo_url: '',
    application_url: 'https://linear.app/careers',
    featured: false,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '10',
    title: 'Engineering Manager',
    company: 'Slack',
    slug: 'engineering-manager-slack',
    salary: '$180k - $240k',
    job_type: 'Full-Time',
    workplace_type: 'Hybrid',
    description: 'Lead a team building the future of work.',
    responsibilities: [
      'Manage and mentor engineers',
      'Drive technical decisions',
      'Collaborate with product and design'
    ],
    requirements: [
      '5+ years of engineering experience',
      '2+ years of management experience',
      'Strong communication skills'
    ],
    benefits: [
      'Executive compensation',
      'Leadership coaching',
      'Comprehensive benefits',
      'Stock options'
    ],
    tags: ['Management', 'Leadership', 'Engineering', 'Team Lead'],
    company_logo_url: '',
    application_url: 'https://slack.com/careers',
    featured: false,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 60).toISOString(), // 60 hours ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '11',
    title: 'UX Researcher',
    company: 'Spotify',
    slug: 'ux-researcher-spotify',
    salary: '$110k - $150k',
    job_type: 'Full-Time',
    workplace_type: 'Hybrid',
    description: 'Understand how users experience music.',
    responsibilities: [
      'Conduct user interviews',
      'Analyze research data',
      'Present findings to teams'
    ],
    requirements: [
      '3+ years of UX research experience',
      'Strong analytical skills',
      'Experience with research tools'
    ],
    benefits: [
      'Competitive pay',
      'Music streaming perks',
      'Wellness programs',
      'Creative environment'
    ],
    tags: ['UX Research', 'User Research', 'Analysis', 'Spotify'],
    company_logo_url: '',
    application_url: 'https://spotify.com/jobs',
    featured: false,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '12',
    title: 'Security Engineer',
    company: '1Password',
    slug: 'security-engineer-1password',
    salary: '$150k - $200k',
    job_type: 'Full-Time',
    workplace_type: 'Remote',
    description: 'Help keep passwords safe for millions of users.',
    responsibilities: [
      'Perform security audits',
      'Respond to security incidents',
      'Develop security tools'
    ],
    requirements: [
      'Strong security background',
      'Experience with cryptography',
      'Knowledge of compliance standards'
    ],
    benefits: [
      'Top-tier compensation',
      'Security focus',
      'Remote work',
      'Continuous learning'
    ],
    tags: ['Security', 'Cryptography', 'Privacy', 'Remote'],
    company_logo_url: '',
    application_url: 'https://1password.com/careers',
    featured: false,
    is_active: true,
    posted_at: new Date(Date.now() - 1000 * 60 * 60 * 84).toISOString(), // 84 hours ago
    expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];
