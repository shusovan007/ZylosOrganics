// src/components/SEO.tsx
import React from "react";
import { Helmet } from "react-helmet";

const SEO: React.FC = () => {
  const siteUrl = "https://www.zylosorganics.com/";
  const logoUrl = "https://raw.githubusercontent.com/a-zylorg/ZyloOrg/refs/heads/master/logo.jpeg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Zylos Organics",
    "image": logoUrl,
    "description": "Fresh and natural organic vegetables delivered to your doorstep. Premium selection of locally sourced, sustainably grown vegetables.",
    "url": siteUrl
  };

  return (
    <Helmet>
      <title>Zylos Organics - Farm Fresh Organic Vegetables</title>
      <meta name="description" content="Fresh and natural organic vegetables delivered to your doorstep. Premium selection of locally sourced, sustainably grown vegetables." />
      <meta name="keywords" content="organic vegetables, farm fresh vegetables, sustainable farming, local produce, Zylos Organics" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Zylos Organics - Farm Fresh Organic Vegetables" />
      <meta property="og:description" content="Premium organic vegetables grown with love, delivered with care." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={logoUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Zylos Organics - Farm Fresh Organic Vegetables" />
      <meta name="twitter:description" content="Fresh and natural organic vegetables delivered to your doorstep." />
      <meta name="twitter:image" content={logoUrl} />

      {/* Favicon */}
      <link rel="icon" href={logoUrl} type="image/jpeg" />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
