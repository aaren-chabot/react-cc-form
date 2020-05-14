import React from 'react';

import styles from './CardFront.module.scss';
import chipImg from '../../../assets/chip.png';
import visaImg from '../../../assets/visa.png';

import { useFormState } from '../../../context/form.context';

const CardFront = () => {
  const focusState = useFormState().focus;

  return (
    <div className={styles.front}>
      <div
        className={styles[focusState ? `focus-${focusState}` : 'focus']}
      ></div>
      <div className={styles.content}>
        <div className={styles['front-row-1']}>
          <img src={chipImg} alt="chip" />
          <div className={styles.logo}>
            <img src={visaImg} alt="" />
          </div>
        </div>

        <label htmlFor="number" className={styles['front-row-2']}>
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

        <div className={styles['front-row-3']}>
          <label htmlFor="name" className={styles.name}>
            <span>Card Holder</span>
            <span>FULL NAME</span>
          </label>
          <label htmlFor="expiration" className={styles.expiry}>
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
