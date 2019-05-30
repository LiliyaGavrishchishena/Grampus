import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Profile.module.css';

const ProfilesListView = ({ items = [] }) => (
  <>
    <ul className={styles.list}>
      {items.map(({ id }) => (
        <li key={id} className={styles.item}>
          dddd
        </li>
      ))}
    </ul>
  </>
);

export default withRouter(ProfilesListView);
