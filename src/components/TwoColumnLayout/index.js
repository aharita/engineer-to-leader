import React from 'react';
import styles from './styles.module.css';

export default function TwoColumnLayout({left, right}) {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        {left}
      </div>
      <div className={styles.rightColumn}>
        {right}
      </div>
    </div>
  );
}
