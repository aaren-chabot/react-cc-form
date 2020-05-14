import React from 'react';

import CardFront from './CardFront/CardFront';
import CardBack from './CardBack/CardBack';

import styles from './Card.module.scss';

const Card = () => (
  <div className={styles.card}>
    <CardFront></CardFront>
    <CardBack></CardBack>
  </div>
);

export default Card;
