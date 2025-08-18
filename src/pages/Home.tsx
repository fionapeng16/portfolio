import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import IDONTMINDModal from '../components/IDONTMINDModal';
import EndOverdoseModal from '../components/EndOverdoseModal';
import AmazonModal from '../components/AmazonModal';
import PasswordProtectedModal from '../components/PasswordProtectedModal';
import FEMModal from '../components/FEMModal';

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

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "IDONTMIND",
    description: "Built a React Native mental health app serving 147K+ users with personalized tracking and visualizations",
    longDescription: "Features I built:\n\n📊 Behavioral tracking & trend visualization → Users could log mental health patterns and see insights.\n\n☁️ Cloud storage → Integrated AWS S3 for media and data.\n\n🔗 Scalable backend → Node.js + MongoDB to handle high traffic.\n\n🎨 User-first design → Biweekly sprint collaboration with designers on responsive UI.\n\nImpact: Launched to 147,000+ users, supporting a global audience with tools for better mental health awareness.\n\nTech Stack: React Native, Node.js, MongoDB, Python, AWS S3",
    technologies: ["React Native", "MongoDB", "Node.js", "Python", "AWS S3"],
    image: "/idontmind.jpeg",
    githubUrl: "https://github.com/lablueprint/idontmind",
    liveUrl: "https://idontmind.com/",
    category: "Mobile App",
    featured: true
  },
  {
    id: 2,
    title: "End Overdose",
    description: "Created a gamified overdose-prevention education platform, now adopted by 15+ schools and teaching 1,200+ students",
    longDescription: "End Overdose needed a way to make overdose-prevention education engaging for teens. I developed a full-stack web platform with interactive lessons, real-time progress tracking, and admin dashboards for teachers.\n\nAdoption: 15+ Los Angeles schools\n\nReach: 1,200+ students educated\n\nEngagement: 3× higher compared to prior teaching methods\n\nThe platform blended Next.js and Firebase with game-like learning mechanics, helping educators deliver life-saving knowledge in a format that resonates with students.\n\nTech Stack: Next.js, Node.js, Firebase, Tailwind CSS",
    technologies: ["Next.js", "Node.js", "Firebase", "Tailwind CSS"],
    image: "/end-overdose.jpeg",
    githubUrl: "https://github.com/lablueprint/end-overdose",
    liveUrl: "https://endoverdose.net/",
    category: "Web Platform",
    featured: true
  },
  {
    id: 3,
    title: "Amazon",
    description: "Designed secure, large-scale systems for Amazon Payments, including an approval workflow and reconciliation service.",
    longDescription: "The Challenge: Amazon's payments platform processes millions of transactions daily. Manual inefficiencies in approvals and reconciliation caused delays and high support ticket volume.\n\nMy Solutions:\n\nModular Approval System → Architected an end-to-end workflow built with React, TypeScript, Java, and AWS UI Polaris. This improved approval throughput by 20%, and scaled seamlessly across CI/CD pipelines.\n\nReconciliation Service → Built a Next.js SSR backend delivering structured payment data on customer order pages, cutting ~300,000 annual support contacts and simplifying transaction-level auditing.\n\nImpact: 20% efficiency boost, 300K fewer support tickets/year, improved reliability for millions of global transactions.\n\nTech Stack: React, TypeScript, Java, AWS UI Polaris, Next.js, CI/CD",
    technologies: ["React", "TypeScript", "Java", "AWS UI Polaris", "Next.js"],
    image: "/amazon.jpeg",
    liveUrl: "https://www.amazon.com/",
    category: "Amazon Payments",
    featured: true
  },
  {
    id: 4,
    title: "FEM Magazine",
    description: "Led a full redesign of UCLA's FEM Magazine website, making it faster, more accessible, and mobile-friendly",
    longDescription: "Before:\n\n• Long page load times\n• Non-optimized for mobile\n• Accessibility compliance gaps\n\nAfter (my work):\n\n• Rebuilt site with React, Django, Java, Tailwind CSS\n• Cut page load times by 35%\n• Improved user retention by 20%\n• Mobile-responsive and ADA-accessible\n\nThis redesign not only improved user experience but also gave FEM a modern publishing platform to reach and engage a larger digital audience.\n\nTech Stack: React, Django, Tailwind CSS, Java",
    technologies: ["Java", "React", "Tailwind CSS", "Django"],
    image: "/fem.jpeg",
    liveUrl: "https://femmagazine.com/",
    category: "Web Platform",
    featured: true
  }
];

