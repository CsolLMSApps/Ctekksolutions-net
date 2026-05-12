import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Job Boards, Training Platforms & Enterprise LMS',
  alternates: { canonical: '/platforms' },
  description: 'Explore CTekk Solutions platform ecosystem: DFWITJOBS, OPTPlanet, OPTPlanet.tech, AI Learn Hub, and Benzaiten LMS. Workforce technology that scales.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
