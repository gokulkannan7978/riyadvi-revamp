export const blogs = [
  {
    slug: 'digital-transformation-roadmap',
    title: 'Digital Transformation Roadmap: What Businesses Need Before They Scale',
    excerpt: 'A practical roadmap for businesses that want to modernize systems, improve operations, and build a more durable growth engine.',
    category: 'Strategy',
    tags: ['Transformation', 'Strategy', 'Growth'],
    author: 'Riyadvi Team',
    readTime: '6 min read',
    date: '2025-01-14',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'why-ux-is-a-business-asset',
    title: 'Why UX Is a Business Asset, Not a Design Expense',
    excerpt: 'Better experiences improve trust, retention, and conversion — and that directly affects business performance.',
    category: 'UX',
    tags: ['UX', 'Design', 'Conversion'],
    author: 'Riyadvi Team',
    readTime: '5 min read',
    date: '2025-02-02',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'future-ready-technology-stack',
    title: 'Future-Ready Technology Stack: Choosing the Right System for Growth',
    excerpt: 'Technology decisions should serve business goals, not just the latest trends. Here is how to choose with more clarity.',
    category: 'Technology',
    tags: ['Technology', 'Architecture', 'Growth'],
    author: 'Riyadvi Team',
    readTime: '7 min read',
    date: '2025-03-14',
    image: 'https://images.unsplash.com/photo-1518770660439-463ac1b4f2d2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'marketing-funnel-that-feels-human',
    title: 'Building a Marketing Funnel That Feels Human and Converts',
    excerpt: 'The strongest funnels are built around real customer intent, trust, and thoughtful experiences.',
    category: 'Marketing',
    tags: ['Marketing', 'Growth', 'Funnels'],
    author: 'Riyadvi Team',
    readTime: '4 min read',
    date: '2025-01-30',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: '3d-brand-experiences',
    title: '3D Brand Experiences: Why Product Storytelling Is Becoming a Growth Leverage',
    excerpt: 'Immersive digital experiences can make products and services feel more valuable before the first conversation starts.',
    category: '3D',
    tags: ['3D', 'Brand', 'Experience'],
    author: 'Riyadvi Team',
    readTime: '6 min read',
    date: '2025-04-11',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'ai-automation-for-small-businesses',
    title: 'AI and Automation for Small Businesses: Where to Start Without Overbuilding',
    excerpt: 'The right automation strategy should remove friction and create clarity, not complexity.',
    category: 'Operations',
    tags: ['AI', 'Automation', 'Operations'],
    author: 'Riyadvi Team',
    readTime: '8 min read',
    date: '2025-05-07',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80'
  }
]

export const blogMap = Object.fromEntries(blogs.map((blog) => [blog.slug, blog]))
