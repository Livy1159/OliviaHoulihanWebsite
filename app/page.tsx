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
        <div className={styles.lead}>
          <p>Hello! I'm a Software Engineer based in sunny Austin, Texas, living life with my husband and our dog, Rebel.</p>

          <p>My passion for coding ignited in 2017 at Dev Bootcamp, where I started with Ruby on Rails and discovered the power of collaborative learning. This foundation quickly led me to an internship at XO Group Inc. (The Knot Worldwide).</p>

          <p>During my tenure at The Knot Worldwide, I progressed rapidly, being promoted first to Associate Software Engineer and then to Software Engineer. I immersed myself in Agile environments and gained hands-on experience across various critical teams like Core Services and the Couple's Marketplace. I primarily worked with Javascript, Typescript, and React, successfully bringing large-scale features to production.</p>

          <p>I thrive on continuous learning and am excited to bring my dedication, experience, and collaborative spirit to my next role.</p>
          
          <p>Let's build something great together!</p>
        </div>
      </section>
    </main>
  );
}


