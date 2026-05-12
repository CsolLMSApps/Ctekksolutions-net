import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'A Practical Guide to Enterprise AI Implementation',
  alternates: { canonical: '/insights/enterprise-ai-implementation-guide' },
  description: 'Step-by-step approach to adopting AI in the enterprise — from discovery to full-scale deployment.',
  openGraph: { title: 'Enterprise AI Implementation Guide', type: 'article' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
