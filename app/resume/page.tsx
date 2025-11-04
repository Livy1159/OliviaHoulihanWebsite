export const metadata = {
  title: 'Resume — Olivia Houlihan',
};

export default function ResumePage() {
  return (
    <main className="page">
      <h1>Resume</h1>
      <p>
        Below is a concise overview. You can replace this with a PDF embed or a
        Markdown-driven resume later.
      </p>

      <section>
        <h2>Experience</h2>
        <div className="card">
          <h3>Software Engineer — Example Co.</h3>
          <p className="muted">2022 — Present</p>
          <ul>
            <li>Designed, built, and shipped features used by thousands of users.</li>
            <li>Led reliability and performance improvements across services.</li>
            <li>Collaborated closely with design and product for impactful outcomes.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <p>TypeScript, React, Next.js, Node.js, SQL/NoSQL, Docker, CI/CD</p>
      </section>

      <section>
        <h2>Education</h2>
        <p>B.S. in Computer Science (or equivalent)</p>
      </section>
    </main>
  );
}


