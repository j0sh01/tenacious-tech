
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO = ({
  title = "TenaciousTech - Innovative Software Solutions",
  description = "TenaciousTech specializes in cutting-edge Frappe-based solutions, mobile applications, and custom systems. Experience innovation through technology.",
  keywords = "Frappe development, ERPNext, mobile apps, custom software, Tanzania, Dar es Salaam, software solutions, web development",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://tenacioustech.com",
  type = "website",
  author = "TenaciousTech",
  publishedTime,
  modifiedTime
}: SEOProps) => {
  const fullTitle = title.includes('TenaciousTech') ? title : `${title} | TenaciousTech`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="TenaciousTech" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@tenacioustech" />

      {/* Article specific tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === 'article' && <meta property="article:author" content={author} />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "TenaciousTech",
          "url": "https://tenacioustech.com",
          "logo": image,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dar es Salaam",
            "addressCountry": "Tanzania"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+255748624706",
            "email": "info@tenacioustech.com",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.linkedin.com/company/tenacioustech",
            "https://twitter.com/tenacioustech"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
