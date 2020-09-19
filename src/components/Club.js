import React from 'react';
import styles from './Club.module.css';

function Club({name, tags = [], color}) {
  return (
    <article className={styles.wrapper} style={{backgroundColor: color}}>
      <h2 className={styles.name}>{name}</h2>
      <ul className={styles.tags}>
        {tags.map(tag => <li className={styles.tag}>{tag}</li>)}
      </ul>
    </article>
  );
}

export default Club;
