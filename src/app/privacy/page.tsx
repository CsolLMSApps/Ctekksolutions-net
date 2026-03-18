'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1C]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="bg-[#0A0F1C] text-white py-16 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#10A37F] via-[#34D399] to-[#6EE7B7] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-400">
            Last updated: March 2026
          </p>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white dark:bg-white py-16 px-6"
      >
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          <div className="space-y-8 text-gray-700">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Introduction</h2>
              <p className="text-base leading-relaxed">
                CTekk Solutions Inc ("we", "us", "CSOL") operates ctekksolutions.net and related platforms, including but not limited to DFWITJOBS, OPTPlanet, AI Learn Hub, Benzaiten LMS, and other web properties (collectively, the "Services"). This Privacy Policy explains how we collect, use, disclose, and otherwise process your personal information in connection with our Services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
              <p className="text-base leading-relaxed mb-3">We may collect various types of information, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><strong>Personal Information:</strong> When you create an account, contact us, or use our Services, we collect information such as your name, email address, phone number, resume, job preferences, educational background, and other professional information you provide.</li>
                <li><strong>Usage Data:</strong> We automatically collect information about how you interact with our Services, including pages viewed, time spent, features used, and actions taken.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, pixels, and similar technologies to enhance your experience and understand user behavior.</li>
                <li><strong>Analytics:</strong> We use third-party analytics services to monitor and improve our platform performance.</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
              <p className="text-base leading-relaxed mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Providing and maintaining our Services</li>
                <li>Communicating with you about your account, updates, and support</li>
                <li>Processing applications, registrations, and transactions</li>
                <li>Improving and optimizing our platforms</li>
                <li>Conducting analytics and research</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and enhancing security</li>
              </ul>
              <p className="text-base leading-relaxed mt-3"><strong>We do not sell your personal information to third parties.</strong></p>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Sharing</h2>
              <p className="text-base leading-relaxed mb-3">We may share your information in the following limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><strong>Service Providers:</strong> We share data with trusted vendors who provide services such as hosting, payment processing, email delivery, and analytics.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights, privacy, safety, or property.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              </ul>
              <p className="text-base leading-relaxed mt-3"><strong>We never sell your personal information to third parties.</strong></p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Security</h2>
              <p className="text-base leading-relaxed">
                We implement industry-standard technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These include encryption, secure hosting environments, and access controls. However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Rights</h2>
              <p className="text-base leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Access your personal information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of your information (subject to legal obligations)</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="text-base leading-relaxed mt-3">To exercise these rights, please contact us at info@ctekksolutions.net.</p>
            </div>

            {/* Cookie Usage */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookie Usage</h2>
              <p className="text-base leading-relaxed mb-3">
                We use cookies and similar technologies to enhance your experience. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><strong>Analytics Cookies:</strong> To understand how you use our Services and improve functionality</li>
                <li><strong>Functional Cookies:</strong> To remember your preferences and settings</li>
                <li><strong>Third-Party Cookies:</strong> From partners like Google Analytics</li>
              </ul>
              <p className="text-base leading-relaxed mt-3">You can manage cookie preferences through your browser settings or our cookie consent tools. For more details, see our <Link href="/cookies" className="text-[#10A37F] hover:underline">Cookie Policy</Link>.</p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Third-Party Services</h2>
              <p className="text-base leading-relaxed mb-3">
                Our Services may integrate with or link to third-party services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Google Analytics (analytics)</li>
                <li>Payment processors (transaction handling)</li>
                <li>Job board integrations (job posting/application services)</li>
                <li>Email and communication platforms</li>
              </ul>
              <p className="text-base leading-relaxed mt-3">These third parties have their own privacy policies. We encourage you to review their practices before sharing information.</p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Retention</h2>
              <p className="text-base leading-relaxed">
                We retain personal information only as long as necessary to provide our Services and comply with legal obligations. The retention period may vary depending on the context of the processing and our legal obligations. When information is no longer necessary, we securely delete or anonymize it.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Children's Privacy</h2>
              <p className="text-base leading-relaxed">
                Our Services are not directed to individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
              <p className="text-base leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The "Last updated" date at the top of this policy indicates when it was last revised. We will post the updated policy on this page and encourage you to review it periodically. Your continued use of our Services constitutes your acceptance of the updated policy.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-50 border-l-4 border-[#10A37F] p-4 rounded">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Important Disclaimer</h2>
              <p className="text-base leading-relaxed font-semibold">
                CTekk Solutions Inc makes no guarantees, warranties, or promises regarding employment outcomes, job placement, career advancement, or training results. All services and platforms are provided "as is" without warranty of any kind.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-base leading-relaxed mb-2">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="text-base">
                <p><strong>Email:</strong> info@ctekksolutions.net</p>
                <p className="mt-2"><strong>Mailing Address:</strong></p>
                <p>CTekk Solutions Inc</p>
                <p>14800 Quorum Drive, Suite 285</p>
                <p>Dallas, TX 75254</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
