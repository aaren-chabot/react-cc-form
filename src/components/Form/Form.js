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
  const {
    form,
    'card-number': cardNumber,
    name,
    'row-wrap': rowWrap,
    expiration,
    cvv
  } = styles;

  return (
    <div className={form}>
      <form>
        <div className={cardNumber}>
          <label htmlFor="number">Card Number</label>
          <input type="text" name="number" id="number" autoComplete="off" />
        </div>

        <div className={name}>
          <label htmlFor="name">
            Card Name
            <input type="text" name="name" id="name" autoComplete="off" />
          </label>
        </div>

        <div className={rowWrap}>
          <div className={expiration}>
            <label htmlFor="expiration">Expiration Date</label>
            <select name="expiration-month" id="expiration">
              <option selected disabled>
                MONTH
              </option>
              {months.map((month) => (
                <option value={month}>{month}</option>
              ))}
            </select>

            <select name="expiration-year">
              <option selected disabled>
                YEAR
              </option>
              {years.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className={cvv}>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              maxLength="4"
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
