import React from 'react';
import Slogan from '../components/Slogan/Slogan';
import SignInView from '../components/Auth/SignIn/SignInView';
// styles
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.home}>
        <Slogan />
        <SignInView />
      </div>
    </section>
  );
};

export default MainPage;
