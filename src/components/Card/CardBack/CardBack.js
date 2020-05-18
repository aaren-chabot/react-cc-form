import React, { useEffect, useState } from 'react';

import styles from './CardBack.module.scss';

import { useFormState } from 'context/form.context';

const CardBack = () => {
  const formState = useFormState();
  const [logo, setLogo] = useState();

  useEffect(() => {
    import(`assets/${formState.cardType}.png`).then((logo) =>
      setLogo(logo.default)
    );
  }, [formState.cardType]);

  return (
    <div
      className={`${styles.back} ${formState.focus === 'cvv' && styles.flip}`}
    >
      <div className={styles.band}></div>
      <div className={styles.cvv}>
        <span>CVV</span>
        <div>{formState.cvv}</div>
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="Card Logo" />
      </div>
    </div>
  );
};

export default CardBack;
