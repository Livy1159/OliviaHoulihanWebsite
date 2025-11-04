'use client';

import { useEffect, useState } from 'react';
import styles from './TechAnimation.module.scss';

// Tech symbols that will float in the background
const techSymbols = ['{}', '<>', '[]', '()', '=>', '//', 'const', 'let', 'fn', '{}', '<>', '[]'];

interface FloatingElement {
  id: number;
  symbol: string;
  left: number;
  delay: number;
  duration: number;
}

export default function TechAnimation() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate floating elements with random positions and timings
    const newElements: FloatingElement[] = techSymbols.map((symbol, index) => ({
      id: index,
      symbol,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      delay: Math.random() * 5, // Random delay (0-5s)
      duration: 15 + Math.random() * 10, // Random duration (15-25s)
    }));

    setElements(newElements);
  }, []);

  return (
    <div className={styles.animationContainer}>
      {elements.map((element) => (
        <div
          key={element.id}
          className={styles.floatingElement}
          style={{
            left: `${element.left}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          {element.symbol}
        </div>
      ))}
    </div>
  );
}

