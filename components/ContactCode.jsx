import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "mdanassabah@gmail.com",
    href: "mailto:nitinranganath@gmail.com",
  },
  {
    social: "github",
    link: "md-anas-sabah",
    href: "https://github.com/md-anas-sabah",
  },
  {
    social: "linkedin",
    link: "md-anas-sabah",
    href: "https://www.linkedin.com/in/md-anas-sabah/",
  },
  {
    social: "twitter",
    link: "MdAnasSabah",
    href: "https://www.twitter.com/MdAnasSabah",
  },
  {
    social: "instagram",
    link: "md_anas_sabah",
    href: "https://www.instagram.com/md_anas_sabah",
  },
  {
    social: "telegram",
    link: "MdAnasSabah",
    href: "https://t.me/MdAnasSabah",
  },
  {
    social: "dev.to",
    link: "mdanassabah",
    href: "https://dev.to/mdanassabah",
  },
  {
    social: "leetcode",
    link: "mdanassabah",
    href: "https://leetcode.com/mdanassabah/",
  },
  {
    social: "codechef",
    link: "anas_5243",
    href: "https://www.codechef.com/users/anas_5243",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
