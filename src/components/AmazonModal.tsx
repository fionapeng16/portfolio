import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiAlertTriangle, FiCheckCircle, FiTrendingUp, FiShield, FiDatabase, FiInfo } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
}

interface AmazonModalProps {
  project: Project;
  onClose: () => void;
}

const AmazonModal: React.FC<AmazonModalProps> = ({ project, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-24 bg-black/20 backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-soft max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-200"
        >
          {/* Header */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 lg:h-full object-cover bg-[#BDD7DE]/10 rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <FiX className="w-5 h-5 text-black" />
            </button>
            <div className="absolute bottom-4 left-4">
              <span className="text-sm font-mono text-[#583722] bg-[#BDD7DE] px-4 py-2 rounded-full border border-[#BDD7DE]">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title and Links */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-4xl font-bold text-text-primary mb-2">Amazon</h2>
                <p className="text-xl text-text-secondary font-mono">Modular Approval & Reconciliation Services</p>
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-[#BDD7DE] hover:bg-[#BDD7DE]/80 text-[#583722] dark:text-[#583722] px-4 py-2 rounded-lg transition-all duration-300 border border-[#BDD7DE]"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span className="text-sm font-medium">GitHub</span>
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-[#583722] hover:bg-[#583722]/80 text-white px-4 py-2 rounded-lg transition-all duration-300 border border-[#583722]"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Visit Amazon</span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Project Overview */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <FiInfo className="w-6 h-5 text-[#583722] dark:text-[#D4A574]" />
                Project Overview
              </h3>
              <div className="bg-[#BDD7DE]/10 rounded-2xl p-6 border border-[#BDD7DE]/30">
                <p className="text-lg text-text-secondary leading-relaxed">
                  At <strong>Amazon</strong>, I worked on the <strong>payments platform</strong>, contributing to <strong>two major projects</strong> that improved transaction efficiency and customer experience. My work focused on building <strong>resilient, customer-facing systems</strong> that balanced usability with reliability at scale, processing <strong>millions of global transactions daily</strong>.
                </p>
              </div>
            </div>

            {/* NDA Notice */}
            <div className="bg-[#BDD7DE]/10 rounded-2xl p-6 mb-8 border border-[#BDD7DE]/30">
              <div className="flex items-center gap-3 mb-3">
                <FiShield className="w-6 h-6 text-[#583722] dark:text-[#D4A574]" />
                <h3 className="text-lg font-semibold text-[#583722] dark:text-[#D4A574]">Details Protected Under NDA</h3>
              </div>
              <p className="text-text-secondary text-sm">
                This project contains <strong>confidential information about Amazon's internal systems</strong>. 
                The details shared are <strong>publicly available metrics and general technical approaches</strong>.
              </p>
            </div>

            {/* The Challenge */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <FiAlertTriangle className="w-6 h-5 text-[#583722] dark:text-[#D4A574]" />
                The Challenge
              </h3>
              <div className="bg-[#BDD7DE]/10 rounded-2xl p-6 border border-[#BDD7DE]/30">
                                  <p className="text-lg text-text-secondary leading-relaxed">
                    Amazon's <strong>payments platform processes millions of transactions daily</strong>. <strong>Manual inefficiencies in approvals and reconciliation</strong> caused delays and <strong>high support ticket volume</strong>.
                  </p>
              </div>
            </div>

            {/* My Solutions */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <FiCheckCircle className="w-6 h-5 text-green-600" />
                My Solutions
              </h3>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-[#BDD7DE]/30 shadow-soft"
                >
                  <h4 className="text-xl font-semibold text-text-primary mb-4">Modular Approval System</h4>
                  <p className="text-text-secondary mb-3">
                    Architected an <strong>end-to-end workflow</strong> built with React, TypeScript, Java, and AWS UI Polaris. 
                    This improved <strong>approval throughput by 20%</strong>, and scaled <strong>seamlessly across CI/CD pipelines</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                                      <span className="text-xs bg-[#BDD7DE]/30 text-[#583722] dark:text-white px-2 py-1 rounded border border-[#BDD7DE]/50">React</span>
                  <span className="text-xs bg-[#BDD7DE]/30 text-[#583722] dark:text-white px-2 py-1 rounded border border-[#BDD7DE]/50">TypeScript</span>
                  <span className="text-xs bg-[#BDD7DE]/30 text-[#583722] dark:text-white px-2 py-1 rounded border border-[#BDD7DE]/50">Java</span>
                  <span className="text-xs bg-[#BDD7DE]/30 text-[#583722] dark:text-white px-2 py-1 rounded border border-[#BDD7DE]/50">AWS UI Polaris</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-[#BDD7DE]/30 shadow-soft"
                >
                  <h4 className="text-xl font-semibold text-text-primary mb-4">Reconciliation Service</h4>
                  <p className="text-text-secondary mb-3">
                    Built a <strong>Next.js SSR backend</strong> delivering <strong>structured payment data on customer order pages</strong>, 
                    cutting <strong>~300,000 annual support contacts</strong> and simplifying <strong>transaction-level auditing</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                                      <span className="text-xs bg-[#BDD7DE]/30 text-[#583722] dark:text-white px-2 py-1 rounded border border-[#BDD7DE]/50">Next.js</span>
                  <span className="text-xs bg-[#BDD7DE]/30 text-[#583722] dark:text-white px-2 py-1 rounded border border-[#BDD7DE]/30">SSR</span>
                  <span className="text-xs bg-[#BDD7DE]/30 text-[#583722] dark:text-white px-2 py-1 rounded border border-[#BDD7DE]/50">Backend</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <FiTrendingUp className="w-6 h-5 text-[#583722] dark:text-[#D4A574]" />
                Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-[#BDD7DE]/30 shadow-soft text-center"
                >
                  <div className="text-3xl font-bold text-[#583722] dark:text-[#D4A574] mb-2">20%</div>
                  <div className="text-text-secondary font-medium">Efficiency Boost</div>
                  <div className="text-sm text-text-muted mt-2">Approval Throughput</div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-[#BDD7DE]/30 shadow-soft text-center"
                >
                  <div className="text-3xl font-bold text-[#583722] dark:text-[#D4A574] mb-2">300K+</div>
                  <div className="text-text-secondary font-medium">Fewer Support Tickets</div>
                  <div className="text-sm text-text-muted mt-2">Per Year</div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 border border-[#BDD7DE]/30 shadow-soft text-center"
                >
                  <div className="text-3xl font-bold text-[#583722] dark:text-[#D4A574] mb-2">Millions</div>
                  <div className="text-text-secondary font-medium">Global Transactions</div>
                  <div className="text-sm text-text-muted mt-2">Improved Reliability</div>
                </motion.div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <FiDatabase className="w-5 h-5 text-[#583722] dark:text-[#D4A574]" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="bg-[#BDD7DE]/30 text-[#583722] dark:text-white px-4 py-2 rounded-full text-sm font-medium border border-[#BDD7DE]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <div className="flex justify-center">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#583722] hover:bg-[#583722]/80 text-white px-8 py-3 rounded-lg transition-all duration-300 border border-[#583722] font-medium"
              >
                Close Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AmazonModal; 