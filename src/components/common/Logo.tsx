import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://i.postimg.cc/W1ndBXmH/Grunt-Works-Association-Unit-Patch-1-2025.png" 
        alt="Grunt Works Association Logo" 
        className="h-full w-auto"
      />
      <div className="ml-2 font-bold text-lg leading-none">
        <div className="text-white">GRUNT WORKS</div>
        <div className="text-[#D6C7A9] text-sm">ASSOCIATION</div>
      </div>
    </div>
  );
};

export default Logo;