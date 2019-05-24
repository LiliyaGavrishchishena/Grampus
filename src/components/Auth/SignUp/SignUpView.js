import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './SignUp.module.css';

const SignUpView = ({ name, email, password, onChange, onSubmit }) => (
  <div className={styles.auth}>
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.name}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          placeholder="Write your name"
          onChange={onChange}
          required
        />
      </label>
      <label className={styles.email}>
        <input
          className={styles.input}
          type="text"
          name="email"
          value={email}
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
      <button className={styles.button} type="submit">
        Sign Up
      </button>
    </form>
    <p className={styles.text}>
      Have you already created your account?{' '}
      <strong>
        <NavLink className={styles.link} to="/signin">
          Sign In
        </NavLink>
      </strong>
    </p>
  </div>
);

SignUpView.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpView;
