import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CTekk Solutions | AI Workforce & Platform Ecosystem Company',
  description: 'Founded in 2010 in Dallas, TX. CTekk Solutions builds AI workforce infrastructure — from talent staffing to training platforms. Services fund SaaS. Impact scales.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
