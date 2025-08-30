import Head from "next/head";

const CustomHead = ({ title, description, keywords, ogTitle, ogDescription, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={keywords}
      />
      <meta name="author" content="Md Anas Sabah" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      <meta property="og:title" content={ogTitle || title} />
      <meta
        property="og:description"
        content={ogDescription || description}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={url}
      />
      <meta property="og:site_name" content="Md Anas Sabah Portfolio" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Md Anas Sabah",
            "url": url,
            "sameAs": [
              "https://github.com/mdanassabah",
              "https://dev.to/mdanassabah",
              "https://linkedin.com/in/mdanassabah"
            ],
            "jobTitle": "Full Stack Developer & AI Enthusiast",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "description": description,
            "image": "https://anassabahportfolio.vercel.app/profile.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            }
          })
        }}
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Md Anas Sabah",
  description: "Md Anas Sabah is an avid full stack web developer building websites and applications you'd love to use",
  keywords: "anas sabah, anas, sabah, web developer portfolio, anas web developer, anas developer, mern stack, anas sabah portfolio",
  url: "https://anassabahportfolio.vercel.app/"
};
