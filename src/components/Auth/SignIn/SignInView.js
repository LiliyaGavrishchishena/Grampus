import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './SignIn.module.css';

const SignInView = ({ email, password, onChange, onSubmit }) => (
  <div className={styles.auth}>
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={onChange}
        required
      />
      <input
        className={styles.input}
        type="password"
        name="password"
        value={password}
        placeholder="Enter your password"
        onChange={onChange}
        required
      />
      <button type="submit" className={styles.button}>
        Sign In
      </button>
    </form>
  </div>
);

SignInView.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignInView;
