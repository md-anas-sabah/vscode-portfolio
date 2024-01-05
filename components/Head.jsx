import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Md Anas Sabah is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="anas sabah, anas, sabah, web developer portfolio, anas web developer, anas developer, mern stack, anas sabah portfolio"
      />
      <meta property="og:title" content="Md Anas Sabah's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />

      <meta
        property="og:url"
        content="https://anassabahportfolio.vercel.app/"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Md Anas Sabah",
};
