import React from 'react';

interface ModernPhoneDisplayProps {
  children?: React.ReactNode;
  className?: string;
  animated?: boolean;
}

const ModernPhoneDisplay = ({ children, className = "", animated = true }: ModernPhoneDisplayProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* iPhone Frame */}
      <div className="relative w-64 h-[520px] sm:w-72 sm:h-[580px] mx-auto">
        {/* Phone Shadow */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 rounded-[3rem] blur-xl transform translate-y-4 scale-105 opacity-30"></div>
        
        {/* Phone Body */}
        <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-black rounded-[3rem] p-3 shadow-2xl border border-gray-800/50">
          {/* Dynamic Island */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>
          
          {/* Screen */}
          <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
            {/* Screen Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-50"></div>
            
            {/* Screen Content */}
            <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black overflow-hidden rounded-[2.5rem]">
              {children}
            </div>
            
            {/* Screen Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[2.5rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernPhoneDisplay;