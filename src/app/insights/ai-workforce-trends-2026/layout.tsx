import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'AI Workforce Trends Shaping 2026',
  alternates: { canonical: '/insights/ai-workforce-trends-2026' },
  description: 'Explore how AI is transforming workforce demand, the rise of AI-native roles, and why upskilling is critical for 2026.',
  openGraph: {
    title: 'AI Workforce Trends Shaping 2026',
    description: 'How AI is reshaping workforce demand and why upskilling matters.',
    type: 'article',
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
