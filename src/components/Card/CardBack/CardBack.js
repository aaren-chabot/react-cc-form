import React from 'react';

import styles from './CardBack.module.scss';
import cardImg from '../../../assets/visa.png';

const CardBack = () => {
  const { back, band, cvv, logo } = styles;
  return (
    <div className={back}>
      <div className={band}></div>
      <div className={cvv}>
        <span>CVV</span>
        <div></div>
      </div>
      <div className={logo}>
        <img src={cardImg} alt="" />
      </div>
    </div>
  );
};

export default CardBack;
