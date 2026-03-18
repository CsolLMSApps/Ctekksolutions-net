import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Industry Insights, Reports & Best Practices',
  description: 'Expert articles on AI workforce trends, cloud infrastructure, remote STEM hiring, enterprise AI implementation, and corporate training ROI.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
