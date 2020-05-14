import React, { useEffect, useState } from 'react';

import styles from './CardFront.module.scss';
import chipImg from '../../../assets/chip.png';

import { useFormState } from '../../../context/form.context';
import { DEFAULT_CARD_LENGTH } from '../../../utils';

const CardFront = () => {
  const formState = useFormState();
  const [logo, setLogo] = useState();
  const fillerNumberArr = new Array(DEFAULT_CARD_LENGTH).fill('#');

  useEffect(() => {
    import(`../../../assets/${formState.cardType}.png`).then((logo) =>
      setLogo(logo.default)
    );
  }, [formState.cardType]);

  return (
    <div
      className={`${styles.front} ${formState.focus === 'cvv' && styles.flip}`}
    >
      <div
        className={
          styles[formState.focus ? `focus-${formState.focus}` : 'focus']
        }
      ></div>
      <div className={styles.content}>
        <div className={styles['front-row-1']}>
          <img src={chipImg} alt="chip" />
          <div className={styles.logo}>
            <img src={logo} alt="Card Logo" />
          </div>
        </div>

        <label htmlFor="number" className={styles['front-row-2']}>
          {[...formState.number, ...fillerNumberArr]
            .slice(0, DEFAULT_CARD_LENGTH)
            .map((num, i) => (
              <span key={i}>{num}</span>
            ))}
        </label>

        <div className={styles['front-row-3']}>
          <label htmlFor="name" className={styles.name}>
            <span>Card Holder</span>
            <span>{formState.name ? formState.name : 'FULL NAME'}</span>
          </label>
          <label htmlFor="expiration" className={styles.expiry}>
            <span>Expires</span>
            <div>
              <span>{formState.expMonth ? formState.expMonth : 'MM'}</span>/
              <span>
                {formState.expYear ? formState.expYear.slice(-2) : 'YY'}
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
