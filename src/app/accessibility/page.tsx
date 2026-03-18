'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AccessibilityPage() {
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
            Accessibility Statement
          </h1>
          <p className="text-lg text-gray-400">
            Our commitment to inclusive design
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
            {/* Commitment */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Commitment to Accessibility</h2>
              <p className="text-base leading-relaxed">
                CTekk Solutions Inc is committed to ensuring digital accessibility for all users, regardless of ability or disability. We believe that everyone should have equal access to information and services on our websites and platforms. We are continuously working to improve the accessibility of our digital properties to meet or exceed Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
              </p>
            </div>

            {/* Standards and Compliance */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Accessibility Standards</h2>
              <p className="text-base leading-relaxed mb-3">
                We follow these accessibility standards and guidelines:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><strong>WCAG 2.1 Level AA:</strong> We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard, which provides guidance on making digital content more accessible to people with disabilities.</li>
                <li><strong>Section 508 of the Rehabilitation Act:</strong> Our digital properties comply with Section 508 requirements for federal technology accessibility.</li>
                <li><strong>Americans with Disabilities Act (ADA):</strong> We strive to comply with ADA requirements for digital accessibility.</li>
              </ul>
            </div>

            {/* Accessibility Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Accessibility Features</h2>
              <p className="text-base leading-relaxed mb-3">
                Our websites and platforms include the following accessibility features:
              </p>
              <div className="space-y-3 text-base">
                <p><strong>Semantic HTML:</strong> We use proper HTML markup structure to ensure screen readers can interpret content correctly.</p>
                <p><strong>ARIA Attributes:</strong> We implement ARIA (Accessible Rich Internet Applications) labels and roles to enhance accessibility for assistive technologies.</p>
                <p><strong>Keyboard Navigation:</strong> All functionality is accessible using keyboard alone. Users can navigate using Tab, Enter, and arrow keys without requiring a mouse.</p>
                <p><strong>Color Contrast:</strong> We maintain sufficient color contrast ratios (at least 4.5:1 for normal text) to ensure readability for users with low vision.</p>
                <p><strong>Responsive Design:</strong> Our platforms are responsive and work on various devices and screen sizes.</p>
                <p><strong>Alt Text for Images:</strong> All images include descriptive alt text for screen reader users.</p>
                <p><strong>Form Accessibility:</strong> Form fields include clear labels and error messages, and input validation is accessible.</p>
                <p><strong>Video Captions:</strong> Multimedia content includes captions or transcripts where applicable.</p>
                <p><strong>Text Resizing:</strong> Users can resize text using browser zoom or text scaling features.</p>
                <p><strong>Dark Mode Support:</strong> We support dark mode to reduce eye strain for users with light sensitivity.</p>
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Technologies and Tools</h2>
              <p className="text-base leading-relaxed mb-3">
                We use modern web technologies and tools to enhance accessibility:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Next.js and React for semantic component structure</li>
                <li>Tailwind CSS for responsive design and contrast compliance</li>
                <li>Framer Motion for accessible animations</li>
                <li>ARIA-compliant components and patterns</li>
                <li>Accessibility testing tools and automated audits</li>
                <li>Screen reader testing with NVDA and JAWS</li>
              </ul>
            </div>

            {/* Known Limitations */}
            <div className="bg-gray-50 border-l-4 border-amber-500 p-4 rounded">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Known Limitations</h2>
              <p className="text-base leading-relaxed mb-3">
                While we strive for full accessibility, some limitations exist:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Some third-party embedded content (maps, external widgets) may have limited accessibility support</li>
                <li>Legacy pages may not yet fully comply with WCAG 2.1 AA standards and are being updated</li>
                <li>PDF files on our site may not be fully accessible; text versions are available upon request</li>
                <li>Some interactive features may require specific browsers or assistive technologies</li>
              </ul>
              <p className="text-base leading-relaxed mt-3">
                We are actively working to address these limitations and welcome feedback to help us improve.
              </p>
            </div>

            {/* Continuous Improvement */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Ongoing Accessibility Efforts</h2>
              <p className="text-base leading-relaxed mb-3">
                We are committed to continuously improving accessibility:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Regular accessibility audits and testing</li>
                <li>User feedback integration to identify and fix accessibility issues</li>
                <li>Staff training on accessible design and development</li>
                <li>Keeping up with WCAG updates and best practices</li>
                <li>Updating legacy content to meet current accessibility standards</li>
                <li>Collaborating with accessibility experts and organizations</li>
              </ul>
            </div>

            {/* Assistive Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Supported Assistive Technologies</h2>
              <p className="text-base leading-relaxed mb-3">
                Our platforms have been tested and are compatible with the following assistive technologies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>NVDA (NonVisual Desktop Access)</li>
                <li>JAWS (Job Access With Speech)</li>
                <li>VoiceOver (macOS and iOS)</li>
                <li>Narrator (Windows)</li>
                <li>ZoomText and other magnification software</li>
                <li>Speech recognition software</li>
                <li>Switch control and other adaptive devices</li>
              </ul>
            </div>

            {/* Reporting Accessibility Issues */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Report Accessibility Issues</h2>
              <p className="text-base leading-relaxed mb-3">
                We value your feedback and are committed to addressing accessibility barriers. If you encounter an accessibility issue or have a suggestion for improvement, please contact us:
              </p>
              <div className="text-base">
                <p><strong>Email:</strong> info@ctekksolutions.net</p>
                <p className="mt-2">When reporting an issue, please include:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>The URL of the affected page</li>
                  <li>A description of the accessibility barrier</li>
                  <li>Your assistive technology or browser (if applicable)</li>
                  <li>Steps to reproduce the issue</li>
                </ul>
              </div>
              <p className="text-base leading-relaxed mt-3">
                We aim to respond to accessibility concerns within 5 business days and work to resolve issues promptly.
              </p>
            </div>

            {/* Alternative Formats */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Requesting Alternative Formats</h2>
              <p className="text-base leading-relaxed">
                If you need content in an alternative format (such as large print, braille, or audio), please contact us at info@ctekksolutions.net and specify your preferred format. We will make reasonable efforts to provide the requested format in a timely manner.
              </p>
            </div>

            {/* Related Resources */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Accessibility Resources</h2>
              <p className="text-base leading-relaxed mb-2">
                For more information about web accessibility, visit:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" className="text-[#10A37F] hover:underline">Web Accessibility Initiative (WAI)</a></li>
                <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-[#10A37F] hover:underline">WCAG 2.1 Quick Reference</a></li>
                <li><a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer" className="text-[#10A37F] hover:underline">Section 508 of the Rehabilitation Act</a></li>
              </ul>
            </div>

            {/* Policy Updates */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Updates to This Statement</h2>
              <p className="text-base leading-relaxed">
                We review and update this Accessibility Statement regularly as we improve our digital properties. This page was last updated in March 2026. We encourage you to check back periodically for updates and improvements to our accessibility efforts.
              </p>
            </div>

            {/* Related Policies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Related Policies</h2>
              <p className="text-base leading-relaxed mb-2">
                For more information about our practices, please review:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><Link href="/privacy" className="text-[#10A37F] hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-[#10A37F] hover:underline">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-[#10A37F] hover:underline">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-base leading-relaxed mb-2">
                If you have questions about our accessibility practices:
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
