import React from 'react';
import styles from './$id.css';

export default ({match}) => {
  return (
    <div>
      <h1 className={styles.title}>Page users/$id</h1>
      {match.params.id}
    </div>
  );
}
