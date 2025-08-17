import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import ProjectModal from '../components/ProjectModal';

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
  description: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "idontmind",
    description: "Mental health tracking app with personalized insights and coping strategies",
    longDescription: "A comprehensive mental health application that helps users track their emotional well-being through daily check-ins, mood tracking, and personalized insights. Features include coping strategy recommendations, progress visualization, and a supportive community platform.",
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Chart.js", "Firebase"],
    image: "/idontmind.jpeg",
    githubUrl: "https://github.com/yourusername/idontmind",
    liveUrl: "https://idontmind-app.com",
    category: "Mobile App",
    featured: true
  },
  {
    id: 2,
    title: "End Overdose",
    description: "Educational platform for overdose prevention and harm reduction training",
    longDescription: "An interactive educational platform designed to teach users how to recognize signs of overdose and provide life-saving interventions. Features gamified learning modules, progress tracking, certification programs, and community resources for harm reduction.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "WebGL", "Three.js"],
    image: "/end-overdose.jpeg",
    githubUrl: "https://github.com/yourusername/end-overdose",
    liveUrl: "https://endoverdose.net",
    category: "Web Platform",
    featured: true
  },
  {
    id: 3,
    title: "Amazon",
    description: "E-commerce platform with advanced search and recommendation systems",
    longDescription: "A full-stack e-commerce application featuring product search, user authentication, shopping cart functionality, and personalized product recommendations. Built with modern web technologies and integrated payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "AWS"],
    image: "/amazon.jpeg",
    githubUrl: "https://github.com/yourusername/amazon-clone",
    liveUrl: "https://amazon-clone-demo.com",
    category: "E-commerce",
    featured: true
  },
  {
    id: 4,
    title: "FEM",
    description: "Frontend Mentor challenges with modern web development solutions",
    longDescription: "A collection of frontend development challenges completed from Frontend Mentor, showcasing responsive design, accessibility, and modern CSS techniques. Each project demonstrates clean code practices and pixel-perfect implementations.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Framer Motion"],
    image: "/fem.jpeg",
    githubUrl: "https://github.com/yourusername/frontend-mentor",
    liveUrl: "https://fem-challenges.com",
    category: "Frontend",
    featured: true
  }
];

const experiences: Experience[] = [
  {
    id: 1,
    company: "Snapchat",
    role: "Software Engineer Intern",
    period: "May 2024 - Aug 2024",
    description: [
      "Implemented the full software development life cycle for an internal tooling application on the platform engineering/infrastructure team, providing real-time data visibility to 150+ data scientists for AB testing. Engaged in the full scope from project planning to requirement analysis, design, coding, and deployment.",
      "Developed a data platform service on the Snap Cloud Console, streamlining the process for editing metrics with automated GitHub pull requests. Programmed Python API calls to run SQL queries on a SpannerDB nonrelational database, performing CRUD operations. Connected the endpoints to a frontend graph data lineage with 300+ metrics."
    ],
    technologies: ["Python", "React", "SpannerDB", "TypeScript", "GitHub API"]
  },
  {
    id: 2,
    company: "Snapchat",
    role: "Software Engineer Intern",
    period: "May 2023 - Aug 2023",
    description: [
      "Collaborated in a cross-functional team of 6 to develop FoodSmart, a functional feature prototype for Snapchat that dynamically populates the maps page with geolocation-based markers to empower users in the discovery of nearby food resource programs.",
      "Our work culminated in a Product Pitch to Snap's Executives, demonstrating the potential impact of location-based food resource discovery for Snapchat users."
    ],
    technologies: ["React Native", "JavaScript", "OpenAI API", "Firebase", "CSS", "react-native-maps"]
  },
  {
    id: 3,
    company: "Valuenex",
    role: "Software Engineer Intern",
    period: "Jun 2022 - Aug 2022",
    description: [
      "Developed and maintained web applications using modern frontend frameworks and backend technologies.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions."
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 4,
    company: "Global Green",
    role: "Software Developer",
    period: "Jan 2022 - May 2022",
    description: [
      "Built sustainable technology solutions for environmental impact tracking.",
      "Implemented data visualization tools for environmental metrics and reporting."
    ],
    technologies: ["Python", "Django", "PostgreSQL", "D3.js"]
  },
  {
    id: 5,
    company: "TransCanWork",
    role: "Frontend Developer",
    period: "Sep 2021 - Dec 2021",
    description: [
      "Developed responsive web applications for transportation and logistics management.",
      "Created intuitive user interfaces for complex workflow management systems."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"]
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
            href="https://github.com/yourusername"
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
            href="https://linkedin.com/in/yourusername"
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
                I'm a <span className="text-[#583722] font-medium">Full-Stack Developer</span> dreaming of a more compassionate world built on <span className="text-[#583722] font-medium">empathy</span> — leveraging <span className="text-[#7FB3C7] font-medium">human-centered</span> technology solutions to reach it.ᵕ̈
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
                <span className="text-gradient font-medium">01.</span> Some things I've built
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
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:shadow-gray-200/50">
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
                        <span className="inline-block text-sm font-mono text-[#583722] bg-[#BDD7DE] px-4 py-2 rounded-full border border-[#BDD7DE] mb-4">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-6 leading-tight group-hover:text-[#583722] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-lg text-text-secondary leading-relaxed mb-8">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-sm font-medium text-text-muted mb-3 uppercase tracking-wide">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="text-sm text-text-muted bg-warm-gray/50 px-3 py-1.5 rounded-full border border-soft-brown/50"
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
                            className="text-text-muted hover:text-[#583722] transition-colors duration-200 p-2 hover:bg-warm-gray/30 rounded-lg"
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
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-soft"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
                      {selectedExperience.role} @ {selectedExperience.company}
                      <span className="text-[#583722] ml-2">{selectedExperience.period}</span>
                    </h3>
                  </div>

                  <div className="space-y-4 mb-8">
                    {selectedExperience.description.map((desc, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-[#583722] mt-2">▷</div>
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

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
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
