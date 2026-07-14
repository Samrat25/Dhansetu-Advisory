import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

export default function Magnet({
  children,
  range = 80,
  strength = 30
}: MagnetProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;
      const rect = magnetRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < range) {
        const pullX = (deltaX / distance) * (range - distance) * (strength / 100);
        const pullY = (deltaY / distance) * (range - distance) * (strength / 100);
        setPosition({ x: pullX, y: pullY });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [range, strength]);

  const style: React.CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 && position.y === 0
      ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
      : 'transform 0.1s ease-out',
    display: 'inline-block',
    willChange: 'transform'
  };

  return (
    <div ref={magnetRef} style={style}>
      {children}
    </div>
  );
}
