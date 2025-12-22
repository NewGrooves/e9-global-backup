
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
// import GoogleAnalytics from "@/components/GoogleAnalytics";
import { OrganizationSchema, WebsiteSchema } from "@/components/StructuredData";
// import CacheBreaker from "@/components/CacheBreaker";
import ErrorBoundary from "@/components/ErrorBoundary";
import IndexNew from "./pages/IndexNew";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import TheTeam from "./pages/TheTeam";
import HowItWorks from "./pages/HowItWorks";
import Beeep from "./pages/Beeep";
import BeeepStagingPage from "./pages/BeeepStagingPage";
import HomeStagingPage from "./pages/HomeStagingPage";
import BookDemo from "./pages/BookDemo";
import VideoPage from "./pages/VideoPage";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering');
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <OrganizationSchema />
            <WebsiteSchema />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<IndexNew />} />
                <Route path="/home-v2024" element={<Home2 />} />
                <Route path="/home-2025" element={<Home2 />} />
                <Route path="/home-fresh" element={<Home2 />} />
                <Route path="/about" element={<About />} />
                <Route path="/the-team" element={<TheTeam />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/beeep" element={<Beeep />} />
                <Route path="/beeep-staging" element={<BeeepStagingPage />} />
                 <Route path="/home-staging" element={<HomeStagingPage />} />
                <Route path="/book-demo" element={<BookDemo />} />
<Route path="/video" element={<VideoPage />} />
<Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
