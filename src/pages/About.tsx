import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Miffy3D from '../components/Miffy3D';

// Custom typing effect hook
const useTypewriter = (words: string[], speed: number = 100, delay: number = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentWordIndex, isDeleting, words, speed, delay]);

  return currentText;
};

// Custom hook for typing out a single word once
const useSingleTypewriter = (word: string, speed: number = 100) => {
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;
    
    if (currentText.length < word.length) {
      const timeout = setTimeout(() => {
        setCurrentText(word.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentText, word, speed, isComplete]);

  return currentText;
};

const About = () => {
  const rotatingWords = [
    'a (proud) INFJ',
    'an unapologetic git commit spammer',
    'a matcha connoisseur',
    'a cat mom',
    'a concert fanatic', 
  ];
  
  const nameText = useSingleTypewriter('fiona', 100);
  const typedText = useTypewriter(rotatingWords, 100, 2000);

  // Custom hook for the specific typing sequence
  const useNameSequenceTypewriter = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentPhase, setCurrentPhase] = useState(0);
    const [isBackspacing, setIsBackspacing] = useState(false);
    
    const baseText = 'my name is fiona, ';
    const descriptions = [
      'a (proud) INFJ',
      'an unapologetic git commit spammer',
      'a matcha connoisseur',
      'a cat mom',
      'a concert fanatic'
    ];
    
    useEffect(() => {
      const currentDescription = descriptions[currentPhase];
      const fullText = baseText + currentDescription;
      
      if (isBackspacing) {
        // Backspace only the description part
        if (currentText.length > baseText.length) {
          const timeout = setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, 50); // Faster backspacing
          return () => clearTimeout(timeout);
        } else {
          // Finished backspacing description, move to next phase
          setIsBackspacing(false);
          setCurrentPhase((prev) => (prev + 1) % descriptions.length);
        }
      } else {
        // Typing animation - start from baseText
        if (currentText.length < fullText.length) {
          const timeout = setTimeout(() => {
            setCurrentText(fullText.slice(0, currentText.length + 1));
          }, 100);
          return () => clearTimeout(timeout);
        } else {
          // Finished typing, wait then start backspacing
          const timeout = setTimeout(() => {
            setIsBackspacing(true);
          }, 2000);
          return () => clearTimeout(timeout);
        }
      }
    }, [currentText, currentPhase, isBackspacing]);

    return currentText;
  };

  const sequenceText = useNameSequenceTypewriter();

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
            className="text-text-muted hover:text-[#583722] dark:hover:text-[#D4A574] transition-colors duration-300 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-soft hover:shadow-soft-lg"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Text Content - Takes up 2/3 of the page */}
              <div className="text-left relative z-10 lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-light text-text-primary mb-4">
                  Nice to meet you! :)
                </h1>
                
                <div className="text-2xl md:text-3xl text-text-secondary mb-8">
                  <span className="text-gradient font-medium">
                    {sequenceText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
                
                <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                  <p>
                    I'm a <span className="text-[#583722] dark:text-[#D4A574] font-medium">Full-Stack Developer</span> based in the Bay Area, passionate about using technology to create intuitive digital experiences that foster <span className="text-[#583722] dark:text-[#D4A574] font-medium">human connection</span>. My favorite projects are the ones that challenge me to think like both an engineer and creator, blending problem-solving with <span className="text-[#583722] dark:text-[#D4A574] font-medium">storytelling, empathy, and curiosity</span>.
                  </p>
                  
                  <p>
                    I'm currently at <span className="text-[#583722] dark:text-[#D4A574] font-medium">UCLA</span> studying <span className="text-[#7FB3C7] font-medium">Computer Science</span> with a minor in <span className="text-[#7FB3C7] font-medium">Film, TV, and Digital Media</span>, while actively building projects that push me to grow as a developer. My journey in tech started with curiosity and has grown into a passion for creating solutions that not only work, but actually <span className="text-[#583722] dark:text-[#D4A574] font-medium">enrich people's lives</span>. I care about writing clean, maintainable code and designing user experiences that are both <span className="text-[#583722] dark:text-[#D4A574] font-medium">functional</span> and <span className="text-[#583722] dark:text-[#D4A574] font-medium">impactful</span>.
                  </p>
                  
                  <p>
                    When I'm not coding, you'll find me editing my latest travel vlog, sipping matcha at a new café while watching <span className="text-[#583722] dark:text-[#D4A574] font-medium italic">Great British Bake Off</span>, and most likely falling into a late-night research rabbit hole. I'm a multi-hyphenate with a love for many things: technology, film, design, storytelling, and all the blurred lines in between.
                  </p>
                  
                  <p className="text-center text-lg font-medium text-[#583722] dark:text-[#D4A574]">
                    scroll to get to know me more! :D
                  </p>
                </div>
              </div>
              
              {/* 3D Model - Takes up 1/3 of the page */}
              <div className="relative h-96 lg:h-[500px] w-full lg:col-span-1">
                <Canvas
                  camera={{ position: [0, 0, 6], fov: 45 }}
                  className="w-full h-full rounded-2xl"
                  onError={(error) => {
                    console.error('3D Canvas error:', error);
                  }}
                >
                  <Miffy3D 
                    scale={3.5} 
                    position={[0, 3, 0]} 
                    rotation={[0, 0, 0]}
                  />
                </Canvas>
              </div>
            </div>
          </motion.div>

          {/* Communities Section - Full Width */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-medium text-text-primary mb-3">Communities I Get to Grow With</h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-none w-full">
              The communities I've been part of have shaped me in ways I never could have imagined. I carry pieces of each with me (lessons, memories, and friendships) and I'm deeply grateful for the mentors, peers, and support systems that continue to ground and inspire me.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* LA Blueprint */}
              <div className="group relative cursor-pointer">
                <div className="relative">
                  {/* Scrapbook tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#BDD7DE] rounded-sm opacity-80 rotate-2 z-10"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#7FB3C7] rounded-sm opacity-60 rotate-2 z-10"></div>
                  
                  <div className="aspect-[5/4] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg group/image">
                    <img 
                      src="/bp.JPEG" 
                      alt="LA Blueprint"
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300"
                    />
                    {/* Hover Link only over image */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center p-6">
                      <a href="https://lablueprint.org/" target="_blank" rel="noopener noreferrer" className="text-white underline text-sm">Visit Website</a>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h4 className="font-medium text-text-primary">LA Blueprint</h4>
                  <p className="text-sm text-text-muted">501(c)3 Nonprofit</p>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  LA Blueprint has been the most impactful community of my college experience; I realized that before UCLA, I didn’t fully understand what it meant to grow alongside a team. Through this work, I’ve met the kindest and most ambitious people, while creating digital tools that make a tangible difference in the nonprofits we partner with. Next year, I’m taking on the role of a Developer Project Lead, where I’ll be guiding my own team of designers and developers.
                </p>
              </div>
            </div>

              {/* SWE */}
              <div className="group relative cursor-pointer">
                <div className="relative">
                  {/* Scrapbook tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#BDD7DE] rounded-sm opacity-80 -rotate-2 z-10"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#7FB3C7] rounded-sm opacity-60 -rotate-2 z-10"></div>
                  
                  <div className="aspect-[5/4] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg group/image">
                    <img 
                      src="/ewi.JPEG" 
                      alt="Society of Women Engineers"
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300"
                    />
                    {/* Hover Link only over image */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center p-6">
                      <a href="https://ucla.swe.org/" target="_blank" rel="noopener noreferrer" className="text-white underline text-sm">Visit Website</a>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h4 className="font-medium text-text-primary">Society of Women Engineers</h4>
                  <p className="text-sm text-text-muted">SWE</p>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  SWE has been one of the most supportive spaces in my journey as a woman in tech. This past year, I helped host Evening with Industry, our flagship networking dinner, after many late nights of planning (and packing-party marathons). Seeing over 200 students connect with 25+ companies made all the effort worth it. Beyond events, SWE has given me a community of women engineers who uplift one another, share advice, and remind me that I’m not navigating this path alone.
                  </p>
                </div>
              </div>

              {/* FAST */}
              <div className="group relative cursor-pointer">
                <div className="relative">
                  {/* Scrapbook tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#BDD7DE] rounded-sm opacity-80 rotate-1 z-10"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#7FB3C7] rounded-sm opacity-60 rotate-1 z-10"></div>
                  
                  <div className="aspect-[5/4] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg group/image">
                    <img 
                      src="/fast.JPG" 
                      alt="FAST"
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300"
                    />
                    {/* Hover Link only over image */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center p-6">
                      <a href="https://www.fastatucla.com/" target="_blank" rel="noopener noreferrer" className="text-white underline text-sm">Visit Website</a>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h4 className="font-medium text-text-primary">FAST</h4>
                  <p className="text-sm text-text-muted">Fashion & Student Trends at UCLA</p>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  At FAST, I get to explore the intersections of fashion, creativity, and student culture. As part of the Production Committee, I helped plan our annual UCLA runway show and multiple photoshoots throughout the year. I’m constantly inspired by how FAST members express themselves with such creativity. Being part of that environment pushes me to experiment more boldly with my own ideas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Projects Section - Full Width */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-medium text-text-primary mb-3">Side Projects & Ventures</h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-none w-full">
              Over the years, I've poured my curiosity into side projects that start as hobbies and grow into ways of sharing something meaningful with the world. Whether it's a creative venture, a small business, or just an experiment for fun, these projects remind me that exploration and making go hand in hand.
            </p>
            
            <div className="space-y-12">
              {/* Auralite Jewelry - Row 1 (image left, text right) */}
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Image */}
                <div className="relative md:w-5/12">
                  {/* Scrapbook tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#D4A574] rounded-sm opacity-80 rotate-3 z-10"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#583722] rounded-sm opacity-60 rotate-3 z-10"></div>
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg group/image relative">
                    <img 
                      src="/auralite.png" 
                      alt="Auralite Jewelry"
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300"
                    />
                    {/* Hover Link only over image */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center p-6">
                      <a 
                        href="https://instagram.com/shopauralite" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 underline"
                      >
                        View Instagram
                      </a>
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="md:w-7/12">
                  <h4 className="font-medium text-text-primary">Auralite Jewelry</h4>
                  <p className="text-sm text-text-muted">@shopauralite • $14K+ raised</p>
                  <p className="mt-2 text-base md:text-lg text-text-secondary leading-relaxed">
                    My sister and I started Auralite after losing a friend to suicide. We wanted to honor them by combining one of our shared passions, jewelry making, with raising awareness for mental health. What began as a small idea turned into something much bigger: together we’ve raised over $14K for nonprofits like NAMI and the Alan Hu Foundation, and created spaces for healing through positive psychology seminars with PhD professors, therapy dog workshops, and mental-health-themed jewelry sessions. It’s one of the most meaningful projects I’ve ever been part of, and a reminder of the power of community and creativity.
                  </p>
                </div>
              </div>

              {/* Food Instagram - Row 2 (text left, image right) */}
              <div className="flex flex-col md:flex-row-reverse items-start gap-8">
                {/* Image */}
                <div className="relative md:w-5/12">
                  {/* Scrapbook tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#D4A574] rounded-sm opacity-80 -rotate-1 z-10"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#583722] rounded-sm opacity-60 -rotate-1 z-10"></div>
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg group/image relative">
                    <img 
                      src="/food.png" 
                      alt="Food Instagram"
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300"
                    />
                    {/* Hover Link only over image */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center p-6">
                      <a 
                        href="https://instagram.com/fionashoradecomer" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 underline"
                      >
                        View Instagram
                      </a>
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="md:w-7/12">
                  <h4 className="font-medium text-text-primary">Food Instagram</h4>
                  <p className="text-sm text-text-muted">@fionashoradecomer</p>
                  <p className="mt-2 text-base md:text-lg text-text-secondary leading-relaxed">
                    This little food account started as a way to keep track of all the amazing things I was eating in LA, but it’s grown into a scrapbook of my culinary adventures, as well as all the places I’ve traveled to. I love being adventurous with food: trying new cuisines, exploring hole-in-the-wall spots, and sharing recommendations with friends. Sometimes I scroll through my own feed when I’m hungry, which only makes me hungrier (but also makes me grateful for all the flavors I’ve gotten to try).
                  </p>
                </div>
              </div>

              {/* Video Editing - Row 3 (image left, text right) */}
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Image */}
                <div className="relative md:w-5/12">
                  {/* Scrapbook tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#D4A574] rounded-sm opacity-80 rotate-2 z-10"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-[#583722] rounded-sm opacity-60 rotate-2 z-10"></div>
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg group/image relative">
                    <img 
                      src="/youtube.png" 
                      alt="Video Editing"
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300"
                    />
                    {/* Hover Link only over image */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center p-6">
                      <a 
                        href="https://youtube.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 underline"
                      >
                        View YouTube Channel
                      </a>
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="md:w-7/12">
                  <h4 className="font-medium text-text-primary">Video Editing</h4>
                  <p className="text-sm text-text-muted">Lifestyle & Travel Vlogs</p>
                  <p className="mt-2 text-base md:text-lg text-text-secondary leading-relaxed">
                    Editing has become my favorite way of storytelling, and it’s something I’ve loved doing since I was a kid. I create long-form lifestyle and travel vlogs where I weave together clips, music, and my own personality into something that feels authentic. Vlogging lets me capture the small, chaotic moments I want to remember forever, and watching them back feels like reliving those memories. More than anything, it’s a way to share a little piece of my world with others. Ever since 3rd grade, I’ve wanted to make YouTube videos, and now, I’m living out that childhood dream.
                  </p>
                </div>
              </div>
                </div>
              </motion.div>

          {/* Scrapbook Collection Section - Full Width */}
          {false && (
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-medium text-text-primary mb-6">I love collecting things.</h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              There is something undeniably exhilarating about investing in yet another material object. Whether it's the hunt itself, or the satisfaction of organizing a perfectly nostalgic little archive, collecting brings me comfort in a world that can feel overwhelming.
            </p>
            
            {/* Journal/Scrapbook Layout */}
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-12 border-2 border-gray-200 dark:border-gray-700 shadow-lg min-h-[600px]">
              {/* Clean grid paper background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl opacity-40 dark:opacity-20"></div>
              
              {/* Left margin line for journal feel */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-400 dark:bg-red-500 opacity-60"></div>
              
              {/* Horizontal lines for writing */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0px,transparent_19px,#f3f4f6_19px,#f3f4f6_20px)] bg-[size:20px_20px] rounded-3xl opacity-60 dark:opacity-40"></div>
              
              {/* Collection Items Container - Now properly contained within paper */}
              <div className="relative z-10 mt-8 w-full h-full">
                {/* Top Row */}
                <div className="flex justify-center items-start mb-16 gap-56">
                  <div className="group cursor-pointer transform rotate-3 hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-transparent">
                      <img 
                        src="https://via.placeholder.com/80x80/transparent/transparent?text=smiskis" 
                        alt="smiskis"
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap">
                      smiskis
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer transform -rotate-2 hover:scale-110 transition-transform duration-300">
                    <div className="w-24 h-24 bg-transparent">
                      <img 
                        src="https://via.placeholder.com/96x96/transparent/transparent?text=hironos" 
                        alt="hironos"
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap">
                      hironos
                    </div>
                  </div>
                </div>

                {/* Middle Row */}
                <div className="flex justify-center items-center mb-16 gap-48">
                  <div className="group cursor-pointer transform rotate-1 hover:scale-110 transition-transform duration-300">
                    <div className="w-28 h-28 bg-transparent">
                      <img 
                        src="https://via.placeholder.com/112x112/transparent/transparent?text=turtles" 
                        alt="turtle figurines"
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap">
                      turtle figurines
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                    <div className="w-32 h-32 bg-transparent">
                      <img 
                        src="https://via.placeholder.com/128x128/transparent/transparent?text=digicams" 
                        alt="digicams"
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap">
                      digicams
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer transform -rotate-1 hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-transparent">
                      <img 
                        src="https://via.placeholder.com/80x80/transparent/transparent?text=photobooth" 
                        alt="photobooth strips"
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap">
                      photobooth strips
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-center items-end gap-56">
                  <div className="group cursor-pointer transform rotate-2 hover:scale-110 transition-transform duration-300">
                    <div className="w-24 h-24 bg-transparent">
                      <img 
                        src="https://via.placeholder.com/96x96/transparent/transparent?text=perfumes" 
                        alt="perfumes"
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap">
                      perfumes
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer transform -rotate-1 hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-transparent">
                      <img 
                        src="https://via.placeholder.com/80x80/transparent/transparent?text=monchhichi" 
                        alt="monchhichi"
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap">
                      monchhichi
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer transform rotate-1 hover:scale-110 transition-transform duration-300">
                    <div className="w-28 h-28 bg-transparent">
                      <img 
                        src="https://via.placeholder.com/112x112/transparent/transparent?text=miffy" 
                        alt="miffy"
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap">
                      miffy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          )}

          {/* Fun Facts Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-medium text-text-primary mb-6">some more fun facts about me!</h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-text-secondary leading-relaxed">
                • i studied abroad at the <span className="text-[#7FB3C7] font-medium">University of Cambridge, UK</span> last year where i dove into <span className="text-[#583722] dark:text-[#D4A574] font-medium">Jane Austen's life</span>, wrestled with <span className="text-[#583722] dark:text-[#D4A574] font-medium">Moral Philosophy</span>, and debated <span className="text-[#583722] dark:text-[#D4A574] font-medium">World Politics</span> with students from across the globe.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                • my favorite movie is <span className="text-[#583722] dark:text-[#D4A574] font-medium italic">Ponyo</span> (<span className="text-[#7FB3C7] font-medium">Studio Ghibli</span> classic)
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                • i love staying active: <span className="text-[#583722] dark:text-[#D4A574] font-medium">hiking</span>, <span className="text-[#583722] dark:text-[#D4A574] font-medium">beach volleyball</span>, and <span className="text-[#583722] dark:text-[#D4A574] font-medium">running</span> are my reset buttons. and i recently just started <span className="text-[#7FB3C7] font-medium">climbing</span> - my newest hobby!
              </p>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg text-text-secondary leading-relaxed">
                thanks for stopping by! <span className="text-pink-400">♥</span> scroll around, stay awhile.
              </p>
            </div>

            {/* Contact Links */}
            <div className="text-center">
              <p className="text-lg text-text-secondary mb-4">let's connect →</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#583722] dark:text-[#D4A574] font-medium italic"
                >
                  linkedin
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#583722] dark:text-[#D4A574] font-medium italic"
                >
                  github
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-[#583722] dark:text-[#D4A574] font-medium italic"
                >
                  email
                </a>
              </div>
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
