import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'The Future of Remote STEM Hiring',
  alternates: { canonical: '/insights/future-of-remote-stem-hiring' },
  description: 'How remote work and platforms like DFW IT Jobs and OPT Planet Tech are reshaping STEM hiring.',
  openGraph: { title: 'The Future of Remote STEM Hiring', type: 'article' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
