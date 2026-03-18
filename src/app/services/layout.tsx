import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Staffing, Cloud Consulting & Offshore Development Services',
  description: 'CTekk Solutions provides AI talent staffing, cloud & DevOps consulting, offshore development teams, and corporate AI training programs. Based in Dallas, TX.',
  openGraph: {
    title: 'Services | CTekk Solutions',
    description: 'AI Staffing, Cloud Consulting & Offshore Development',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
