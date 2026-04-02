import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>CSS Modules Card</h2>
      <p>This component uses CSS Modules for scoped styling.</p>
    </div>
  );
};

export default Card;
