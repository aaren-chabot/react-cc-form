import React from 'react';

import styles from './CardFront.module.scss';
import chipImg from '../../../assets/chip.png';
import visaImg from '../../../assets/visa.png';

const CardFront = () => {
  const {
    front,
    focus,
    'focus-name': focusName,
    'focus-number': focusNumber,
    'focus-expiry': focusExpiry,
    content,
    'front-row-1': frontRow1,
    logo,
    'front-row-2': frontRow2,
    'front-row-3': frontRow3,
    name,
    expiry
  } = styles;

  return (
    <div className={front}>
      <div className={focus}></div>
      <div className={content}>
        <div className={frontRow1}>
          <img src={chipImg} alt="chip" />
          <div className={logo}>
            <img src={visaImg} alt="" />
          </div>
        </div>

        <label for="number" className={frontRow2}>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
          <span>#</span>
        </label>

        <div className={frontRow3}>
          <label htmlFor="name" className={name}>
            <span>Card Holder</span>
            <span>FULL NAME</span>
          </label>
          <label htmlFor="expiration" className={expiry}>
            <span>Expires</span>
            <div>
              <span>MM</span>/<span>YY</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