const experiences: Experience[] = [
  {
    id: 1,
    company: "Amazon",
    role: "Software Engineering Intern",
    period: "June 2025 - Present",
    location: "Seattle, WA",
    description: [
      "Architected and launched an end-to-end modular approval system in Amazon's payments platform (React, TypeScript, Java, AWS UI Polaris), boosting transaction efficiency by 20% and streamlining deployment through CI/CD pipelines.",
      "Built a Next.js SSR backend service delivering structured payment data on order pages, cutting ~300K annual support contacts and streamlining post-purchase reconciliation for millions of transactions."
    ],
    technologies: ["React", "TypeScript", "Java", "AWS UI Polaris", "Next.js", "CI/CD"]
  },
  {
    id: 2,
    company: "End Overdose",
    role: "Full Stack Developer",
    period: "Oct 2024 - June 2025",
    location: "Los Angeles, CA",
    description: [
      "Developed a full-stack education platform using Next.js, Node.js, Firebase, and Tailwind CSS, adopted by 15+ LA schools to teach overdose prevention to 1,200+ students through interactive, gamified lessons.",
      "Implemented real-time progress tracking and school admin dashboards, driving 3x higher student engagement."
    ],
    technologies: ["Next.js", "Node.js", "Firebase", "Tailwind CSS"]
  },
  {
    id: 3,
    company: "IDONTMIND",
    role: "Mobile Application Developer",
    period: "Sept 2023 - July 2024",
    location: "Los Angeles, CA",
    description: [
      "Engineered and deployed a personalized React Native mobile mental health app serving 147K+ users, leveraging MongoDB, Node.js, Python, and AWS S3 to analyze behavioral patterns and visualize trends.",
      "Collaborated in agile biweekly sprints using Git and Figma to build responsive UI and scalable backend services."
    ],
    technologies: ["React Native", "MongoDB", "Node.js", "Python", "AWS S3", "Git", "Figma"]
  },
  {
    id: 4,
    company: "Pioneer Research Institute",
    role: "Research Intern (with Prof. Suleyman Uludag)",
    period: "Mar - Aug 2023",
    location: "San Francisco, CA",
    description: [
      "Conducted research study at the University of Michigan and authored a peer-reviewed paper (Imperfect EleGANce) on racial and gender bias in CycleGAN, a generative machine learning model, using PyTorch, NumPy, and Google Colab.",
      "Named Regeneron STS Semifinalist ($4,000 award) and awarded the Pioneer Catalyst Award for research impact."
    ],
    technologies: ["PyTorch", "NumPy", "Google Colab", "Machine Learning", "Research"]
  }
];

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience>(experiences[0]);

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
    <div className="min-h-screen pt-20 overflow-x-hidden transition-colors duration-300">
      <div className="relative z-10">
      
      {/* Left Side - Social Icons (Sticky) */}
      <div className="fixed left-8 bottom-8 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <motion.a
            href="https://github.com/fionapeng16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-[#583722] dark:hover:text-[#D4A574] transition-colors duration-300 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-soft hover:shadow-soft-lg"
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
            className="text-text-muted hover:text-[#583722] dark:hover:text-[#D4A574] transition-colors duration-300 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-soft hover:shadow-soft-lg"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="relative mb-20">


            <div className="text-center relative z-10">
              <motion.h1 
                className="text-6xl md:text-8xl font-light text-text-primary mb-8 leading-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="text-gradient font-medium">hi, i'm fiona</span>
                <br />
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-10 font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                I'm a <span className="text-[#583722] dark:text-[#D4A574] font-medium">Full-Stack Developer</span> dreaming of a more compassionate world built on <span className="text-[#583722] dark:text-[#D4A574] font-medium">empathy</span> — leveraging <span className="text-[#7FB3C7] font-medium">human-centered</span> technology solutions to reach it.ᵕ̈
              </motion.p>
              

            </div>
          </motion.div>



          {/* Projects Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-32"
          >
            <div className="text-left mb-16 pl-8">
              <motion.h2 
                className="text-3xl md:text-4xl font-light text-text-primary mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gradient font-medium">01.</span> Some Things I've Built
              </motion.h2>
              <motion.div 
                className="w-24 h-0.5 bg-[#BDD7DE]"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>



            {/* Featured Projects - Full-width layout */}
            <motion.div 
              variants={itemVariants}
              className="space-y-20"
            >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Left Side - Project Image */}
                    <div className="relative h-80 lg:h-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      

                    </div>

                    {/* Right Side - Project Info */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="inline-block text-sm font-mono text-[#583722] bg-[#BDD7DE] dark:bg-[#BDD7DE]/80 px-4 py-2 rounded-full border border-[#BDD7DE] dark:border-[#BDD7DE]/60 mb-4">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-semibold text-text-primary dark:text-black mb-6 leading-tight group-hover:text-[#583722] dark:group-hover:text-[#D4A574] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-lg text-text-secondary dark:text-[#D4A574] leading-relaxed mb-8">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-sm font-medium text-text-muted dark:text-black mb-3 uppercase tracking-wide">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="text-sm text-text-muted dark:text-[#D4A574] bg-warm-gray/50 dark:bg-gray-700 px-3 py-1.5 rounded-full border border-soft-brown/50 dark:border-[#BDD7DE]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-text-muted hover:text-text-primary transition-colors duration-200 p-2 hover:bg-warm-gray/30 rounded-lg"
                          >
                            <FiGithub className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-text-muted hover:text-[#583722] dark:hover:text-[#D4A574] transition-colors duration-200 p-2 hover:bg-warm-gray/30 rounded-lg"
                          >
                            <FiExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-32"
          >
            <div className="text-left mb-16 pl-8">
              <motion.h2 
                className="text-3xl md:text-4xl font-light text-text-primary mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gradient font-medium">02.</span> Where I've Worked
              </motion.h2>
              <motion.div 
                className="w-24 h-0.5 bg-[#BDD7DE]"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Panel - Experience Navigation */}
              <div className="lg:col-span-1">
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#BDD7DE]"></div>
                  
                  <div className="space-y-2">
                    {experiences.map((exp, index) => (
                      <motion.button
                        key={exp.id}
                        onClick={() => setSelectedExperience(exp)}
                        className={`relative w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          selectedExperience.id === exp.id
                            ? 'bg-[#BDD7DE]/50 border border-[#BDD7DE]'
                            : 'hover:bg-white/30 border border-transparent'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {/* Active indicator */}
                        {selectedExperience.id === exp.id && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#583722] rounded-full"></div>
                        )}
                        
                        <div className="ml-6">
                          <div className="font-medium text-text-primary">{exp.company}</div>
                          <div className="text-sm text-text-secondary">{exp.period}</div>
                          <div className="text-xs text-text-muted">{exp.location}</div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel - Experience Details */}
              <div className="lg:col-span-2">
                <motion.div
                  key={selectedExperience.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-soft"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
                      {selectedExperience.role} @ {selectedExperience.company}
                      <span className="text-[#583722] dark:text-[#D4A574] ml-2">{selectedExperience.period}</span>
                    </h3>
                    <p className="text-text-muted">{selectedExperience.location}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {selectedExperience.description.map((desc, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-[#583722] dark:text-[#D4A574] mt-2">▷</div>
                        <p className="text-text-secondary leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-text-muted mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="text-sm text-text-muted bg-warm-gray/50 px-3 py-1.5 rounded-full border border-soft-brown/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Empty State - More personal */}
                      {projects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🤔</div>
              <p className="text-text-secondary text-lg italic">Hmm, nothing in this category yet. Maybe I should build something?</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Project Modals */}
      {selectedProject && (
        <>
          {selectedProject.id === 1 && (
            <IDONTMINDModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
          {selectedProject.id === 2 && (
            <EndOverdoseModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
          {selectedProject.id === 3 && (
            <PasswordProtectedModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
          {selectedProject.id === 4 && (
            <FEMModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </>
      )}

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

export default Home;
