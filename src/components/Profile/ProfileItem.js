import React from 'react';
import styles from './Profile.module.css';

const ProfilesListView = ({
  data: {
    id,
    profilePicture,
    likes,
    dislikes,
    achievements,
    information,
    skills,
    ratings,
  },
}) => {
  return (
    <div className={styles.item}>
      <img src={profilePicture} alt={id} width="150px" height="100px" />
      <span>Likes -{likes}</span>
      <span>DisLikes -{dislikes}</span>
      <div>Achievements - {achievements}</div>
      <div>Information - {information}</div>
      <div>Skills - {skills}</div>
      <div>Ratings - {ratings}</div>
    </div>
  );
};

export default ProfilesListView;
