import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiClock, FiCheckCircle, FiTrendingUp, FiSmartphone, FiDatabase, FiInfo } from 'react-icons/fi';

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

interface FEMModalProps {
  project: Project;
  onClose: () => void;
}

const FEMModal: React.FC<FEMModalProps> = ({ project, onClose }) => {
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
          className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-soft max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
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
                <h2 className="text-4xl font-bold text-text-primary mb-2">UCLA FEM Magazine</h2>
                <p className="text-xl text-text-secondary font-mono">Website Redesign</p>
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-[#BDD7DE] hover:bg-[#BDD7DE]/80 text-[#583722] dark:text-[#583722] px-4 py-2 rounded-full border border-[#BDD7DE]"
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
                    <span className="text-sm font-medium">Visit Magazine</span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Project Overview */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
                <FiInfo className="w-5 h-5 text-[#583722] dark:text-[#D4A574]" />
                Project Overview
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                <strong>UCLA FEM Magazine</strong> is a <strong>student-run feminist publication</strong> that needed a <strong>modern, accessible website</strong> to better reach and engage their readership. The existing site had <strong>performance issues, accessibility gaps</strong>, and wasn't optimized for mobile devices, limiting their ability to connect with a wider audience.
              </p>
            </div>

            {/* Before/After Comparison */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
                <FiClock className="w-5 h-5 text-[#583722] dark:text-[#D4A574]" />
                Before & After
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Before */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#BDD7DE]/10 rounded-2xl p-6 border border-[#BDD7DE]/30"
                >
                  <h4 className="text-xl font-semibold text-text-primary mb-4">Before</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">Long page load times</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">Non-optimized for mobile</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">Accessibility compliance gaps</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">Outdated design system</span>
                    </div>
                  </div>
                </motion.div>

                {/* After */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-[#BDD7DE]/10 rounded-2xl p-6 border border-[#BDD7DE]/30"
                >
                  <h4 className="text-xl font-semibold text-text-primary mb-4">After (My Work)</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary"><strong>Rebuilt site</strong> with React, Django, Java, Tailwind CSS</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-3 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary"><strong>Cut page load times by 35%</strong></span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary"><strong>Improved user retention by 20%</strong></span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary"><strong>Mobile-responsive and ADA-accessible</strong></span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Performance Improvements */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
                <FiTrendingUp className="w-5 h-5 text-[#583722] dark:text-[#D4A574]" />
                Performance Improvements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-[#BDD7DE]/30 dark:border-[#BDD7DE]/20 shadow-soft text-center"
                >

                  <div className="text-3xl font-bold text-[#583722] dark:text-[#D4A574] mb-2">35%</div>
                  <div className="text-text-secondary font-medium">Faster Load Times</div>
                  <div className="text-sm text-text-muted mt-2">Page Performance</div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-[#BDD7DE]/30 dark:border-[#BDD7DE]/20 shadow-soft text-center"
                >

                  <div className="text-2xl font-bold text-[#583722] dark:text-[#D4A574] mb-2">20%</div>
                  <div className="text-text-secondary font-medium">User Retention</div>
                  <div className="text-sm text-text-muted mt-2">Engagement Boost</div>
                </motion.div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <FiSmartphone className="w-5 h-5 text-[#583722] dark:text-[#D4A574]" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-secondary">Responsive design for all devices</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-secondary">ADA accessibility compliance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-secondary">Modern publishing workflow</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#BDD7DE] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-secondary">Optimized asset delivery</span>
                </div>
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

export default FEMModal; 