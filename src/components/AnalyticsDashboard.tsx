
import React from 'react';
import { Smartphone, MapPin, BarChart3 } from 'lucide-react';

const AnalyticsDashboard = () => {
  const features = [
    {
      number: "01",
      title: "Smartphone timestamp, geolocation and photo capture data records.",
      icon: Smartphone,
      description: "Comprehensive mobile data collection with precise location and time tracking."
    },
    {
      number: "02", 
      title: "Authentication heat map organized by valid and counterfeit results.",
      icon: MapPin,
      description: "Visual geographic representation of product authenticity verification patterns."
    },
    {
      number: "03",
      title: "Visual analytics and reporting with usage and demographics data.",
      icon: BarChart3,
      description: "Detailed insights into customer behavior, engagement patterns, and market trends."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Dashboard Image - Smaller and Centered */}
      <div className="flex justify-center">
        <div className="relative max-w-3xl w-full">
          <img
            src={`/lovable-uploads/f58b2633-bad4-4151-86fe-60c97778ec7d.png?t=${Date.now()}&v=3&cache=false`}
            alt="Analytics Dashboard Interface"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          
          return (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/20 shadow-lg"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {feature.number}
                </div>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 icon-gradient-primary rounded-2xl flex items-center justify-center mb-6 mt-4">
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-foreground mb-4 text-lg leading-tight">
                {feature.title}
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
