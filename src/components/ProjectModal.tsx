import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiCalendar, FiTag } from 'react-icons/fi';

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-soft max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200"
        >
          {/* Header */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 lg:h-96 object-contain bg-gray-50 rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <FiX className="w-5 h-5 text-text-primary" />
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-3xl font-medium text-text-primary">{project.title}</h2>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-[#BDD7DE] hover:bg-[#BDD7DE]/80 text-[#583722] px-4 py-2 rounded-lg transition-all duration-300 border border-[#BDD7DE]"
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
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-text-primary mb-3 flex items-center gap-2">
                <FiCalendar className="w-5 h-5 text-[#583722]" />
                Project Overview
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-text-primary mb-4 flex items-center gap-2">
                <FiTag className="w-5 h-5 text-[#583722]" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="bg-[#BDD7DE]/30 text-[#583722] px-4 py-2 rounded-full text-sm font-medium border border-[#BDD7DE]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-text-primary mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.longDescription.includes('Features include') && (
                  project.longDescription
                    .split('Features include')[1]
                    ?.split('.')[0]
                    ?.split(',')
                    ?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#583722] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-text-secondary">
                          {feature.trim()}
                        </span>
                      </li>
                    )) || []
                )}
                {(!project.longDescription.includes('Features include') || 
                  !project.longDescription.split('Features include')[1]) && (
                  <>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#583722] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">
                        Responsive design optimized for all devices
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#583722] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">
                        Modern UI/UX with intuitive user experience
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#583722] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-secondary">
                        Scalable architecture with best practices
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Close Button */}
            <div className="flex justify-center">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
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

export default ProjectModal;
