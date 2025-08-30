import GitHubCalendar from "react-github-calendar";
import RepoCard from "../components/RepoCard";
import styles from "../styles/GithubPage.module.css";

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: "#161B22",
    level1: "#0e4429",
    level2: "#006d32",
    level3: "#26a641",
    level4: "#39d353",
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <img
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username="md-anas-sabah"
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Default fallback data
  const defaultUser = {
    login: "md-anas-sabah",
    avatar_url: "https://github.com/md-anas-sabah.png",
    public_repos: 0,
    followers: 0,
  };
  
  const defaultRepos = [];

  try {
    // Try to fetch user data without token first
    const userRes = await fetch(`https://api.github.com/users/md-anas-sabah`);
    let user = defaultUser;
    
    if (userRes.ok) {
      const userData = await userRes.json();
      user = userData;
      console.log("User data fetched successfully:", userData);
    } else {
      console.log("User API failed, using default data");
    }

    // Try to fetch repos data without token
    const repoRes = await fetch(
      `https://api.github.com/users/md-anas-sabah/repos?per_page=100`
    );
    let repos = defaultRepos;
    
    if (repoRes.ok) {
      const reposData = await repoRes.json();
      if (Array.isArray(reposData)) {
        repos = reposData
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 5);
        console.log("Repos data fetched successfully:", repos.length, "repos");
      }
    } else {
      console.log("Repos API failed, using empty array");
    }

    return {
      props: { title: "GitHub", repos, user },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error("GitHub API error:", error);
    return {
      props: { title: "GitHub", repos: defaultRepos, user: defaultUser },
      revalidate: 3600,
    };
  }
}

export default GithubPage;
