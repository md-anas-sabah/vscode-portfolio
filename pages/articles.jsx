import ArticleCard from "../components/ArticleCard";
import styles from "../styles/ArticlesPage.module.css";

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
        Recent Posts from{" "}
        <a
          href="https://dev.to/mdanassabah"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {/* {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))} */}
        <ArticleCard
          url={
            "https://dev.to/mdanassabah/understanding-json-web-tokens-jwt-3n68"
          }
          cover_image={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--EwnV5kiC--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/awuv1339bq7ln6orrdec.png"
          }
          description={
            "JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties. In web development, JWTs are commonly..."
          }
          title={"Understanding JSON Web Tokens (JWT)"}
          page_views_count={">25"}
          public_reactions_count={"5"}
          comments_count={"0"}
        />
        <ArticleCard
          url={"https://dev.to/mdanassabah/typescript-react-2d4b"}
          cover_image={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--X8DtWdxA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lk4xyn1glcyerqqs66xe.png"
          }
          description={
            "You all think why we need TypeScript when we are just happy creating React App using JavaScript. Now, I was at that stage as well but having used TypeScript ..."
          }
          title={"TypeScript + React"}
          page_views_count={"296"}
          public_reactions_count={"5"}
          comments_count={"1"}
        />
        <ArticleCard
          url={"https://dev.to/mdanassabah/life-cycle-of-a-component-56cp"}
          cover_image={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--RDdxoyBw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1gg7j4clkbh0i84eka7.png"
          }
          description={
            "In a React application, a component's lifecycle refers to the various stages it goes through, from the moment it's created to when it's removed from the DOM. "
          }
          title={"Life Cycle of a Component"}
          page_views_count={"343"}
          public_reactions_count={"6"}
          comments_count={"0"}
        />
        <ArticleCard
          url={"https://dev.to/mdanassabah/react-redux-4ldk"}
          cover_image={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--tcZq71xv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ulbh4rjjxhxz4ynowygh.jpg"
          }
          description={
            " Redux is a state container and in any JavaScript application the state of application can change.But what exactly do we mean by state of an application?..."
          }
          title={"React + Redux"}
          page_views_count={"161"}
          public_reactions_count={"6"}
          comments_count={"2"}
        />
        <ArticleCard
          url={"https://dev.to/mdanassabah/callback-hell-and-promises-4mo1"}
          cover_image={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--BE_B4Me5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sh436pszjdyiczpfjpil.jpg"
          }
          description={
            "Callback is a powerful way to do asynchronous thing in JavaScript. It is a function which is to be executed after another function has finished execution."
          }
          title={"Callback Hell and Promises"}
          page_views_count={"48"}
          public_reactions_count={"6"}
          comments_count={"0"}
        />
        <ArticleCard
          url={"https://dev.to/mdanassabah/nextjs-next-auth-5856"}
          cover_image={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--n8wCV2Oa--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ul5mxl9hasuvd9jnh51f.jpg"
          }
          description={
            "Next is a full stack , open source react framework for production application by the company named Vercel."
          }
          title={"Next.js: Next-auth"}
          page_views_count={"232"}
          public_reactions_count={"11"}
          comments_count={"0"}
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://dev.to/api/articles/me/published?per_page=6",
    {
      headers: {
        "api-key": process.env.DEV_TO_API_KEY,
      },
    }
  );

  const data = await res.json();

  return {
    props: { title: "Articles", articles: data },
    revalidate: 60,
  };
}

export default ArticlesPage;
