import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiLock, FiEye, FiEyeOff, FiAlertTriangle, FiCheckCircle, FiTrendingUp, FiDatabase } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  image: string;
  featured?: boolean;
}

interface PasswordProtectedModalProps {
  project: Project;
  onClose: () => void;
}

const PasswordProtectedModal: React.FC<PasswordProtectedModalProps> = ({ project, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'fiopeng') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isAuthenticated) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200"
              >
                <FiX className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Password Form */}
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#BDD7DE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiLock className="w-8 h-8 text-[#583722]" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">Protected Content</h2>
                <p className="text-text-secondary">
                  This project contains confidential information about Amazon's internal systems. 
                  Please enter the password to view details.
                </p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white dark:bg-gray-800 text-text-primary"
                      placeholder="Enter password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <FiAlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#583722] hover:bg-[#583722]/80 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Access Project Details
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-[#583722]/70">
                  This content is protected under a Non-Disclosure Agreement (NDA)
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // If authenticated, show the actual Amazon modal content
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 lg:h-full object-cover bg-[#BDD7DE]/10 rounded-t-3xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200"
            >
              <FiX className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title and Links */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-4xl font-bold text-text-primary mb-2">{project.title}</h2>
                <p className="text-xl text-text-secondary font-mono">Modular Approval & Reconciliation Services</p>
              </div>
              <div className="flex gap-3">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-[#583722] hover:bg-[#583722]/80 text-white px-4 py-2 rounded-lg transition-all duration-300 border border-[#583722]"
                  >
                    <span className="text-sm font-medium">Visit Amazon</span>
                  </motion.a>
                )}
              </div>
            </div>

                                    {/* Project Overview */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
                            <FiLock className="w-5 h-5 text-[#583722] dark:text-[#D4A574]" />
                            Project Overview
                          </h3>
                          <p className="text-lg text-text-secondary leading-relaxed">
                            At <strong>Amazon</strong>, I worked on the <strong>payments platform</strong>, contributing to <strong>two major projects</strong> that improved transaction efficiency and customer experience. My work focused on building <strong>resilient, customer-facing systems</strong> that balanced usability with reliability at scale, processing <strong>millions of global transactions daily</strong>.
                          </p>
                        </div>

            {/* NDA Notice */}
            <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <FiLock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">Details Protected Under NDA</h3>
              </div>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                This project contains <strong>confidential information about Amazon's internal systems</strong>. 
                The details shared are <strong>publicly available metrics and general technical approaches</strong>.
              </p>
            </div>

                                    {/* The Challenge */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
                            <FiAlertTriangle className="w-5 h-5 text-[#583722] dark:text-[#D4A574]" />
                            The Challenge
                          </h3>
                          <p className="text-lg text-text-secondary leading-relaxed">
                            Amazon's <strong>payments platform processes millions of transactions daily</strong>. <strong>Manual inefficiencies in approvals and reconciliation</strong> caused delays and <strong>high support ticket volume</strong>.
                          </p>
                        </div>

                                    {/* My Solutions */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
                            <FiCheckCircle className="w-5 h-5 text-[#583722] dark:text-[#D4A574]" />
                            My Solutions
                          </h3>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-[#BDD7DE]/30 dark:border-[#BDD7DE]/20 shadow-soft"
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
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-[#BDD7DE]/30 dark:border-[#BDD7DE]/20 shadow-soft"
                >
                  <h4 className="text-xl font-semibold text-text-primary mb-4">Reconciliation Service</h4>
                  <p className="text-text-secondary mb-3">
                    Built a <strong>Next.js SSR backend</strong> delivering <strong>structured payment data on customer order pages</strong>, 
                    cutting <strong>~300,000 annual support contacts</strong> and simplifying <strong>transaction-level auditing</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#BDD7DE]/30 text-[#583722] dark:text-white px-2 py-1 rounded border border-[#BDD7DE]/50">Next.js</span>
                    <span className="text-xs bg-[#BDD7DE]/30 text-[#583722] dark:text-white px-2 py-1 rounded border border-[#BDD7DE]/50">SSR</span>
                    <span className="text-xs bg-[#BDD7DE]/30 text-[#583722] dark:text-white px-2 py-1 rounded border border-[#BDD7DE]/50">Backend</span>
                  </div>
                </motion.div>
              </div>
            </div>

                                    {/* Impact Metrics */}
                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
                            <FiTrendingUp className="w-5 h-5 text-[#583722] dark:text-[#D4A574]" />
                            Impact
                          </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-[#BDD7DE]/30 dark:border-[#BDD7DE]/20 shadow-soft text-center"
                >
                  <div className="text-3xl font-bold text-[#583722] dark:text-[#D4A574] mb-2">20%</div>
                  <div className="text-text-secondary font-medium">Efficiency Boost</div>
                  <div className="text-sm text-text-muted mt-2">Approval Throughput</div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-[#BDD7DE]/30 dark:border-[#BDD7DE]/20 shadow-soft text-center"
                >
                  <div className="text-3xl font-bold text-[#583722] dark:text-[#D4A574] mb-2">300K+</div>
                  <div className="text-text-secondary font-medium">Fewer Support Tickets</div>
                  <div className="text-sm text-text-muted mt-2">Per Year</div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-[#BDD7DE]/30 dark:border-[#BDD7DE]/20 shadow-soft text-center"
                >
                  <div className="text-3xl font-bold text-[#583722] dark:text-[#D4A574] mb-2">Millions</div>
                  <div className="text-text-secondary font-medium">Global Transactions</div>
                  <div className="text-sm text-text-muted mt-2">Improved Reliability</div>
                </motion.div>
              </div>
            </div>

                                    {/* Technologies */}
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
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

export default PasswordProtectedModal; 