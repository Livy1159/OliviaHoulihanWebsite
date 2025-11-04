'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        OH
      </Link>
      <div className={styles.links}>
        <Link href="/" className={pathname === '/' ? styles.active : ''}>
          Home
        </Link>
        <Link href="/resume" className={pathname === '/resume' ? styles.active : ''}>
          Resume
        </Link>
        <Link href="/about" className={pathname === '/about' ? styles.active : ''}>
          How this was built
        </Link>
      </div>
    </nav>
  );
}

