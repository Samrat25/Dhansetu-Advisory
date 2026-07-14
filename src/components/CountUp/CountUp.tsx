import React, { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function CountUp({
  end,
  duration = 1.8,
  suffix = '',
  prefix = ''
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const endVal = end;
    const durationMs = duration * 1000;
    const startTime = performance.now();

    let rafId: number;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      const easedProgress = progress * (2 - progress);
      const currentVal = Math.floor(easedProgress * endVal);
      
      setCount(currentVal);

      if (progress < 1) {
        rafId = requestAnimationFrame(updateCount);
      }
    };

    rafId = requestAnimationFrame(updateCount);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

