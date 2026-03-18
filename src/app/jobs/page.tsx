'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Globe,
  Briefcase,
  Heart,
  Wifi,
  Zap,
  Users,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const jobCategories = [
  { icon: Brain, label: 'AI & ML' },
  { icon: Cloud, label: 'Cloud & DevOps' },
  { icon: Globe, label: 'Remote' },
  { icon: Briefcase, label: 'Corporate' }
];

const jobs = [
  {
    title: 'Senior Software Developer',
    department: 'Engineering',
    location: 'Dallas, TX (Hybrid)',
    type: 'Full-time',
    posted: 'Mar 2026',
    duties: 'Design, develop, and maintain full-stack web applications for the DFWITJOBS and OPTPlanet.tech platforms. Implement features, conduct code reviews, and optimize application performance.',
    requirements: 'Bachelor\'s in CS or related. 5+ years professional development experience. Proficiency in React, Node.js, and cloud platforms.',
  },
  {
    title: 'Systems Analyst',
    department: 'IT Operations',
    location: 'Dallas, TX',
    type: 'Full-time',
    posted: 'Feb 2026',
    duties: 'Analyze and evaluate IT systems architecture supporting CTekk Solutions platform operations. Gather requirements, design integration solutions, and conduct feasibility studies for platform enhancements.',
    requirements: 'Bachelor\'s in CS or Information Systems. 3+ years systems analysis experience. Strong knowledge of enterprise systems and business process analysis.',
  },
  {
    title: 'Data Scientist',
    department: 'AI & Analytics',
    location: 'Remote (US)',
    type: 'Full-time',
    posted: 'Jan 2026',
    duties: 'Develop predictive models to enhance job matching accuracy within DFWITJOBS and OPTPlanet platforms. Conduct exploratory analysis on workforce datasets and design A/B testing frameworks.',
    requirements: 'Master\'s in Data Science, Statistics, or related. 4+ years data science experience. Strong proficiency in Python, R, SQL, and ML frameworks.',
  },
  {
    title: 'Data Analytics Engineer',
    department: 'Data Engineering',
    location: 'Remote (US)',
    type: 'Full-time',
    posted: 'Jan 2026',
    duties: 'Build and maintain data pipelines collecting workforce data from DFWITJOBS and OPTPlanet platforms. Create analytics dashboards and optimize data models for real-time reporting.',
    requirements: 'Bachelor\'s in CS, Statistics, or Engineering. 3+ years data/analytics engineering. Proficiency in SQL, data warehousing, and cloud data platforms.',
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI & Machine Learning',
    location: 'Dallas, TX (Hybrid)',
    type: 'Full-time',
    posted: 'Dec 2025',
    duties: 'Develop and deploy ML models powering intelligent talent matching on DFWITJOBS and OPTPlanet. Architect AI-driven features for AI Learn Hub including personalized learning pathways.',
    requirements: 'Master\'s in CS, ML, or related STEM field. 5+ years ML experience. Advanced proficiency in Python, TensorFlow/PyTorch.',
  },
  {
    title: 'Corporate Training Specialist',
    department: 'Education & Training',
    location: 'Dallas, TX',
    type: 'Full-time',
    posted: 'Nov 2025',
    duties: 'Design and develop training curriculum for the Benzaiten LMS platform. Assess training needs, create targeted learning programs, and deliver instructor-led workshops on AI and technology topics.',
    requirements: 'Bachelor\'s in Instructional Design, Education, or related. 3+ years corporate training experience. Experience with LMS platforms.',
  },
  {
    title: 'Database Analyst',
    department: 'Data Engineering',
    location: 'Dallas, TX',
    type: 'Full-time',
    posted: 'Oct 2025',
    duties: 'Design, implement, and optimize databases supporting the DFWITJOBS job posting platform and OPTPlanet talent analytics. Monitor performance, implement security protocols, and manage data recovery procedures.',
    requirements: 'Bachelor\'s in CS or IT. 3+ years database analysis/administration. Strong expertise in SQL, database design, and performance tuning.',
  },
  {
    title: 'Web & Interface Developer',
    department: 'Engineering',
    location: 'Remote (US)',
    type: 'Full-time',
    posted: 'Sep 2025',
    duties: 'Develop responsive interfaces for DFWITJOBS and OPTPlanet.tech platforms. Implement interactive features, optimize user experience, and enhance the Benzaiten LMS interface.',
    requirements: 'Bachelor\'s in CS or Web Development. 3+ years frontend experience. Proficiency in React, TypeScript, and modern CSS frameworks.',
  },
  {
    title: 'DevOps Engineer',
    department: 'Cloud Infrastructure',
    location: 'Remote (US)',
    type: 'Full-time',
    posted: 'Sep 2025',
    duties: 'Design and maintain CI/CD pipelines for continuous deployment of DFWITJOBS, OPTPlanet, and Benzaiten LMS applications. Automate infrastructure provisioning using Terraform and containerize applications with Docker/Kubernetes.',
    requirements: 'Bachelor\'s in CS or Software Engineering. 4+ years DevOps experience. Expertise in CI/CD, Docker, Kubernetes, and AWS/Azure.',
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Cloud & Strategy',
    location: 'Dallas, TX (Hybrid)',
    type: 'Full-time',
    posted: 'Aug 2025',
    duties: 'Architect enterprise cloud infrastructure supporting DFWITJOBS, OPTPlanet, AI Learn Hub, and Benzaiten LMS platforms. Design scalable, secure cloud solutions and lead technical design reviews.',
    requirements: 'Bachelor\'s in CS or Engineering. 5+ years cloud architecture experience. AWS/Azure certification preferred. Proven expertise in scalable cloud solutions.',
  },
];

