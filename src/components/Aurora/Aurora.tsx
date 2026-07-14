import React from 'react';
import './Aurora.css';

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  speed?: number;
}

export default function Aurora({
  colorStops = ["#1a3fa0", "#0f1f4d", "#e8a33d"],
  amplitude = 1.0,
  speed = 1.0
}: AuroraProps) {
  const style = {
    '--color-1': colorStops[0],
    '--color-2': colorStops[1],
    '--color-3': colorStops[2],
    '--aurora-speed': `${60 / speed}s`,
  } as React.CSSProperties;

  return (
    <div className="aurora-container" style={style}>
      <div className="aurora-glow aurora-glow-1"></div>
      <div className="aurora-glow aurora-glow-2"></div>
      <div className="aurora-glow aurora-glow-3"></div>
      <div className="aurora-overlay"></div>
    </div>
  );
}
