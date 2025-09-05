import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoPage = () => {
  return (
    <>
      <Helmet>
        <title>Private Video - E9 Global</title>
        <meta name="description" content="Private video content for E9 Global." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1419] text-white">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
              E9 Global
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Private Video Content
            </h2>
            <p className="text-lg text-gray-300">
              Exclusive presentation material
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20">
              <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden bg-black">
                <iframe
                  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?h=HASH_IF_PRIVATE&title=0&byline=0&portrait=0"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Private Video Content"
                />
              </div>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="text-center mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-[#1a1a2e] transition-all duration-300 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Main Site
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
