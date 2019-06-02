import React from 'react';

import styles from './Person.module.css';

const Person = ({ profile, user }) => {
  return (
    <div className={styles.person}>
      <div className={styles.imgBG}>
        <img
          src={profile.profilePicture}
          alt={profile.id}
          width="150px"
          height="100px"
        />
      </div>
      <div className={styles.userName}>{user.fullName}</div>
    </div>
  );
};

export default Person;
