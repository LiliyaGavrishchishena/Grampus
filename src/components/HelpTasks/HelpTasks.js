import React from 'react';
// styles
import styles from './HelpTasks.module.css';

const HelpTasks = () => {
  return (
    <div>
      <button className={styles.button}>
        Help me please somebody with Vue.js
      </button>
      <button className={styles.button}>I need coffee (</button>
      <button className={styles.button}>Help me with task</button>
      <button className={styles.button}>Can somebody teach me HTML</button>
    </div>
  );
};

export default HelpTasks;
