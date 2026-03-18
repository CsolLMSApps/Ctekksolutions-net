import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Training Programs & Corporate Upskilling Courses',
  description: 'Live AI training for professionals and enterprises. Machine Learning, NLP, Computer Vision, and Data Engineering courses. Powered by AI Learn Hub and Benzaiten LMS.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
