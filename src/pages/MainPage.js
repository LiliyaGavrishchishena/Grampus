import React from 'react';
import Slogan from '../components/Slogan/Slogan';
import Auth from '../components/Auth/Auth';
// styles
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.home}>
        <Slogan />
        <Auth />
      </div>
    </section>
  );
};

export default MainPage;
