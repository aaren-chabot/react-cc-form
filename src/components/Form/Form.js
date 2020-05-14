import React from 'react';

import styles from './Form.module.scss';

const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12'
];
const years = [
  2020,
  2021,
  2022,
  2023,
  2024,
  2025,
  2026,
  2027,
  2028,
  2029,
  2030,
  2031
];

const CardForm = () => {
  const handleChange = () => {
    console.log('form change');
  };

  const handleFocus = (e) => {
    console.log('focus', e.target.name);
  };

  return (
    <div className={styles.form}>
      <form>
        <div className={styles['card-number']}>
          <label htmlFor="number">Card Number</label>
          <input
            type="text"
            name="number"
            id="number"
            onFocus={handleFocus}
            autoComplete="off"
          />
        </div>

        <div className={styles.name}>
          <label htmlFor="name">
            Card Name
            <input
              type="text"
              name="name"
              id="name"
              onFocus={handleFocus}
              autoComplete="off"
            />
          </label>
        </div>

        <div className={styles['row-wrap']}>
          <div className={styles.expiration}>
            <label htmlFor="expiration">Expiration Date</label>
            <select
              name="expiration"
              id="expiration"
              value
              onChange={handleChange}
              onFocus={handleFocus}
            >
              <option value disabled>
                MONTH
              </option>
              {months.map((month) => (
                <option value={month}>{month}</option>
              ))}
            </select>

            <select
              name="expiration"
              onFocus={handleFocus}
              value
              onChange={handleChange}
            >
              <option value disabled>
                YEAR
              </option>
              {years.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className={styles.cvv}>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              maxLength="4"
              onFocus={handleFocus}
              autoComplete="off"
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CardForm;
