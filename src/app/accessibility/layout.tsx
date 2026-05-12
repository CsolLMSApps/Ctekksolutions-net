import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Accessibility Statement',
  alternates: { canonical: '/accessibility' },
  description: 'CTekk Solutions accessibility commitment. We strive for WCAG 2.1 AA compliance.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
