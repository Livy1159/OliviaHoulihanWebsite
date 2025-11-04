import Link from 'next/link';
import styles from './page.module.scss';
import TechAnimation from './components/TechAnimation';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <TechAnimation />
      <section className={styles.content}>
        <h1 className={styles.title}>Olivia Houlihan</h1>
        <p className={styles.subtitle}>Software Engineer</p>
        <p className={styles.lead}>
          I build reliable, user-centered software with a focus on clarity, quality, and
          measurable impact. I enjoy turning ideas into durable, maintainable systems and
          delighting users along the way.
        </p>
      </section>
    </main>
  );
}


