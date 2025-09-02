
import { X, Smartphone, CheckCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const steps = [
    {
      title: "Scan the Product",
      description: "Point your camera at the EncryptorSeal™ on this premium sneaker",
      content: (
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop" 
            alt="Premium Sneaker" 
            className="rounded-lg mx-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-cobalt-blue rounded-lg animate-pulse"></div>
          </div>
        </div>
      )
    },
    {
      title: "Authentication Verified",
      description: "EncryptorSeal™ confirms this is 100% authentic",
      content: (
        <div className="text-center">
          <CheckCircle className="text-green-400 mx-auto mb-4" size={64} />
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
            <p className="text-green-600 font-semibold">✓ Authentic Product Verified</p>
            <p className="text-gray-700 text-sm mt-2">Serial: SNK-2024-AUTH-7892</p>
          </div>
        </div>
      )
    },
    {
      title: "AI Engagement Activated",
      description: "Meet your product's AI personality and unlock exclusive content",
      content: (
        <div className="bg-gray-100 rounded-lg p-4 text-left">
          <div className="flex items-start space-x-3">
            <Sparkles className="text-cobalt-blue mt-1" size={20} />
            <div>
              <p className="text-black font-medium">Hey! I'm your authentic Nike Air Max 270.</p>
              <p className="text-gray-700 text-sm mt-2">
                I was crafted in Vietnam with premium materials. Want to see my journey, 
                access exclusive styling tips, or join our collector community?
              </p>
              <div className="flex space-x-2 mt-3">
                <button className="bg-cobalt-blue text-white px-3 py-1 rounded text-sm font-medium">
                  My Journey
                </button>
                <button className="border border-cobalt-blue text-cobalt-blue px-3 py-1 rounded text-sm">
                  Style Tips
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-w-[calc(100vw-2rem)] max-h-[90vh] overflow-y-auto border border-gray-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-playfair font-bold text-black">
            EncryptorSeal<span className="trademark-small">™</span> Demo
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-black transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index + 1 <= step ? 'bg-cobalt-blue' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="text-center">
            <h3 className="text-2xl font-playfair font-bold text-black mb-2">
              {steps[step - 1].title}
            </h3>
            <p className="text-gray-700 mb-6">
              {steps[step - 1].description}
            </p>
            
            <div className="mb-8">
              {steps[step - 1].content}
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4">
              {step > 1 && (
                <button 
                  onClick={() => setStep(step - 1)}
                  className="border border-gray-400 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Previous
                </button>
              )}
              
              {step < steps.length ? (
                <button 
                  onClick={() => setStep(step + 1)}
                  className="bg-cobalt-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-cobalt-blue/80 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button 
                  onClick={onClose}
                  className="bg-cobalt-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-cobalt-blue/80 transition-colors"
                >
                  Start Your Journey
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
