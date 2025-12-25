// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { OrganizationSchema, WebsiteSchema } from "@/components/StructuredData";
import ErrorBoundary from "@/components/ErrorBoundary";

import IndexNew from "./pages/IndexNew";
import Home2 from "./pages/Home2";
import HomeStaging from "./pages/HomeStaging";

import About from "./pages/About";
import TheTeam from "./pages/TheTeam";

import HowItWorks from "./pages/HowItWorks";
import HowItWorksStaging from "./pages/HowItWorksStaging";

import Beeep from "./pages/Beeep";
import BeeepStagingPage from "./pages/BeeepStagingPage";

import BookDemo from "./pages/BookDemo";
import VideoPage from "./pages/VideoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
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
                {/* Primary homepage */}
                <Route path="/" element={<IndexNew />} />

                {/* Legacy / alternate home routes */}
                <Route path="/home-v2024" element={<Home2 />} />
                <Route path="/home-2025" element={<Home2 />} />
                <Route path="/home-fresh" element={<Home2 />} />

                {/* New homepage staging */}
                <Route path="/home-staging" element={<HomeStaging />} />

                {/* Site pages */}
                <Route path="/about" element={<About />} />
                <Route path="/the-team" element={<TheTeam />} />

                {/* How It Works */}
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/how-it-works-staging" element={<HowItWorksStaging />} />

                {/* BEEEP */}
                <Route path="/beeep" element={<Beeep />} />
                <Route path="/beeep-staging" element={<BeeepStagingPage />} />

                {/* Other */}
                <Route path="/book-demo" element={<BookDemo />} />
                <Route path="/video" element={<VideoPage />} />

                {/* Catch-all */}
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
