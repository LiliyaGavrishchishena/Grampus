import React from 'react';
import Slogan from '../components/Slogan/Slogan';
import SignUpContainer from '../components/Auth/SignUp/SignUpContainer';

// styles
import styles from './SignPage.module.css';

const SignInPage = props => {
  return (
    <section className={styles.section}>
      <div className={styles.home}>
        <Slogan />
        <SignUpContainer {...props} />
      </div>
    </section>
  );
};

export default SignInPage;
