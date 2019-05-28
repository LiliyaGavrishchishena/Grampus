import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// styles
import styles from './SignIn.module.css';

const SignInView = ({ username, password, onChange, onSubmit }) => (
  <div className={styles.auth}>
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.email}>
        <input
          className={styles.input}
          type="text"
          name="username"
          value={username}
          placeholder="Enter your email"
          onChange={onChange}
          required
        />
      </label>
      <label className={styles.lock}>
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={onChange}
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Sign In
      </button>
    </form>
    <p className={styles.text}>
      Or you can create account and
      <strong>
        <NavLink className={styles.link} to="/signup">
          Sign Up
        </NavLink>
      </strong>
    </p>
  </div>
);

SignInView.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignInView;
