import React from 'react';
import { Sparkles, Circle, Wand2, CircleDot } from 'lucide-react';

interface FloatingIcon {
  Icon: React.ElementType;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  size: number;
  animation: string;
  delay: string;
  duration: string;
}

const FloatingIcons: React.FC = () => {
  const icons: FloatingIcon[] = [
    {
      Icon: Circle,
      position: { top: '10%', left: '5%' },
      size: 48,
      animation: 'animate-float',
      delay: '0s',
      duration: '6s',
    },
    {
      Icon: Sparkles,
      position: { top: '20%', right: '8%' },
      size: 36,
      animation: 'animate-float-reverse',
      delay: '1s',
      duration: '7s',
    },
    {
      Icon: Wand2,
      position: { bottom: '25%', left: '8%' },
      size: 40,
      animation: 'animate-float-slow',
      delay: '2s',
      duration: '8s',
    },
    {
      Icon: CircleDot,
      position: { bottom: '15%', right: '5%' },
      size: 44,
      animation: 'animate-float',
      delay: '0.5s',
      duration: '6.5s',
    },
    {
      Icon: Sparkles,
      position: { top: '50%', left: '3%' },
      size: 28,
      animation: 'animate-float-reverse',
      delay: '1.5s',
      duration: '7.5s',
    },
    {
      Icon: Circle,
      position: { top: '60%', right: '10%' },
      size: 32,
      animation: 'animate-float-slow',
      delay: '2.5s',
      duration: '8.5s',
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`absolute ${icon.animation}`}
          style={{
            ...icon.position,
            animationDelay: icon.delay,
            animationDuration: icon.duration,
          }}
        >
          <icon.Icon
            size={icon.size}
            className="text-dental-blue"
            style={{ opacity: 0.08 }}
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
