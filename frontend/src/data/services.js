export const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    shortTitle: 'Web Development',
    tagline: 'Custom websites that turn traffic into revenue.',
    description:
      'We design and build high-performing business websites and digital platforms that improve conversion, usability, and long-term growth.',
    problem: 'Many businesses struggle with slow, outdated, and difficult-to-convert websites that fail to reflect their true value.',
    solution:
      'We create conversion-driven digital experiences backed by strategy, design, engineering, and performance optimization.',
    features: [
      'Custom website architecture',
      'B2B and SaaS product frontends',
      'Modern UX with performance-first code',
      'SEO-ready build structure',
      'Analytics and tracking setup'
    ],
    industries: ['Professional services', 'Healthcare', 'Education', 'E-commerce', 'SaaS'],
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    process: ['Discovery', 'UX strategy', 'Design system', 'Development', 'Optimization'],
    cta: 'Build my website',
    accent: '#D4AF37'
  },
  {
    slug: 'app-development',
    title: 'App Development',
    shortTitle: 'App Development',
    tagline: 'Mobile and web apps built for business momentum.',
    description:
      'From idea to launch, we craft business applications that streamline operations, improve experiences, and support scaling.',
    problem: 'Operational inefficiency, disconnected data, and poor user experiences often slow down growth and increase overhead.',
    solution:
      'We build polished, scalable applications around real workflows so your teams can move faster and operate more intelligently.',
    features: [
      'Cross-platform experiences',
      'Workflow automation',
      'Dashboards and internal tools',
      'User-centric mobile experiences',
      'API integration and support'
    ],
    industries: ['Healthcare', 'Real estate', 'Logistics', 'Finance', 'Operations'],
    stack: ['React Native', 'Next.js', 'Node.js', 'MongoDB', 'Firebase'],
    process: ['Planning', 'Architecture', 'Design', 'Build', 'QA & Launch'],
    cta: 'Build my app',
    accent: '#bfa356'
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    tagline: 'Growth systems designed to attract and convert.',
    description:
      'We blend strategy, content, and performance marketing to generate qualified leads and build sustainable brand momentum.',
    problem: 'Most businesses do not lack offers — they lack the digital systems to consistently attract the right audience.',
    solution:
      'We create acquisition funnels, content strategies, and conversion assets that help you generate measurable business results.',
    features: [
      'Performance marketing',
      'Content strategy',
      'Lead generation funnels',
      'Campaign optimization',
      'Brand visibility systems'
    ],
    industries: ['Consulting', 'Professional services', 'B2B brands', 'Healthcare', 'Education'],
    stack: ['SEO', 'Meta Ads', 'Analytics', 'Content', 'CRM'],
    process: ['Audit', 'Strategy', 'Campaign design', 'Launch', 'Optimization'],
    cta: 'Scale my growth',
    accent: '#d7bc5d'
  },
  {
    slug: 'ar-vr',
    title: 'AR/VR',
    shortTitle: 'AR / VR',
    tagline: 'Immersive experiences that reimagine customer engagement.',
    description:
      'We design immersive digital experiences for product visualization, training, simulation, and next-level storytelling.',
    problem: 'Traditional presentations and experiences often fail to create emotional engagement or clear understanding.',
    solution:
      'We build immersive experiences that help businesses explain value faster and make complex products more memorable.',
    features: [
      'Product demos',
      'Training simulations',
      'Immersive storytelling',
      'Interactive product experiences',
      'Experience prototyping'
    ],
    industries: ['Retail', 'Real estate', 'Manufacturing', 'Training', 'Events'],
    stack: ['Three.js', 'WebXR', 'React', 'Unity', '3D design'],
    process: ['Concept', 'Prototype', 'Build', 'Testing', 'Deployment'],
    cta: 'Create immersive experiences',
    accent: '#caa72d'
  },
  {
    slug: '3d-modeling',
    title: '3D Modeling',
    shortTitle: '3D Modeling',
    tagline: 'Product and environment visuals for modern brands.',
    description:
      'We create detailed 3D assets, product mockups, and visual storytelling tools that help brands stand out with richer content.',
    problem: 'Static visuals often do not communicate depth, value, or technical sophistication effectively.',
    solution:
      'We transform ideas into premium 3D visuals that improve presentation, pitch quality, and product understanding.',
    features: [
      '3D product modeling',
      'Architectural visuals',
      'Interactive product scenes',
      'Product ecommerce visuals',
      'Brand storytelling assets'
    ],
    industries: ['Architecture', 'Retail', 'Manufacturing', 'Healthcare', 'Luxury'],
    stack: ['Blender', 'Three.js', 'React Three Fiber', 'Drei', 'GLTF'],
    process: ['Reference gathering', 'Asset modeling', 'Texturing', 'Scene composition', 'Delivery'],
    cta: 'Design 3D assets',
    accent: '#e5c870'
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortTitle: 'UI/UX Design',
    tagline: 'Human-centered design that makes products feel premium.',
    description:
      'We translate complex business goals into interaction flows, interface systems, and digital experiences that feel intuitive and memorable.',
    problem: 'Businesses often build features without a strong product understanding, causing friction, confusion, and lower engagement.',
    solution:
      'We define the product story, user journey, and interface system to simplify decisions and make each touchpoint feel intentional.',
    features: [
      'Wireframes and flows',
      'Design systems',
      'Interaction design',
      'User testing',
      'UX research'
    ],
    industries: ['Fintech', 'Healthcare', 'SaaS', 'Education', 'Consumer brands'],
    stack: ['Figma', 'Design systems', 'Prototyping', 'UX research', 'Accessibility'],
    process: ['Research', 'UX mapping', 'Design', 'Prototype', 'Iterate'],
    cta: 'Design my product',
    accent: '#f2d87c'
  }
]

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]))
