import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact CTekk Solutions | AI Talent, Training & Consulting',
  description: 'Get in touch with CTekk Solutions. Hire AI talent, request corporate training, book a consultation. Dallas, TX headquarters. 408-471-7753.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
