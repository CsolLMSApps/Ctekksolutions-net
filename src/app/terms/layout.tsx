import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Terms of Service',
  alternates: { canonical: '/terms' },
  description: 'CTekk Solutions terms of service. Read the terms governing your use of our services and platforms.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
