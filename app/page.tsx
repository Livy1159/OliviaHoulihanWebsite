import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container">
      <aside className="sidebar">
        <div className="brand">OH</div>
        <nav className="nav">
          <Link href="/resume">Resume</Link>
          <Link href="/about">How this was built</Link>
        </nav>
      </aside>
      <section className="content">
        <h1 className="title">Olivia Houlihan</h1>
        <p className="subtitle">Software Engineer</p>
        <p className="lead">
          I build reliable, user-centered software with a focus on clarity, quality, and
          measurable impact. I enjoy turning ideas into durable, maintainable systems and
          delighting users along the way.
        </p>
        <div className="cta-row">
          <Link className="button" href="/resume">View Resume</Link>
          <Link className="button secondary" href="/about">How this site was built</Link>
        </div>
      </section>
    </main>
  );
}


