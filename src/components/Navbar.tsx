import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems: Array<{ path: string | null; label: string; action?: () => void }> = [
    { path: '/', label: 'Work' },
    { path: '/about', label: 'About' },
    { 
      path: null, 
      label: 'Contact', 
      action: () => {
        console.log('Opening email...');
        window.location.href = 'mailto:fiona.peng@ucla.edu';
      }
    },
    { 
      path: null, 
      label: 'Resume', 
      action: () => {
        console.log('Opening resume...');
        window.open('/resume.pdf', '_blank');
      }
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-border/50 dark:border-gray-700/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-xl font-mono font-medium text-text-primary hover:text-[#583722] transition-colors duration-300 logo-link">
              fiona 叶菲 peng
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none ${
                        location.pathname === item.path
                          ? 'text-[#583722] bg-[#BDD7DE] border border-[#BDD7DE] shadow-sm'
                          : 'text-text-secondary hover:text-text-primary hover:bg-warm-gray/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        console.log('Button clicked:', item.label);
                        if (item.action) {
                          item.action();
                        }
                      }}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none text-text-secondary hover:text-text-primary hover:bg-warm-gray/50"
                    >
                      {item.label}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="text-text-secondary hover:text-text-primary focus:outline-none p-2 rounded-lg hover:bg-warm-gray/50 transition-all duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-current block transition-all duration-300"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-5 h-0.5 bg-current block transition-all duration-300"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-current block transition-all duration-300"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-border/50 dark:border-gray-700/50 overflow-hidden transition-colors duration-300"
      >
        <div className="px-4 py-6 space-y-3">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.path ? (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 focus:outline-none ${
                    location.pathname === item.path
                      ? 'text-[#583722] bg-[#BDD7DE] border border-[#BDD7DE] shadow-sm'
                      : 'text-text-secondary hover:text-text-primary hover:bg-warm-gray/50'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                                  <button
                    onClick={() => {
                      item.action?.();
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 focus:outline-none text-text-secondary hover:text-text-primary hover:bg-warm-gray/50"
                  >
                  {item.label}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
