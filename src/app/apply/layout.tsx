import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply for AI & Technology Positions',
  description: 'Submit your application to CTekk Solutions. Open roles in AI/ML, Data Science, Cloud, DevOps, and more. Dallas, TX and Remote positions available.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
