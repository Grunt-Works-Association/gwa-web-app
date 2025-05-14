import React from 'react';
import { Shield, Dumbbell as Barbell, Target } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <Shield className="text-[#D6C7A9]" size={40} strokeWidth={1.5} />
        <Barbell className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={20} strokeWidth={2} />
        <Target className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 text-[#2C5530]" size={16} strokeWidth={2} />
      </div>
      <div className="ml-2 font-bold text-lg leading-none">
        <div className="text-white">GRUNT WORKS</div>
        <div className="text-[#D6C7A9] text-sm">ASSOCIATION</div>
      </div>
    </div>
  );
};

export default Logo;