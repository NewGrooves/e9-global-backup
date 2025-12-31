// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
                {/* Primary homepage (PROMOTED from staging) */}
                <Route path="/" element={<HomeStaging />} />

                {/* Legacy / alternate home routes */}
                <Route path="/home-v2024" element={<Home2 />} />
                <Route path="/home-2025" element={<Home2 />} />
                <Route path="/home-fresh" element={<Home2 />} />

                {/* Optional: keep a staging alias (can remove later) */}
                <Route path="/home-staging" element={<HomeStaging />} />

                {/* Deactivated pages (redirect away) */}
                <Route path="/about" element={<Navigate to="/" replace />} />
                <Route path="/how-it-works" element={<Navigate to="/" replace />} />
                <Route
                  path="/how-it-works-staging"
                  element={<Navigate to="/" replace />}
                />

                {/* Keep team page if desired */}
                <Route path="/the-team" element={<TheTeam />} />

                {/* BEEEP (PROMOTED from staging) */}
                <Route path="/beeep" element={<BeeepStagingPage />} />
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
