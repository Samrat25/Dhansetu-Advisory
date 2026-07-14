import React from 'react';
import { motion } from 'motion/react';

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedList({
  children,
  className = '',
  delay = 0
}: AnimatedListProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 24 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 16,
        stiffness: 110
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {React.Children.map(children, (child, idx) => {
        if (!child) return null;
        return (
          <motion.div key={idx} variants={itemVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
