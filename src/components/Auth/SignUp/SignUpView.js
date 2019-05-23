import React from 'react';

import styles from './SignUp.module.css';

const SignUpView = ({ name, email, password, onChange, onSubmit }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <input
      className={styles.input}
      type="text"
      name="name"
      value={name}
      placeholder="Write your name"
      onChange={onChange}
      required
    />
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
    <button className={styles.button} type="submit">
      Sign Up
    </button>
  </form>
);

export default SignUpView;
