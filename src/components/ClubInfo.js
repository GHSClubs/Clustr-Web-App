import React from 'react';
import Button from './Button.js';
import styles from './ClubInfo.module.css';

/**
 * Shows information about a club. This was designed according to the wireframe,
 * but it's not used anymore.
 */
class ClubInfo extends React.Component {
  render() {
    const {name, description, joinable, meetingDay, meetingTime} = this.props;
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.name}>{name}</h1>
        {joinable && (
          <Button className={styles.joinBtn}>Join</Button>
        )}
        <p className={styles.description}>{description}</p>
        <div className={styles.feedItem}>
          <h2 className={styles.feedTitle}>Club Meetings</h2>
          <p className={styles.feedField}>Weekly, {meetingDay}</p>
          <p className={styles.feedField}>Time: {meetingTime}</p>
        </div>
      </div>
    );
  }
}

export default ClubInfo;
