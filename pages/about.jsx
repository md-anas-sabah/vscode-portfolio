const AboutPage = () => {
  return (
    <div className="about">
      <h2
        style={{
          marginBottom: "10px",
        }}
      >
        A Little Bit About Me
      </h2>
      <p
        style={{
          marginBottom: "30px",
        }}
      >
        Hello there! 👋 I'm Md Anas Sabah, a software developer from India and a
        proud graduate of Chandigarh University. I love building sleek,
        scalable, and smart applications from pixel-perfect UIs to powerful
        backends and AI-driven agents that bring ideas to life.
      </p>

      <h2
        style={{
          marginBottom: "10px",
        }}
      >
        Full-Stack & AI Enthusiast
      </h2>
      <p
        style={{
          marginBottom: "20px",
        }}
      >
        What started as a love for crafting seamless frontend experiences has
        grown into a journey of mastering the entire spectrum of software
        development. Over time, I’ve moved beyond just creating user interfaces
        to architecting complete systems that are scalable, efficient, and
        intelligent.
      </p>
      <p
        style={{
          marginBottom: "20px",
        }}
      >
        Along the way, I’ve developed a strong passion for solving complex
        problems, whether it’s designing modular backend architectures,
        optimizing performance for real-world use cases, or building AI-driven
        agents that push the boundaries of automation.
      </p>
      <p
        style={{
          marginBottom: "20px",
        }}
      >
        One of my proudest milestones recently has been creating and publishing
        my own npm package, which in just a month has already been adopted by
        300+ developers worldwide. This achievement not only reflects my
        technical expertise but also my commitment to contributing back to the
        developer community.
      </p>
      <p
        style={{
          marginBottom: "20px",
        }}
      >
        I believe that building software is not just about writing code, it’s
        about creating meaningful impact. Each project I take on is an
        opportunity to merge creativity, logic, and innovation to deliver
        solutions that truly make a difference.
      </p>
      <h2
        style={{
          marginBottom: "10px",
        }}
      >
        Tech Stack:
      </h2>
      <p
        style={{
          marginBottom: "20px",
        }}
      >
        Proficient across the stack, I build responsive UIs with React and
        Next.js (Tailwind CSS, Redux/Jotai), architect modular APIs with Node.js
        & Express (and FastAPI in Python), work with PostgreSQL & MongoDB, and
        implement real-time features using Socket.io. I also ship mobile/desktop
        apps with React Native & Electron, create AI agents with CrewAI and n8n,
        automate with ChatGPT APIs, and deploy using Docker on AWS/Firebase with
        a modern tooling setup (Vite, Webpack, Babel, Git, Postman, Figma)
      </p>
      <h2
        style={{
          marginBottom: "10px",
        }}
      >
        My Philosophy
      </h2>
      <p
        style={{
          marginBottom: "20px",
        }}
      >
        I see coding as both an art and a science — combining design, logic, and
        innovation. I thrive on solving challenges with creativity and
        precision, whether it’s:
      </p>
      <ul
        style={{
          marginBottom: "20px",
          marginLeft: "40px",
        }}
      >
        <li>Designing interactive, user-friendly UIs</li>
        <li>Architecting modular backend systems</li>
        <li>Crafting AI-driven agents that handle complex tasks</li>
      </ul>

      <h2
        style={{
          marginBottom: "10px",
        }}
      >
        Beyond Coding:
      </h2>
      <p>
        Outside of development, I’m always experimenting with new technologies,
        keeping up with AI breakthroughs, and refining my skills to stay ahead
        in the ever-evolving tech world.
      </p>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
