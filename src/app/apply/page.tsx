'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ApplyForm() {
  const searchParams = useSearchParams();
  const positionFromUrl = searchParams.get('position') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: positionFromUrl,
    linkedIn: '',
    resume: '',
    coverNote: '',
  });

  useEffect(() => {
    if (positionFromUrl) {
      setFormData(prev => ({ ...prev, position: positionFromUrl }));
    }
  }, [positionFromUrl]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your application!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      linkedIn: '',
      resume: '',
      coverNote: '',
    });
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-[#0A0F1C] py-16 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#10A37F] to-[#0d8c6a] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
          >
            Apply Now
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' as const }}
          >
            Submit your application to join our team or be considered for current openings.
          </motion.p>
        </div>
      </motion.section>

      {/* Application Form Section */}
      <section className="bg-white py-16 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' as const }}
        >
          <form
            onSubmit={handleSubmit}
            className="border border-gray-200 rounded-lg p-8"
          >
            {/* Full Name */}
            <div className="mb-6">
              <label htmlFor="fullName" className="text-sm font-medium text-gray-900 mb-2 block">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#10A37F] focus:outline-none transition"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="text-sm font-medium text-gray-900 mb-2 block">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#10A37F] focus:outline-none transition"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label htmlFor="phone" className="text-sm font-medium text-gray-900 mb-2 block">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#10A37F] focus:outline-none transition"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Position of Interest */}
            <div className="mb-6">
              <label htmlFor="position" className="text-sm font-medium text-gray-900 mb-2 block">
                Position of Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#10A37F] focus:outline-none transition bg-white"
              >
                <option value="">-- Select a position --</option>
                <option value="Senior Software Developer">Senior Software Developer</option>
                <option value="Systems Analyst">Systems Analyst</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Data Analytics Engineer">Data Analytics Engineer</option>
                <option value="AI/ML Engineer">AI/ML Engineer</option>
                <option value="Corporate Training Specialist">Corporate Training Specialist</option>
                <option value="Database Analyst">Database Analyst</option>
                <option value="Web & Interface Developer">Web & Interface Developer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="Cloud Solutions Architect">Cloud Solutions Architect</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* LinkedIn Profile URL */}
            <div className="mb-6">
              <label htmlFor="linkedIn" className="text-sm font-medium text-gray-900 mb-2 block">
                LinkedIn Profile URL
              </label>
              <input
                type="text"
                id="linkedIn"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#10A37F] focus:outline-none transition"
                placeholder="https://linkedin.com/in/johndoe"
              />
            </div>

            {/* Resume / CV */}
            <div className="mb-6">
              <label htmlFor="resume" className="text-sm font-medium text-gray-900 mb-2 block">
                Resume / CV <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-600 mb-2">
                Paste your resume text below or provide a link to your resume
              </p>
              <textarea
                id="resume"
                name="resume"
                value={formData.resume}
                onChange={handleChange}
                required
                rows={10}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#10A37F] focus:outline-none transition"
                placeholder="Enter your resume content or link..."
              />
            </div>

            {/* Cover Note */}
            <div className="mb-8">
              <label htmlFor="coverNote" className="text-sm font-medium text-gray-900 mb-2 block">
                Cover Note
              </label>
              <textarea
                id="coverNote"
                name="coverNote"
                value={formData.coverNote}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#10A37F] focus:outline-none transition"
                placeholder="Tell us why you're interested in this role..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-[#10A37F] text-white py-3 rounded-md font-medium hover:bg-[#0d8c6a] transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Application
            </motion.button>

            {/* Confidentiality Notice */}
            <p className="text-xs text-gray-500 text-center mt-3">
              Your information is kept confidential. We will only contact you regarding relevant
              opportunities.
            </p>
          </form>
        </motion.div>
      </section>

      {/* Back Link */}
      <motion.section
        className="py-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' as const }}
      >
        <Link
          href="/jobs"
          className="inline-flex items-center text-[#10A37F] font-medium hover:text-[#0d8c6a] transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Careers
        </Link>
      </motion.section>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ApplyForm />
    </Suspense>
  );
}
