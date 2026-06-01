import type {
  FaqItem,
  Industry,
  Metric,
  NavigationLink,
  ProcessStep,
  Project,
  Service,
  Testimonial,
} from '../types/content';

export const navigationLinks: NavigationLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const heroMetrics: Metric[] = [
  { value: '12+', label: 'Digital experts' },
  { value: '50+', label: 'Projects shipped' },
  { value: '5★', label: 'Client rating' },
];

export const resultMetrics: Metric[] = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+', label: 'Awards Won' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We clarify business goals, audience problems, core features, and the most realistic launch roadmap.',
  },
  {
    number: '02',
    title: 'UI/UX & Prototype',
    description:
      'Wireframes, visual direction, and clickable prototypes help the team validate the user journey early.',
  },
  {
    number: '03',
    title: 'Development Sprint',
    description:
      'Reusable React components, clean TypeScript, and TailwindCSS patterns keep the code scalable.',
  },
  {
    number: '04',
    title: 'Testing & Optimization',
    description:
      'We review responsiveness, accessibility, performance, forms, and final content before release.',
  },
  {
    number: '05',
    title: 'Deploy & Improve',
    description:
      'After launch, we read analytics, collect feedback, and iterate so the product keeps growing.',
  },
];

export const services: Service[] = [
  {
    icon: 'code',
    title: 'Web Development',
    description:
      'Company profile, landing page, dashboard, and business web apps with fast, responsive frontends.',
  },
  {
    icon: 'mobile',
    title: 'Mobile App Development',
    description:
      'Mobile-first experiences with smooth flows, clear interfaces, and reliable product architecture.',
  },
  {
    icon: 'bolt',
    title: 'Automation System',
    description:
      'Internal tools, CRM flows, and workflow automation to reduce repetitive business operations.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    description:
      'Deployment setup, scalable infrastructure planning, and performance monitoring for product teams.',
  },
  {
    icon: 'cart',
    title: 'E-Commerce Platform',
    description:
      'Product catalog, checkout flow, campaign pages, and integrations that help online stores convert.',
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    description:
      'Design systems, user journeys, and high-fidelity interfaces that look polished on every screen.',
  },
  {
    icon: 'shield',
    title: 'IT Consultation',
    description:
      'Architecture review, security-minded planning, and technical guidance for founders and teams.',
  },
  {
    icon: 'growth',
    title: 'Digital Growth',
    description:
      'Campaign pages, analytics-ready tracking, and conversion improvements to support business goals.',
  },
];

export const industries: Industry[] = [
  {
    title: 'Health',
    eyebrow: 'Healthcare platforms',
    description:
      'Appointment flows, patient dashboards, and secure operational tools for clinics and health startups.',
    tags: ['Patient portal', 'Booking', 'HIPAA-minded UI'],
  },
  {
    title: 'Fintech',
    eyebrow: 'Finance products',
    description:
      'Trustworthy dashboards, onboarding funnels, and transaction interfaces designed for clarity.',
    tags: ['Dashboard', 'KYC flow', 'Analytics'],
  },
  {
    title: 'Retail',
    eyebrow: 'Commerce growth',
    description:
      'Catalog, promotion, and checkout experiences optimized for product discovery and conversion.',
    tags: ['Storefront', 'Checkout', 'Campaigns'],
  },
  {
    title: 'Education',
    eyebrow: 'Learning systems',
    description:
      'Course landing pages, learning management dashboards, and progress tracking for education brands.',
    tags: ['LMS', 'Progress', 'Community'],
  },
];

export const projects: Project[] = [
  {
    id: 'Project 01',
    title: 'Welly Millionaire',
    category: 'Education Landing Page',
    description:
      'A bold sales page for a digital class launch with webinar highlight, testimonial block, and pricing CTA.',
    result: '+42% lead conversion',
    tags: ['React', 'Landing Page', 'Analytics'],
    accent: 'orange',
  },
  {
    id: 'Project 02',
    title: 'Orbit Finance',
    category: 'Fintech Dashboard',
    description:
      'A dark analytics dashboard with portfolio overview, goal tracking, and realtime-looking visual cards.',
    result: '2.4x faster reporting',
    tags: ['Dashboard', 'Charts', 'Design System'],
    accent: 'green',
  },
  {
    id: 'Project 03',
    title: 'Nova Care',
    category: 'Mobile App Interface',
    description:
      'A clean mobile product experience for booking, consultation, reminders, and customer support.',
    result: '4.9 app experience score',
    tags: ['Mobile UI', 'Prototype', 'Design'],
    accent: 'purple',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'TigerLay turned our unclear concept into a product that our team can explain, demo, and sell confidently.',
    name: 'Nadya Prasetyo',
    role: 'Founder',
    company: 'Welly Growth Lab',
  },
  {
    quote:
      'Their component structure made handover easy. We can keep building new pages without breaking the design.',
    name: 'Arkan Wijaya',
    role: 'Product Lead',
    company: 'Orbit Finance',
  },
  {
    quote:
      'The final website looks premium on mobile and desktop. Our campaign team launched faster than planned.',
    name: 'Maya Putri',
    role: 'Marketing Manager',
    company: 'Nova Care',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What services do you offer?',
    answer:
      'We help with UI/UX design, web development, mobile app interfaces, dashboards, automation systems, ecommerce, cloud setup, and technical consulting.',
  },
  {
    question: 'How long does a project usually take?',
    answer:
      'A landing page can be completed in one to three weeks. A larger dashboard or app prototype usually needs four to eight weeks depending on complexity.',
  },
  {
    question: 'Can you improve an existing website?',
    answer:
      'Yes. We can audit your current website, redesign high-impact sections, rebuild components, and optimize the mobile experience.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. We can help monitor performance, fix issues, add new sections, and improve content based on analytics after release.',
  },
  {
    question: 'Can you work with startup budgets?',
    answer:
      'Yes. We can start with a focused MVP scope, prioritize high-value features, and grow the product in phases.',
  },
];

export const footerLinks: NavigationLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: NavigationLink[] = [
  { label: 'Fb', href: 'https://facebook.com' },
  { label: 'In', href: 'https://linkedin.com' },
  { label: 'Ig', href: 'https://instagram.com' },
  { label: 'Tw', href: 'https://twitter.com' },
];
