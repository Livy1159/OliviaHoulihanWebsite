'use client';

import { useEffect, useState } from 'react';
import styles from './TechAnimation.module.scss';

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
    const newElements: FloatingElement[] = techSymbols.map((symbol, index) => ({
      id: index,
      symbol,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
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