const benefits = [
  { icon: Wifi, label: 'Remote Work', description: 'Work from anywhere with flexible schedules' },
  { icon: Heart, label: 'Health Benefits', description: 'Comprehensive health and wellness coverage' },
  { icon: BookOpen, label: 'Learning Budget', description: 'Annual education and training allowance' },
  { icon: Users, label: 'Global Team', description: 'Collaborate with talented professionals' },
  { icon: Zap, label: 'Innovation Focus', description: 'Work on cutting-edge technologies' },
  { icon: Briefcase, label: 'Growth', description: 'Clear career progression paths' }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - DARK */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="bg-[#0A0F1C] text-white py-16 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #10A37F, #34D399, #6EE7B7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Careers at CTekk Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 mb-4"
          >
            Join a team that's shaping the future of AI talent, training, and technology. We're always looking for exceptional people.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/60"
          >
            At CTekk, we help professionals advance their careers through innovative platforms and cutting-edge solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Job Categories - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-[#F9FAFB] py-20 md:py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-8 hover:border-[#10A37F] transition-colors"
                >
                  <Icon size={28} className="text-[#10A37F] mb-3" />
                  <h3 className="font-semibold text-[#111827]">
                    {cat.label}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Open Positions - LIGHT bg, standard cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white py-20 md:py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Open Positions" centered />
          <motion.div className="mt-12 space-y-4">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="border border-[#E5E7EB] rounded-lg p-8 bg-white hover:border-[#10A37F] transition-all"
              >
                <div className="mb-4">
                  <h3 className="font-semibold text-[#111827] text-lg mb-3">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs text-[#10A37F] font-medium">
                      {job.department}
                    </span>
                    <span className="text-xs text-[#6B7280]">
                      {job.location}
                    </span>
                    <span className="text-xs text-[#6B7280]">
                      {job.type}
                    </span>
                    <span className="text-xs text-[#6B7280]">
                      Posted: {job.posted}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-[#111827] text-sm mb-2">Duties</h4>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {job.duties}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#111827] text-sm mb-2">Requirements</h4>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {job.requirements}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block text-sm bg-[#10A37F] text-white px-4 py-1.5 rounded-md hover:bg-[#059669] transition-colors"
                >
                  Apply
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits - DARK bg, glass-cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-[#111827] py-20 md:py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4"
              style={{
                background: 'linear-gradient(135deg, #10A37F, #34D399, #6EE7B7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Why Join CTekk?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-8"
                >
                  <Icon size={24} className="text-[#10A37F] mb-3" />
                  <h3 className="font-semibold text-white mb-2">
                    {benefit.label}
                  </h3>
                  <p className="text-sm text-white/60">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Note - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-[#F9FAFB] py-8 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="border border-[#E5E7EB] rounded-lg p-8 bg-white text-center">
            <p className="text-[#6B7280]">
              These positions are internal to CTekk Solutions. For external staffing and contract opportunities, visit{' '}
              <a href="https://dfwitjobs.com" target="_blank" rel="noopener noreferrer" className="text-[#10A37F] font-medium hover:underline">
                DFWITJOBS
              </a>
              {' '}or{' '}
              <a href="https://optplanet.tech" target="_blank" rel="noopener noreferrer" className="text-[#10A37F] font-medium hover:underline">
                OPTPlanet.tech
              </a>
              .
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white py-8 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Interested? Let's Talk"
            primaryCTA={{ text: 'Get in Touch', href: '/contact' }}
          />
        </div>
      </motion.section>
    </div>
  );
}
