export type IconName =
  | 'bolt'
  | 'code'
  | 'mobile'
  | 'cloud'
  | 'shield'
  | 'cart'
  | 'palette'
  | 'growth'
  | 'rocket'
  | 'spark'
  | 'users'
  | 'check'
  | 'chart'
  | 'globe';

export interface NavigationLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Service {
  icon: IconName;
  title: string;
  description: string;
}

export interface Industry {
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  tags: string[];
  accent: 'orange' | 'green' | 'purple';
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
