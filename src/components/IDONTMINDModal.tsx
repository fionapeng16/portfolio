import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiUsers, FiTrendingUp, FiCloud, FiDatabase, FiSmartphone, FiInfo } from 'react-icons/fi';

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

interface IDONTMINDModalProps {
  project: Project;
  onClose: () => void;
}

const IDONTMINDModal: React.FC<IDONTMINDModalProps> = ({ project, onClose }) => {
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
                <h2 className="text-4xl font-bold text-text-primary mb-2">IDONTMIND</h2>
                <p className="text-xl text-text-secondary font-mono">Personalized Mental Health App</p>
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
                    <span className="text-sm font-medium">Visit Website</span>
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
                <strong>IDONTMIND</strong> is a <strong>nonprofit mental health initiative</strong> that needed a mobile application to help users track their emotional well-being and identify behavioral patterns over time. The app serves as a <strong>comprehensive tool for mental health awareness and personal growth</strong>, providing users with insights and tools to better understand their mental health journey.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FiUsers className="w-5 h-5 text-[#583722] dark:text-[#D4A574]" />
                <h3 className="text-xl font-semibold text-text-primary">Impact</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#583722] dark:text-[#D4A574] mb-2">147,000+</div>
                <div className="text-text-secondary"><strong>users supported</strong> with <strong>personalized tools</strong></div>
              </div>
            </div>

            {/* Features I Built */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
                <FiSmartphone className="w-5 h-5 text-[#583722] dark:text-[#D4A574]" />
                Features I Built
              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-[#BDD7DE]/30 dark:border-[#BDD7DE]/20 shadow-soft"
                >
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Behavioral Tracking & Visualization</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Built comprehensive mental health tracking with <strong>daily mood logging</strong>, <strong>sleep pattern monitoring</strong>, and <strong>stress level assessments</strong>. Users could visualize their emotional trends over time through interactive charts and graphs, helping them identify <strong>patterns and triggers</strong> for better self-awareness and mental health management.
                  </p>
                </motion.div>

                                  <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-[#BDD7DE]/30 dark:border-[#BDD7DE]/20 shadow-soft"
                >
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Cloud Storage & Data Management</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Implemented secure <strong>AWS S3 integration</strong> for storing user media, journal entries, and mental health data. Built robust <strong>data encryption and user privacy controls</strong>, ensuring <strong>HIPAA compliance</strong> while maintaining fast access to personal health information across devices.
                  </p>
                </motion.div>

                                  <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-[#BDD7DE]/30 dark:border-[#BDD7DE]/20 shadow-soft"
                >
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Scalable Backend Architecture</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Designed a <strong>Node.js backend with MongoDB</strong> for flexible data modeling and high-performance queries. Implemented <strong>connection pooling, caching strategies, and load balancing</strong> to handle <strong>10,000+ concurrent users</strong> while maintaining <strong>sub-second response times</strong> for critical mental health data access.
                  </p>
                </motion.div>

                                  <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-[#BDD7DE]/30 dark:border-[#BDD7DE]/20 shadow-soft"
                >
                  <h4 className="text-lg font-semibold text-text-primary mb-3">User Experience & Design</h4>
                  <p className="text-text-secondary leading-relaxed">
                    Collaborated with UX designers in <strong>biweekly sprints</strong> to create an <strong>intuitive, accessible interface</strong> for users experiencing mental health challenges. Focused on <strong>reducing cognitive load</strong>, implementing clear navigation patterns, and ensuring the app felt <strong>supportive rather than overwhelming</strong> for vulnerable users.
                  </p>
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

export default IDONTMINDModal; 