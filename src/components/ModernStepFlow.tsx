import React, { useState, useEffect } from 'react';
import { Scan, Shield, CheckCircle, Zap, Camera, Loader2, Star, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import ModernPhoneDisplay from './ModernPhoneDisplay';

const ModernStepFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationState, setAnimationState] = useState('idle');

  const steps = [
    {
      id: 1,
      title: "Customer Scans Product",
      description: "User points their smartphone camera at the EncryptorSeal QR code",
      icon: Scan,
      color: "from-blue-500 to-cyan-500",
      screenContent: (
        <div className="w-full h-full relative bg-gradient-to-br from-gray-900 to-black">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
            <span className="font-medium">9:41</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Camera Interface */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative">
              {/* Scanning Frame */}
              <div className="w-48 h-48 border-2 border-blue-400 rounded-2xl relative">
                <div className="absolute inset-0 bg-blue-400/10 rounded-2xl"></div>
                
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-blue-400 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-blue-400 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-blue-400 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-blue-400 rounded-br-lg"></div>
                
                {/* QR Code Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-white/30 rounded-lg bg-white/5 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-white/50 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Scanning Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
              </div>
              
              {/* Scanning Text */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400 text-sm font-medium">
                Scanning QR Code...
              </div>
            </div>
          </div>
          
          {/* Bottom Action */}
          <div className="p-6">
            <div className="w-16 h-16 bg-white/10 rounded-full mx-auto flex items-center justify-center border border-white/20">
              <Camera className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Dual-Authentication Verification",
      description: "Both the original product owner and customer purchasing the product undergo authentication while the brand maintains complete visibility throughout the process",
      icon: Shield,
      color: "from-yellow-500 to-orange-500",
      screenContent: (
        <div className="w-full h-full relative bg-gradient-to-br from-gray-900 to-black">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
            <span className="font-medium">9:41</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Verification Screen */}
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            {/* Loading Animation */}
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full border-4 border-yellow-500/20 relative">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-500 animate-spin"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-yellow-500" />
                </div>
              </div>
            </div>
            
            {/* Verification Steps */}
            <div className="space-y-4 w-full max-w-xs">
              <div className="flex items-center space-x-3 bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20">
                <Loader2 className="w-5 h-5 text-yellow-500 animate-spin" />
                <span className="text-yellow-400 text-sm">Verifying product owner...</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="w-5 h-5 rounded-full border-2 border-white/30"></div>
                <span className="text-white/70 text-sm">Authenticating customer...</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="w-5 h-5 rounded-full border-2 border-white/30"></div>
                <span className="text-white/70 text-sm">Validating chain of custody...</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full max-w-xs mt-8">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
              </div>
              <p className="text-center text-white/70 text-xs mt-2">Verification in progress...</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Authentic Product Confirmed",
      description: "Once verified as genuine, both the client dashboard and customer interface update in real-time to confirm product authenticity",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
      screenContent: (
        <div className="w-full h-full relative bg-gradient-to-br from-gray-900 to-black">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
            <span className="font-medium">9:41</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Success Screen */}
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            {/* Success Animation */}
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border-2 border-green-500/30">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              {/* Success Particles */}
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`absolute w-2 h-2 bg-green-400 rounded-full animate-ping`}
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 15}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Verification Complete */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-2">Verified Authentic!</h3>
              <p className="text-white/70 text-sm">Product authentication complete</p>
            </div>
            
            {/* Product Info */}
            <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20 w-full max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Premium Product</p>
                  <p className="text-green-400 text-xs">Serial: #EPX-2024-001</p>
                </div>
              </div>
              <div className="text-xs text-white/70">
                Verified: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "BEEEP™ Experience Activated",
      description: "Customer receives rich content, rewards, and interactive brand experience",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      screenContent: (
        <div className="w-full h-full relative bg-gradient-to-br from-gray-900 to-black">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
            <span className="font-medium">9:41</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Engagement Screen */}
          <div className="flex-1 p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg">Welcome to Premium!</h3>
              <p className="text-white/70 text-sm">Unlock exclusive content & rewards</p>
            </div>
            
            {/* Rewards Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                <Gift className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white text-xs font-medium">20% Off</p>
                <p className="text-white/70 text-xs">Next Purchase</p>
              </div>
              
              <div className="bg-pink-500/10 rounded-lg p-3 border border-pink-500/20">
                <Star className="w-6 h-6 text-pink-400 mb-2" />
                <p className="text-white text-xs font-medium">VIP Access</p>
                <p className="text-white/70 text-xs">Premium Features</p>
              </div>
              
              <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                <div className="w-6 h-6 bg-blue-400 rounded-full mb-2 flex items-center justify-center">
                  <span className="text-xs text-white font-bold">2x</span>
                </div>
                <p className="text-white text-xs font-medium">Double Points</p>
                <p className="text-white/70 text-xs">This Month</p>
              </div>
              
              <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                <div className="w-6 h-6 bg-green-400 rounded-lg mb-2"></div>
                <p className="text-white text-xs font-medium">Free Shipping</p>
                <p className="text-white/70 text-xs">All Orders</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <Link to="/book-demo">
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium text-sm shadow-lg">
                Explore Premium Benefits
              </button>
            </Link>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState('transitioning');
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setAnimationState('idle');
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8 lg:space-y-0">
      {/* Mobile Layout */}
      <div className="flex justify-center lg:hidden">
        <div className="w-full max-w-xs mx-auto">
          <ModernPhoneDisplay 
            className={`transition-all duration-500 ease-in-out ${
              animationState === 'transitioning' ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
            }`}
          >
            {steps[currentStep].screenContent}
          </ModernPhoneDisplay>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
        {/* Steps List */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            
            return (
              <div
                key={step.id}
                className={`group relative p-6 rounded-2xl transition-all duration-700 cursor-pointer border ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-lg scale-105' 
                    : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200'
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    isActive 
                      ? `bg-gradient-to-r ${step.color} text-white shadow-lg` 
                      : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`text-sm font-bold px-2 py-1 rounded-lg ${
                        isActive ? 'bg-white/80 text-blue-600' : 'bg-gray-100 text-gray-500'
                      }`}>
                        0{step.id}
                      </span>
                      <h3 className={`font-bold text-xl transition-colors ${
                        isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className={`text-lg leading-relaxed transition-colors ${
                      isActive ? 'text-gray-700' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Phone Display */}
        <div className="flex justify-center">
          <ModernPhoneDisplay 
            className={`transition-all duration-700 ease-in-out ${
              animationState === 'transitioning' ? 'scale-95 opacity-50 rotate-1' : 'scale-100 opacity-100 rotate-0'
            }`}
          >
            {steps[currentStep].screenContent}
          </ModernPhoneDisplay>
        </div>
      </div>

      {/* Mobile Steps */}
      <div className="space-y-4 lg:hidden">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStep;
          
          return (
            <div
              key={step.id}
              className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-500 cursor-pointer border ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-md' 
                  : 'bg-white border-gray-100 hover:bg-gray-50'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                isActive 
                  ? `bg-gradient-to-r ${step.color} text-white` 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    isActive ? 'bg-white/80 text-blue-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                    0{step.id}
                  </span>
                  <h3 className={`font-bold text-lg transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {step.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ${
                  isActive ? 'text-gray-700' : 'text-gray-600'
                }`}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModernStepFlow;