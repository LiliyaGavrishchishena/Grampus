import React from 'react';

import styles from './Achives.module.css';
import MainRow from './MainRow';

const Achives = () => {
  return (
    <div className={styles.achives}>
      <h3 className={styles.title}>Achievements</h3>
      <MainRow />
    </div>
  );
};

export default Achives;
