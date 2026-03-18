'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CookiesPage() {
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
            Cookie Policy
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
            {/* What Are Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">What Are Cookies?</h2>
              <p className="text-base leading-relaxed">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit websites. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to website owners about how users interact with their sites. Cookies do not typically contain personally identifying information, but can be used to identify you in combination with other data.
              </p>
            </div>

            {/* Why We Use Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Why We Use Cookies</h2>
              <p className="text-base leading-relaxed mb-3">
                CTekk Solutions Inc uses cookies for various purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Enhancing user experience and platform functionality</li>
                <li>Remembering your preferences and settings</li>
                <li>Understanding how users interact with our Services</li>
                <li>Improving our website and applications</li>
                <li>Providing targeted content and recommendations</li>
                <li>Analyzing usage patterns and platform performance</li>
              </ul>
            </div>

            {/* Types of Cookies We Use */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Types of Cookies We Use</h2>
              <p className="text-base leading-relaxed mb-3">We use the following categories of cookies:</p>

              <div className="space-y-4 mt-3">
                <div>
                  <h3 className="font-bold text-gray-900">Analytics Cookies</h3>
                  <p className="text-base leading-relaxed">We use analytics cookies to track and analyze how you use our Services. This helps us understand user behavior, identify popular features, and improve our platforms. These cookies collect information such as pages visited, time spent, and user actions. Google Analytics (ID: G-PTDLVKXJ01) is our primary analytics provider.</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Functional Cookies</h3>
                  <p className="text-base leading-relaxed">These cookies enable our Services to remember your choices and preferences, such as language preference, login credentials, and user settings. They allow our platforms to operate more smoothly and personalize your experience.</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Preference Cookies</h3>
                  <p className="text-base leading-relaxed">We use preference cookies to store information about your choices on our Services, including customized layouts, color preferences, and other personalization settings.</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Security Cookies</h3>
                  <p className="text-base leading-relaxed">These cookies help protect your account and detect fraudulent activity by storing security tokens and session identifiers.</p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Third-Party Cookies</h2>
              <p className="text-base leading-relaxed mb-3">
                In addition to our own cookies, we may use cookies from third parties:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><strong>Google Analytics:</strong> Provides website analytics and user behavior tracking</li>
                <li><strong>Social Media Platforms:</strong> May track your activity if you use social login or sharing features</li>
                <li><strong>Payment Processors:</strong> May use cookies for secure payment transactions</li>
                <li><strong>Marketing Partners:</strong> May use cookies to measure advertising effectiveness</li>
              </ul>
              <p className="text-base leading-relaxed mt-3">These third parties have their own privacy policies governing their cookie use. We recommend reviewing their policies for more information.</p>
            </div>

            {/* How Long Cookies Last */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookie Duration</h2>
              <p className="text-base leading-relaxed mb-3">
                Cookies have different lifespans:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><strong>Session Cookies:</strong> These are temporary and are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a specified period or until you manually delete them</li>
              </ul>
              <p className="text-base leading-relaxed mt-3">Most cookies expire after 1-2 years, though some may persist longer.</p>
            </div>

            {/* Managing and Disabling Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Manage or Disable Cookies</h2>
              <p className="text-base leading-relaxed mb-3">
                You have control over cookie usage through several methods:
              </p>
              <div className="space-y-3 text-base">
                <p><strong>Browser Settings:</strong> Most web browsers allow you to refuse cookies or alert you when cookies are being sent. You can typically find cookie settings in your browser's preferences or settings menu.</p>
                <p><strong>Opt-Out Tools:</strong> Many websites provide cookie preference centers where you can select which types of cookies to accept or reject.</p>
                <p><strong>Third-Party Opt-Out:</strong> You can opt out of many third-party analytics services through platforms like the Digital Advertising Alliance (DAA) or Network Advertising Initiative (NAI).</p>
                <p><strong>Do Not Track:</strong> Some browsers offer a "Do Not Track" feature. While we aim to honor such requests, not all services support this feature.</p>
              </div>
              <p className="text-base leading-relaxed mt-3 text-red-600 font-semibold">
                <strong>Note:</strong> Disabling cookies may affect the functionality of our Services and your user experience. Some features may not work properly without certain cookies enabled.
              </p>
            </div>

            {/* Cookie Consent */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookie Consent</h2>
              <p className="text-base leading-relaxed">
                When you first visit our Services, we display a cookie consent banner. By clicking "Accept" or continuing to use our Services, you consent to our use of cookies as described in this policy. You can adjust your preferences at any time through our cookie consent tool.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Security of Cookie Data</h2>
              <p className="text-base leading-relaxed">
                We take security seriously and implement measures to protect cookie data. However, no transmission of data over the Internet is completely secure. While we implement industry-standard security practices, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Links to Related Policies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Related Policies</h2>
              <p className="text-base leading-relaxed mb-2">
                For more information about how we handle your data, please review:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><Link href="/privacy" className="text-[#10A37F] hover:underline">Privacy Policy</Link> - Details about our data collection and use practices</li>
                <li><Link href="/terms" className="text-[#10A37F] hover:underline">Terms of Service</Link> - Our general terms and conditions</li>
              </ul>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to This Cookie Policy</h2>
              <p className="text-base leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our cookie practices, technology, or legal requirements. The "Last updated" date at the top of this page indicates when this policy was last revised. We encourage you to review this policy periodically. Your continued use of our Services after any changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Questions About Cookies?</h2>
              <p className="text-base leading-relaxed mb-2">
                If you have questions about our cookie practices or this Cookie Policy, please contact us:
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
