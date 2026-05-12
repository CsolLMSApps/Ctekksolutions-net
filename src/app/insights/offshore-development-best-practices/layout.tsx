import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Offshore Development: Best Practices for Global Teams',
  alternates: { canonical: '/insights/offshore-development-best-practices' },
  description: 'Managing distributed teams — lessons from CTekks Dallas-Mysuru global delivery model.',
  openGraph: { title: 'Offshore Development Best Practices', type: 'article' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
