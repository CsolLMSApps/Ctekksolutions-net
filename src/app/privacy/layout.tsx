import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: '/privacy' },
  description: 'CTekk Solutions privacy policy. Learn how we collect, use, and protect your data.',
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
