import styles from './page.module.scss';

export const metadata = {
  title: 'Resume — Olivia Houlihan',
};

export default function ResumePage() {
  return (
    <main className={styles.resume}>
      <header className={styles.header}>
        <h1 className={styles.name}>OLIVIA HOULIHAN</h1>
        <p className={styles.summary}>
          Motivated and confident individual who finds passion in programming Agile teams. Proven leader who integrates well into new teams with different technical & product backgrounds and cultures. Looking to contribute to a company as a developer using agile techniques for developing great products while continuing to learn in a tech-first environment.
        </p>
        <div className={styles.contact}>
          <div>Austin, Texas</div>
          <div>
            <a href="tel:+19254138060">(925)-413-8060</a>
          </div>
          <div>
            <a href="mailto:morgan.olivia@gmail.com">morgan.olivia@gmail.com</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/olivia-l-houlihan" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div>
            <a href="https://github.com/Livy1159" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>EXPERIENCE</h2>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>The Knot Worldwide, Remote — Software Engineer</h3>
            <p className={styles.dates}>OCTOBER 2019 - PRESENT</p>
          </div>
          <ul>
            <li>Part of the Couples Marketplace team practicing Agile techniques to build and ship large features.</li>
            <li>Lead monitoring of accessibility on Marketplace pages</li>
            <li>Lead on multiple large features and experiments.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>The Knot Worldwide, New York — Associate Software Engineer</h3>
            <p className={styles.dates}>OCTOBER 2018 - OCTOBER 2019</p>
          </div>
          <ul>
            <li>Part of the Core Services team practicing Agile techniques.</li>
            <li>Handled many of TKWW's Rails APIs.</li>
            <li>
              Worked with React between rebuilding current admin tool and contributing to TKWW's internal
              design library.
            </li>
            <li>
              Replatforming existing projects on the Registry Activation team to use more modern
              technologies and better fit agile workflow needs.
            </li>
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>The Knot Worldwide, New York — Software Engineering Intern</h3>
            <p className={styles.dates}>JUNE 2018 - OCTOBER 2018</p>
          </div>
          <ul>
            <li>Part of the Core Services team practicing Agile techniques.</li>
            <li>Handled many of TKWW's Rails APIs.</li>
            <li>Helped integrate Braze API into current applications.</li>
            <li>
              Rebuilt current admin tool to better fit client needs and overall improvement of
              performance using Express and React.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>EDUCATION</h2>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Dev Bootcamp, San Francisco</h3>
            <p className={styles.dates}>2017</p>
          </div>
          <ul>
            <li>
              Completed 1000+ hours in an immersive agile full-stack web development certification program
              while learning problem-solving as well as the core values associated with engineering empathy.
            </li>
            <li>Developed multi-page web applications using MVC patterns.</li>
            <li>Integrated user authentication and worked with backend database architecture.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>South Seattle Community College, Seattle</h3>
            <p className={styles.dates}>2016 - 2017</p>
          </div>
          <p>Electrical Engineering</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>California Polytechnic State University, San Luis Obispo</h3>
            <p className={styles.dates}>2013 - 2016</p>
          </div>
          <p>Electrical Engineering</p>
          <p className={styles.muted}>
            Relevant Courses: Electric Circuit Analysis I & II, Basic Electronics Manufacturing, Computer
            Engineering 101, Calculus I, II, III, & IV.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>PROJECTS</h2>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>Olivia Houlihan Website</h3>
          </div>
          <p>
          Web application for housing resume and information about myself as a software engineer. Built with Next.js, React with Typescript, and Docker. Cursor (AI-first IDE) was utilized for development, leveraging AI-assisted coding and debugging to complete the project and optimize Typescript component logic rapidly.
          </p>
          <div className={styles.links}>
            <a href="https://github.com/Livy1159/OliviaHoulihanWebsite" target="_blank" rel="noopener noreferrer">
              Repo
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>TECHNICAL SKILLS</h2>
        <div className={styles.skillsGrid}>
          <div>
            <h3>Programming Languages</h3>
            <ul>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div>
            <h3>Frontend Technologies</h3>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div>
            <h3>Backend Technologies</h3>
            <ul>
              <li>Node.js</li>
              <li>Hapi</li>
            </ul>
          </div>
          <div>
            <h3>Databases</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <h3>Project Management Tools</h3>
            <ul>
              <li>Jira</li>
              <li>Pivotal</li>
              <li>Trello</li>
            </ul>
          </div>
          <div>
            <h3>Additional</h3>
            <ul>
              <li>Mobile web development</li>
              <li>Accessibility monitoring</li>
              <li>Performance monitoring (New Relic, Grafana, Sumo Logic, Kubernetes)</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}


