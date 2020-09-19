import React from 'react';
import styles from './Club.module.css';

function Club({name, description, color}) {
  return (
    <article className={styles.wrapper} style={{backgroundColor: color}}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default Club;
