import { Helmet } from 'react-helmet-async';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "E9 Global",
    "legalName": "E9 Global, INC",
    "url": "https://www.e9global.com",
    "logo": "https://www.e9global.com/logo.png",
    "description": "E9 Global - Monetizing Authentic Customer Experiences. Leading provider of product authentication and customer engagement solutions through EncryptorSeal™ and BEEEP™ technologies.",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-E9GLOBAL",
      "contactType": "customer service",
      "email": "info@e9global.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/e9global",
      "https://twitter.com/e9global"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "E9 Global",
    "url": "https://www.e9global.com",
    "description": "E9 Global - Monetizing Authentic Customer Experiences. Transform product authentication and customer engagement with EncryptorSeal™ and BEEEP™",
    "publisher": {
      "@type": "Organization",
      "name": "E9 Global"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.e9global.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const ProductSchema = ({ product }: { product: 'encryptorseal' | 'beeep' }) => {
  const schemas = {
    encryptorseal: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "EncryptorSeal™",
      "description": "Invisible, battle-tested, copy-proof encryption-grade authentication technology for product security and brand protection.",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Cross-platform",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "Contact for pricing",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "Organization",
        "name": "E9 Global"
      },
      "featureList": [
        "Invisible authentication technology",
        "Copy-proof encryption",
        "Supply chain verification",
        "Battle-tested security"
      ]
    },
    beeep: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "BEEEP™",
      "description": "Brand Experience, Engagement & Encryption Platform - AI-powered customer engagement and data analytics platform.",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cross-platform",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "Contact for pricing",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "Organization",
        "name": "E9 Global"
      },
      "featureList": [
        "AI-powered engagement",
        "Customer verification",
        "Data analytics",
        "QR code scanning",
        "Brand experience platform"
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemas[product])}
      </script>
    </Helmet>
  );
};

export const VideoSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "EncryptorSeal Product Demo",
    "description": "See how EncryptorSeal™ transforms product authentication and customer engagement",
    "thumbnailUrl": "https://www.e9global.com/video-thumbnail.jpg",
    "uploadDate": "2024-12-01",
    "duration": "PT2M30S",
    "embedUrl": "https://player.vimeo.com/video/1111107974",
    "publisher": {
      "@type": "Organization",
      "name": "E9 Global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.e9global.com/logo.png"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const BreadcrumbSchema = ({ items }: { items: Array<{ name: string; url: string }> }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};