import React from 'react';
import Slogan from '../components/Slogan/Slogan';
// import SignInContainer from '../components/Auth/SignIn/SignInContainer';
import SignUpContainer from '../components/Auth/SignUp/SignUpContainer';
// styles
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.home}>
        <Slogan />
        {/* <SignInContainer /> */}
        <SignUpContainer />
      </div>
    </section>
  );
};

export default MainPage;
