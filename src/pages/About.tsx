import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Remove the loading state and useEffect - loading should only happen on actual page refresh

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 overflow-x-hidden transition-colors duration-300">
      <div 
        className="absolute inset-0 opacity-100 dark:opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '10px 10px',
          height: '100%',
          minHeight: '100%'
        }}
      ></div>
      <div className="relative z-10">
      
      {/* Left Side - Social Icons (Sticky) */}
      <div className="fixed left-8 bottom-8 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <motion.a
            href="https://github.com/fionapeng16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-[#583722] transition-colors duration-300 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-soft hover:shadow-soft-lg"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/fionapeng01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-[#583722] transition-colors duration-300 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-soft hover:shadow-soft-lg"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </motion.a>
          <div className="w-px h-16 bg-text-muted/30"></div>
        </div>
      </div>

      {/* Right Side - Email (Sticky) */}
      <div className="fixed right-8 bottom-8 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <motion.a
            href="mailto:fiona.peng@ucla.edu"
            className="text-text-muted hover:text-[#583722] transition-colors duration-300 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-soft hover:shadow-soft-lg"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            fiona.peng@ucla.edu
          </motion.a>
          <div className="w-px h-16 bg-text-muted/30"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="relative mb-20">
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-light text-text-primary mb-6">
                Nice to meet you!
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-mono">
                I'm Fiona, a passionate full-stack developer who loves creating digital experiences that make a difference. 
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or enjoying a good cup of coffee.
                <br />
                <span className="text-lg text-text-muted">(and probably debugging something at 2 AM)</span>
              </p>
            </div>
          </motion.div>

          {/* Personal Info Grid - Asymmetric layout */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* About Me */}
            <div className="space-y-6 relative">
              <h2 className="text-3xl font-medium text-text-primary mb-6">About Me</h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p className="font-mono">
                  I'm currently pursuing my degree in Computer Science at UCLA while actively working on projects 
                  that challenge me to grow as a developer. My journey in tech started with curiosity and 
                  has evolved into a passion for building solutions that solve real-world problems.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating user experiences that are 
                  both beautiful and functional. My approach combines technical expertise with creative 
                  problem-solving, always keeping the end user in mind.
                </p>
                <p className="font-mono text-sm">
                  // Sometimes I overthink things, but that's how I learn!
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="space-y-6 relative">
              <h2 className="text-3xl font-medium text-text-primary mb-6">Quick Facts</h2>
              <div className="space-y-4">
                <div className="card-soft p-6">
                  <h3 className="font-medium text-text-primary mb-2">Education</h3>
                  <p className="text-text-secondary">Bachelor of Science in Computer Science</p>
                  <p className="text-sm text-text-muted">Expected Graduation: 2025</p>
                </div>
                
                <div className="card-soft p-6">
                  <h3 className="font-medium text-text-primary mb-2">Location</h3>
                  <p className="text-text-secondary">Available for remote work worldwide</p>
                </div>

                <div className="card-soft p-6">
                  <h3 className="font-medium text-text-primary mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-[#BDD7DE] text-[#583722] px-3 py-1 rounded-full border border-[#BDD7DE]">Web Development</span>
                    <span className="text-sm bg-[#BDD7DE] text-[#583722] px-3 py-1 rounded-full border border-[#BDD7DE]">Open Source</span>
                    <span className="text-sm bg-[#BDD7DE] text-[#583722] px-3 py-1 rounded-full border border-[#BDD7DE]">UI/UX Design</span>
                    <span className="text-sm bg-[#BDD7DE] text-[#583722] px-3 py-1 rounded-full border border-[#BDD7DE]">Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section - Organic grid */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-medium text-text-primary text-center mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className="card-soft p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#BDD7DE] text-[#583722] mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-text-primary mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">React</span>
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">TypeScript</span>
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">Tailwind CSS</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className="card-soft p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#BDD7DE] text-[#583722] mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-text-primary mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">Node.js</span>
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">Python</span>
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">Express</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className="card-soft p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#BDD7DE] text-[#583722] mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
                <h3 className="font-medium text-text-primary mb-3">Database</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">MongoDB</span>
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">PostgreSQL</span>
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">SpannerDB</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                className="card-soft p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#BDD7DE] text-[#583722] mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-text-primary mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">Git</span>
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">Docker</span>
                  <span className="text-xs text-text-muted bg-[#BDD7DE]/30 px-2 py-1 rounded border border-[#BDD7DE]">AWS</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Fun Facts Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-medium text-text-primary text-center mb-12">Fun Facts About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-soft p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#BDD7DE] text-[#583722] mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-text-primary mb-2">Coffee Enthusiast</h3>
                <p className="text-text-secondary text-sm">I can't start my day without a good cup of coffee. It's my fuel for coding!</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-soft p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#BDD7DE] text-[#583722] mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-text-primary mb-2">Plant Parent</h3>
                <p className="text-text-secondary text-sm">I have a growing collection of plants that I'm learning to keep alive.</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-soft p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#BDD7DE] text-[#583722] mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                  </svg>
                </div>
                <h3 className="font-medium text-text-primary mb-2">Music Lover</h3>
                <p className="text-text-secondary text-sm">I always have music playing while I code. It helps me focus and get into the zone.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action - More playful */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-soft">
              <h3 className="text-2xl font-medium text-text-primary mb-4">Let's work together!</h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto font-mono">
                I'm always excited to take on new challenges and collaborate on interesting projects. 
                Whether you have a specific project in mind or just want to chat about technology, 
                I'd love to hear from you!
                <br />
                <span className="text-sm text-text-muted">(Coffee chats are my favorite)</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                onClick={() => window.location.href = '/contact'}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Signature */}
      <motion.div 
        className="text-center py-12 text-text-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-mono">
          designed + developed with <span className="text-red-400">♥</span> by fiona peng
        </p>
      </motion.div>
      </div>
    </div>
  );
};

export default About;
