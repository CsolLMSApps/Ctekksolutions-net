import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Technology Careers | Open Positions',
  description: 'Join CTekk Solutions. Open positions in AI/ML Engineering, Data Science, Cloud Architecture, DevOps, and Corporate Training. Dallas, TX and Remote.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
