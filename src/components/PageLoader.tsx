import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Only show loading on actual page refresh, not on navigation
    // Use a combination of methods to detect real page refresh
    const isPageRefresh = !document.referrer || 
                         document.referrer.split('/')[2] !== window.location.hostname ||
                         performance.navigation.type === 1;
    
    if (isPageRefresh) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
        }}
        transition={{ 
          duration: 1.5, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
        className="relative"
      >
        <motion.div
          animate={{ 
            scale: [0.8, 1.1, 1],
            opacity: [0.7, 1, 1]
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            repeat: 1,
            repeatType: "reverse"
          }}
        >
                            <img
                    src="/fp-logo.svg"
                    alt="FP Logo"
                    className="w-32 h-32 md:w-40 md:h-40 dark:filter dark:brightness-0 dark:invert"
                  />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading...
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageLoader; 