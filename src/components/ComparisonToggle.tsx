
import React, { useState } from 'react';
import { Shield, ShieldX, CheckCircle, XCircle } from 'lucide-react';
import ModernPhoneDisplay from './ModernPhoneDisplay';

const ComparisonToggle = () => {
  const [isSecured, setIsSecured] = useState(false);

  const unsecuredContent = (
    <div className="text-center p-4">
      <ShieldX className="w-12 h-12 text-red-500 mx-auto mb-4" />
      <div className="text-sm text-gray-700">
        <div className="font-medium mb-2">Basic Scanner Result</div>
        <div className="text-xs">
          • Limited product info
          • No authentication
          • No engagement
        </div>
      </div>
    </div>
  );

  const securedContent = (
    <div className="text-center p-4">
      <Shield className="w-12 h-12 text-cobalt-blue mx-auto mb-4" />
      <div className="text-sm text-gray-700">
        <div className="font-medium mb-2 text-cobalt-blue">Authenticated Product</div>
        <div className="text-xs">
          • Verified authenticity
          • Rich product details
          • Interactive experience
        </div>
      </div>
    </div>
  );

  return (
    <div className="text-center">
      <div className="mb-8">
        <div className="inline-flex items-center p-1 bg-gray-200/50 rounded-lg">
          <button
            onClick={() => setIsSecured(false)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              !isSecured
                ? 'bg-gray-300/70 text-red-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <XCircle className="w-4 h-4 inline mr-2" />
            Unsecured Product
          </button>
          <button
            onClick={() => setIsSecured(true)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              isSecured
                ? 'bg-gray-300/70 text-cobalt-blue shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            EncryptorSeal Protected
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <ModernPhoneDisplay className="transition-all duration-500 ease-in-out">
          {isSecured ? securedContent : unsecuredContent}
        </ModernPhoneDisplay>
      </div>

      <div className="mt-6 max-w-md mx-auto">
        <p className="text-gray-600 text-sm">
          {isSecured
            ? "Experience the full authentication and engagement platform with EncryptorSeal protection."
            : "See what customers get with unprotected products - limited information and no security verification."
          }
        </p>
      </div>
    </div>
  );
};

export default ComparisonToggle;
