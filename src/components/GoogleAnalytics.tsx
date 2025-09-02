import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Measurement ID (replace with your actual ID)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route changes
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </script>
    </Helmet>
  );
};

// Analytics event tracking functions
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, parameters);
  }
};

export const trackDemoRequest = () => {
  trackEvent('demo_request', {
    event_category: 'engagement',
    event_label: 'demo_button_click',
    value: 1
  });
};

export const trackVideoPlay = () => {
  trackEvent('video_play', {
    event_category: 'engagement',
    event_label: 'product_demo_video',
    value: 1
  });
};

export const trackPageScroll = (scrollDepth: number) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: 'page_scroll_depth',
    value: scrollDepth
  });
};

export default GoogleAnalytics;