import React, { type ReactNode } from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
  style?: React.CSSProperties;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  style = {}
}) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()} style={style}>
    {children}
  </div>
);

export interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: number | string;
  scaleEndPosition?: number | string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 60,
  itemStackDistance = 16,
  stackPosition = 100,
}) => {
  const baseTop = typeof stackPosition === 'number'
    ? stackPosition
    : parseInt(String(stackPosition), 10) || 100;

  const validChildren = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()}>
      <div className="scroll-stack-inner">
        {validChildren.map((child, index) => {
          const topOffset = baseTop + index * itemStackDistance;
          const isLast = index === validChildren.length - 1;

          const element = child as React.ReactElement<any>;
          return React.cloneElement(element, {
            key: element.key || index,
            style: {
              position: 'sticky',
              top: `${topOffset}px`,
              marginBottom: isLast ? '0px' : `${itemDistance}px`,
              zIndex: index + 10,
              ...(element.props?.style || {}),
            },
          });
        })}
      </div>
    </div>
  );
};

export default ScrollStack;
