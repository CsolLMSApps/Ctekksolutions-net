import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Building Scalable Cloud Infrastructure for AI Workloads',
  alternates: { canonical: '/insights/building-scalable-cloud-infrastructure' },
  description: 'How to architect cloud environments that support demanding ML pipelines while controlling costs.',
  openGraph: { title: 'Building Scalable Cloud Infrastructure for AI', type: 'article' },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
