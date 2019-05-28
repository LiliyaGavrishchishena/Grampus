import React from 'react';
import Slogan from '../components/Slogan/Slogan';
import SignInContainer from '../components/Auth/SignIn/SignInContainer';

// styles
import styles from './SignPage.module.css';

const SignInPage = props => {
  return (
    <section className={styles.section}>
      <div className={styles.home}>
        <Slogan />
        <SignInContainer {...props} />
      </div>
    </section>
  );
};

export default SignInPage;
