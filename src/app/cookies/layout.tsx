import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Cookie Policy',
  alternates: { canonical: '/cookies' },
  description: 'CTekk Solutions cookie policy. Learn what cookies we use and how to manage them.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
