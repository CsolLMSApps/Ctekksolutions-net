'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

export default function OffshoreDevelopmentPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Back Navigation */}
      <div className="py-4 px-6 border-b border-gray-100">
        <Link href="/insights" className="flex items-center text-[#10A37F] hover:text-[#0d8066] transition">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>
      </div>

      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 px-6 max-w-3xl mx-auto"
      >
        <div className="inline-block bg-[#10A37F]/10 text-[#10A37F] text-xs px-3 py-1 rounded-full">
          Case Studies
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
          Offshore Development: Best Practices for Global Teams
        </h1>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            November 12, 2025
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            6 min read
          </div>
        </div>
      </motion.div>

      {/* Article Body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="px-6 pb-16 max-w-3xl mx-auto"
      >
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            Offshore development remains one of the most misunderstood practices in technology. Done well, it enables organizations to access world-class talent, accelerate delivery timelines, and reduce development costs—all while building diverse, innovative teams. Done poorly, it produces communication failures, quality issues, cultural friction, and projects that consume far more management overhead than they save. The difference isn't technology—it's discipline. Organizations that succeed with offshore development treat it as fundamentally different from onshore development, requiring intentional process changes, different communication structures, and careful attention to team integration. Those that try to manage offshore teams exactly like local teams consistently encounter problems.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            The most successful offshore development model in the industry is the distributed paired model, where companies establish a small onshore team and a larger offshore team in another geography, with intentional overlap and division of responsibilities. CTekk's Dallas-Mysuru model exemplifies this approach: establishing a core team in Dallas while leveraging world-class engineering talent in Mysuru, India, with deliberate overlap in working hours and clear handoff protocols. This model solves the two biggest challenges with offshore development: communication friction and accountability. When offshore teams work completely asynchronously with onshore teams, critical information gets lost in handoffs, decisions take forever to make, and nobody owns outcomes holistically. The paired model maintains communication throughput and ensures accountability while preserving cost advantages.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Managing Time Zone Complexity</h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Time zone differences are the first thing organizations think about with offshore development, but many get the strategy wrong. Attempting to find "overlapping hours" that work for both timezones often produces unhealthy working conditions—people working early morning or late evening. A better approach is accepting asynchronicity as a feature, not a bug, and organizing work accordingly. Break work into clearly-scoped chunks that can be completed by one team and handed off to the other with full context. Use written documentation extensively—not in place of synchronous communication, but as the primary mechanism for sharing important information. Reserve synchronous time (the 2-4 hours of working overlap) for the conversations that truly need real-time interaction: status discussions, decision-making, relationship building. This structure is actually more efficient than trying to operate as if everyone's working the same hours.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Building Quality into Distributed Development</h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Quality is a common concern with offshore development, but this is actually a solved problem when approached correctly. The issue isn't geographic—it's process. Offshore teams produce high-quality software when they're given clear specifications, adequate time, and robust QA processes. In fact, some of the highest-quality engineering organizations in the world are primarily offshore. The key is establishing shared quality standards and enforcing them consistently. This means clear code review processes, automated testing practices, design reviews before implementation, and QA practices that catch issues before they reach production. It also means investing in your offshore team's education around your specific quality standards—they may have learned different practices in previous roles, and they need to understand your approach. Many organizations find that establishing rigorous QA processes for offshore development also improves the quality of onshore development.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Communication Practices That Work</h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Communication is the lifeblood of successful distributed teams. This means establishing practices that are dramatically more intentional than what many organizations use for collocated teams. Every project should have clear documentation outlining requirements, architecture decisions, and technical approach. Daily standups, even brief ones, maintain alignment and surface blockers quickly. Weekly syncs between onshore and offshore leadership ensure nothing important slips through cracks. Recorded meetings allow people in different timezones to participate asynchronously. Slack channels organized by project maintain context and make decisions discoverable. The organizations that excel at distributed development don't leave communication to chance—they treat it as a structured practice with clear ownership and accountability.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Building Genuine Team Cohesion</h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Many distributed teams function well operationally but lack genuine cohesion and camaraderie. People work together professionally but don't develop the deeper team bonds that drive discretionary effort and innovation. Building cohesion across geographies requires intentionality. This might include periodic in-person team gatherings—not constantly, but occasionally, so people have strong personal relationships to lean on. It includes shared celebrations of achievements, recognition of contributions from both locations, and deliberate efforts to build understanding of different cultures. It includes intentional pairing of onshore and offshore engineers so they develop working relationships and mutual respect. Many companies find that teams that are genuinely cohesive across locations actually outperform purely collocated teams—they bring diverse perspectives, they work with intention rather than defaulting to immediate physical proximity, and they've developed communication practices that serve them well.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Successful offshore development is achievable. Companies across industries use offshore partners to extend capacity, access specialized talent, and bring diverse perspectives to product development. The organizations that get it right treat offshore development as a distinctive practice with its own discipline, rather than trying to force geographic distribution to work the same way as colocation. They establish clear processes, invest in communication, focus ruthlessly on quality, and build genuine team relationships. When done well, offshore development is one of the most powerful ways to scale engineering organizations while accessing world-class talent and controlling costs.
          </p>
        </div>
      </motion.div>

      {/* Related Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="border-t border-gray-100 py-8 px-6 max-w-3xl mx-auto"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">Explore Our Solutions</h3>
        <div className="space-y-3">
          <div>
            <a href="/services/offshore-development" className="text-[#10A37F] hover:underline font-medium">
              → CTekk Offshore Services: Dallas-Mysuru Model
            </a>
          </div>
          <div>
            <a href="/services/staffing" className="text-[#10A37F] hover:underline font-medium">
              → Global Talent Solutions: Build Your Distributed Team
            </a>
          </div>
          <div>
            <a href="/services" className="text-[#10A37F] hover:underline font-medium">
              → Explore All CTekk Services
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
