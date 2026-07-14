import React, { useRef, useState } from 'react';
import './TiltedCard.css';

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function TiltedCard({
  children,
  className = '',
  spotlightColor = 'rgba(232, 163, 61, 0.25)'
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    setRotateX(-normalizedY * 12);
    setRotateY(normalizedX * 12);
    
    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const cardStyle = {
    transform: isHovered
      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
    '--mouse-x': `${glareX}%`,
    '--mouse-y': `${glareY}%`,
    '--spotlight-color': spotlightColor,
  } as React.CSSProperties;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`tilted-card ${className}`}
      style={cardStyle}
    >
      <div className="tilted-card-glare" />
      <div className="tilted-card-content">
        {children}
      </div>
    </div>
  );
}
