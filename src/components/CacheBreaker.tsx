import { useEffect } from 'react';

const CacheBreaker = () => {
  useEffect(() => {
    const currentTimestamp = new Date().getTime();
    const expectedRoutes = ['/home-v2024', '/about', '/the-team', '/how-it-works', '/beeep', '/book-demo'];
    
    // Ultra-aggressive cache validation
    const validateBundle = () => {
      try {
        // Check if expected components exist in window
        const hasReactRouter = window.React && window.ReactDOM;
        
        // Validate current page can handle expected routes
        const currentPath = window.location.pathname;
        const isExpectedRoute = expectedRoutes.some(route => currentPath === route || currentPath === '/');
        
        // Simplified build validation - only check if build-id exists
        fetch('/build-id.txt?' + currentTimestamp)
          .then(response => {
            if (!response.ok) {
              console.log('🔄 Build ID validation: Build ID file not found, assuming current build');
              return;
            }
            return response.text();
          })
          .then(buildId => {
            // Only force refresh if we can't validate the build at all
            if (buildId && !buildId.includes('CACHE-BREAK')) {
              console.log('🔄 Cache refresh: Updating to latest build...');
              // Less aggressive refresh - just clear service workers
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(registrations => {
                  registrations.forEach(registration => registration.unregister());
                });
              }
              // Simple reload without clearing all storage
              window.location.reload();
            }
          })
          .catch(() => {
            console.log('🚨 NUCLEAR CACHE RESET: Build validation failed, forcing refresh...');
            window.location.href = window.location.protocol + '//' + window.location.host + window.location.pathname + '?nuclear=' + currentTimestamp;
          });
      } catch (error) {
        console.log('🚨 NUCLEAR CACHE RESET: Bundle validation failed, forcing refresh...', error);
        window.location.href = window.location.protocol + '//' + window.location.host + window.location.pathname + '?nuclear=' + currentTimestamp;
      }
    };

    // Run validation after a short delay to ensure bundle is loaded
    setTimeout(validateBundle, 1000);
  }, []);

  return null;
};

export default CacheBreaker;