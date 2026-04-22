// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { OrganizationSchema, WebsiteSchema } from "@/components/StructuredData";
import ErrorBoundary from "@/components/ErrorBoundary";

import Home2 from "./pages/Home2";
import HomeStaging from "./pages/HomeStaging";

import TheTeam from "./pages/TheTeam";

import BeeepStagingPage from "./pages/BeeepStagingPage";
import SecurityTech from "./pages/SecurityTech";

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
                <Route path="/" element={<HomeStaging />} />

                {/* Legacy / alternate home routes */}
                <Route path="/home-v2024" element={<Home2 />} />
                <Route path="/home-2025" element={<Home2 />} />
                <Route path="/home-fresh" element={<Home2 />} />
                <Route path="/home-staging" element={<HomeStaging />} />

                {/* Deactivated pages */}
                <Route path="/about" element={<Navigate to="/" replace />} />
                <Route path="/how-it-works" element={<Navigate to="/" replace />} />
                <Route
                  path="/how-it-works-staging"
                  element={<Navigate to="/" replace />}
                />

                {/* Team */}
                <Route path="/the-team" element={<TheTeam />} />

                {/* E9 Engagement Platform */}
                <Route path="/platform" element={<BeeepStagingPage />} />
                <Route path="/beeep" element={<Navigate to="/platform" replace />} />
                <Route path="/beeep-staging" element={<Navigate to="/platform" replace />} />

                {/* Security Tech (canonical) */}
                <Route path="/security-tech" element={<SecurityTech />} />

                {/* Redirect legacy URLs */}
                <Route
                  path="/security-tech-stack"
                  element={<Navigate to="/security-tech" replace />}
                />
                <Route
                  path="/security-tech-stack-staging"
                  element={<Navigate to="/security-tech" replace />}
                />

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

