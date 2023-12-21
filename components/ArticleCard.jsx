import Image from "next/image";
import EyeIcon from "../components/icons/EyeIcon";
import HeartIcon from "../components/icons/HeartIcon";
import CommentIcon from "../components/icons/CommentIcon";
import styles from "../styles/ArticleCard.module.css";

const ArticleCard = ({
  url,
  cover_image,
  title,
  page_views_count,
  public_reactions_count,
  comments_count,
  description,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <img
        src={cover_image}
        alt={title}
        width={260}
        height={150}
        style={{ objectFit: "fill" }}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <EyeIcon className={styles.icon} /> {page_views_count}
        </div>
        <div className={styles.stat}>
          <HeartIcon className={styles.icon} /> {public_reactions_count}
        </div>
        <div className={styles.stat}>
          <CommentIcon className={styles.icon} /> {comments_count}
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
