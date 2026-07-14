import React from 'react';
import { motion } from 'motion/react';

interface BlurTextProps {
  text: string;
  animateBy?: 'words' | 'letters';
  className?: string;
  delay?: number;
}

export default function BlurText({
  text,
  animateBy = 'words',
  className = '',
  delay = 0
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: animateBy === 'words' ? 0.12 : 0.03,
        delayChildren: delay,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      filter: 'blur(8px)', 
      y: 12 
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 14,
        stiffness: 120
      }
    }
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={itemVariants}
          style={{ marginRight: animateBy === 'words' ? '0.25em' : '0' }}
        >
          {el === ' ' ? '\u00A0' : el}
        </motion.span>
      ))}
    </motion.span>
  );
}
