import Link from 'next/link';
import { Home, Briefcase, BookOpen, Users, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found | CTekk Solutions',
  description: 'The page you are looking for could not be found. Explore our services, platforms, careers, and insights.',
};

const suggestedLinks = [
  { href: '/', label: 'Home', desc: 'Back to the homepage', icon: Home },
  { href: '/services', label: 'Services', desc: 'AI talent, cloud, staffing, training', icon: Briefcase },
  { href: '/platforms', label: 'Platforms', desc: 'Our six AI workforce platforms', icon: Users },
  { href: '/insights', label: 'Insights', desc: 'Articles on AI, hiring, and training', icon: BookOpen },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0A0F1C] text-white py-20 md:py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#10A37F] text-sm font-medium tracking-wider uppercase mb-4">404 Error</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Page Not Found
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Try one of the destinations below.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#10A37F] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0d8c6a] transition-colors"
          >
            Back to Home <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Suggested links */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border border-gray-200 rounded-lg p-6 hover:border-[#10A37F] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#10A37F]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#10A37F] transition-colors">
                    <Icon size={20} className="text-[#10A37F] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{link.label}</h3>
                  <p className="text-sm text-gray-600">{link.desc}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 mb-4">Need help finding something?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#10A37F] font-medium hover:text-[#0d8c6a]"
            >
              Contact us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
