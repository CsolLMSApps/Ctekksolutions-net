'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-gray-400">
            Effective Date: March 2026
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
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-base leading-relaxed">
                By accessing and using ctekksolutions.net and our related platforms and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services. We reserve the right to modify these terms at any time. Your continued use of our Services constitutes your acceptance of any changes.
              </p>
            </div>

            {/* Description of Services */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Description of Services</h2>
              <p className="text-base leading-relaxed mb-3">
                CTekk Solutions Inc ("CSOL") provides a range of services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Consulting and technology advisory services</li>
                <li>Staffing and talent recruitment services</li>
                <li>AI training and professional development programs</li>
                <li>Online platforms and learning management systems</li>
                <li>Job board and career platform services</li>
                <li>Career tools and resume optimization services</li>
              </ul>
              <p className="text-base leading-relaxed mt-3"><strong>All services are provided on a best-effort basis.</strong> We strive to deliver quality services but do not guarantee specific results or outcomes.</p>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. User Responsibilities</h2>
              <p className="text-base leading-relaxed mb-3">
                As a user of our Services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Provide accurate, truthful, and complete information</li>
                <li>Use our Services only for lawful purposes</li>
                <li>Not engage in any conduct that restricts or inhibits anyone's use or enjoyment of our Services</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not distribute malware, spam, or other harmful content</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Intellectual Property Rights</h2>
              <p className="text-base leading-relaxed">
                All content, code, branding, logos, designs, trademarks, and other intellectual property on our Services are owned by CTekk Solutions Inc or our licensors. You may not reproduce, modify, distribute, or display any content without explicit permission. Unauthorized use of our intellectual property is prohibited and may result in legal action.
              </p>
            </div>

            {/* No Guarantees */}
            <div className="bg-gray-50 border-l-4 border-red-500 p-4 rounded">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. No Guarantees on Outcomes</h2>
              <p className="text-base leading-relaxed font-semibold">
                <strong>CSOL does not guarantee employment, job placement, salary levels, career outcomes, training results, or any specific business outcomes. All services are advisory in nature.</strong> Success depends on many factors outside CSOL's control, including market conditions, your qualifications, effort, and third-party decisions. We make no warranties or representations regarding the likelihood of positive results.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
              <p className="text-base leading-relaxed mb-3">
                <strong>To the maximum extent permitted by law, CSOL shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our Services, including but not limited to:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li>Loss of data or profits</li>
                <li>Business interruption</li>
                <li>Loss of opportunity or employment</li>
                <li>Failure to achieve desired results</li>
                <li>Service downtime or technical issues</li>
              </ul>
              <p className="text-base leading-relaxed mt-3">
                Our total liability for any claim arising out of these Terms shall not exceed the total fees you have paid to CSOL in the twelve months preceding the claim, or $100, whichever is greater.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Indemnification</h2>
              <p className="text-base leading-relaxed">
                You agree to indemnify, defend, and hold harmless CTekk Solutions Inc, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of or related to your use of our Services, violation of these Terms, or violation of any law or third-party rights.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Third-Party Links and Content</h2>
              <p className="text-base leading-relaxed">
                Our Services may contain links to third-party websites and resources. We are not responsible for the availability, accuracy, or content of these external sites. Your use of third-party sites is governed by their own terms and policies. We do not endorse or guarantee the quality of third-party content or services.
              </p>
            </div>

            {/* Platform-Specific Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Platform-Specific Terms</h2>
              <p className="text-base leading-relaxed mb-3">
                Our various platforms and services have specific terms and conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base">
                <li><strong>DFWITJOBS:</strong> DFW IT job board and networking platform</li>
                <li><strong>OPTPlanet.tech:</strong> Global AI job board and contracts platform</li>
                <li><strong>OPTPlanet Online:</strong> AI career tools and resume optimization</li>
                <li><strong>AI Learn Hub:</strong> Professional AI training and education platform</li>
                <li><strong>Benzaiten LMS:</strong> Learning management system for enterprise training</li>
              </ul>
              <p className="text-base leading-relaxed mt-3">Each platform operates under these Terms of Service. Additional platform-specific terms and policies may apply and will be presented to users upon registration or access.</p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Governing Law</h2>
              <p className="text-base leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles. Any legal action or proceeding shall be subject to the jurisdiction of the state and federal courts located in Dallas County, Texas.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Dispute Resolution</h2>
              <p className="text-base leading-relaxed mb-3">
                Before initiating formal proceedings, the parties agree to attempt good faith negotiation to resolve any disputes. If negotiation fails, any disputes arising from or relating to these Terms or the use of our Services shall be subject to binding arbitration in Dallas, Texas, conducted under the rules of the American Arbitration Association.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">12. Termination</h2>
              <p className="text-base leading-relaxed">
                Either party may terminate their use of or relationship with CSOL at any time. CSOL reserves the right to terminate or suspend access to our Services at any time for any reason, including violation of these Terms. Upon termination, any rights granted to you are immediately revoked.
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">13. Modifications to Terms</h2>
              <p className="text-base leading-relaxed">
                CSOL may modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our Services following the posting of modified Terms constitutes your acceptance of the changes. We encourage you to review these Terms periodically.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">14. Contact Information</h2>
              <p className="text-base leading-relaxed mb-2">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="text-base">
                <p><strong>Email:</strong> info@ctekksolutions.net</p>
                <p className="mt-2"><strong>Mailing Address:</strong></p>
                <p>CTekk Solutions Inc</p>
                <p>14800 Quorum Drive, Suite 285</p>
                <p>Dallas, TX 75254</p>
              </div>
            </div>

            {/* Severability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">15. Severability</h2>
              <p className="text-base leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, that provision shall be modified to the minimum extent necessary to make it valid, or if not possible, shall be severed. The remaining provisions shall continue in full force and effect.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
