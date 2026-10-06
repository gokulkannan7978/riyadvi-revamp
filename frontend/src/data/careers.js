export const careers = [
  {
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    experience: '2-4 years',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Design premium digital experiences for B2B and growth-driven brands.',
    responsibilities: [
      'Create clean, conversion-focused product experiences',
      'Translate research and business goals into functional interfaces',
      'Collaborate with product and engineering teams',
      'Create scalable design systems and prototypes'
    ],
    requirements: [
      'Strong portfolio with digital products or brand experiences',
      'Good understanding of UX, hierarchy, and accessibility',
      'Familiarity with Figma and design systems',
      'Comfort working with cross-functional teams'
    ]
  },
  {
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    department: 'Engineering',
    experience: '2-5 years',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build immersive, responsive frontends for premium digital products and marketing systems.',
    responsibilities: [
      'Develop polished React experiences with strong performance',
      'Build reusable interface systems',
      'Work closely with design and product teams',
      'Ship production-ready frontends with strong accessibility'
    ],
    requirements: [
      'Strong JavaScript and React experience',
      'Understanding of responsive design and performance principles',
      'Comfort with modern CSS and component architecture',
      'Ability to translate mockups into robust UI'
    ]
  },
  {
    slug: 'digital-marketing-specialist',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    experience: '2-4 years',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Drive growth campaigns, content systems, and lead generation initiatives.',
    responsibilities: [
      'Plan acquisition funnels and campaign strategy',
      'Coordinate content and marketing assets',
      'Track and optimize performance across channels',
      'Create strong positioning for high-value growth programs'
    ],
    requirements: [
      'Experience in digital brand or performance marketing',
      'Strong analytical mindset',
      'Comfort with reporting and optimization',
      'Ability to work cross-functionally with design and product teams'
    ]
  },
  {
    slug: '3d-visualizer',
    title: '3D Visualizer',
    department: 'Creative',
    experience: '1-3 years',
    location: 'Remote',
    type: 'Contract',
    description: 'Develop premium 3D scenes and visual storytelling assets that elevate digital experiences.',
    responsibilities: [
      'Create compelling 3D visual assets',
      'Build product or environmental visual stories',
      'Collaborate with strategy and marketing teams',
      'Support interactive web experiences'
    ],
    requirements: [
      'Experience with 3D tools and visual design',
      'Understanding of product storytelling and motion',
      'Ability to create polished visual outputs',
      'Strong attention to detail and composition'
    ]
  }
]

export const careersMap = Object.fromEntries(careers.map((career) => [career.slug, career]))
