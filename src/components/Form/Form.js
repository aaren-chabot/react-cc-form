import React from 'react';

import { useFormState, useFormUpdater } from '../../context/form.context';
import { years, months } from './Form.constants';
import {
  CARD_RANGES,
  DEFAULT_CARD_LENGTH,
  CARD_FORMAT,
  CVV_LENGTH,
  CVV_FORMAT
} from '../../utils';

import styles from './Form.module.scss';

const CardForm = () => {
  const state = useFormState();
  const updater = useFormUpdater().setState;
  const resetForm = useFormUpdater().reset;

  const handleChange = (e) => {
    let property = e.target.name;
    let cardType = 'visa';
    const value = e.target.value;

    if (property === 'expiration') {
      const expirationType = e.target.dataset.type;
      property = expirationType === 'month' ? 'expMonth' : 'expYear';
    }

    if (property === 'number') {
      if (!CARD_FORMAT.test(value)) {
        return;
      }
      if (CARD_RANGES.mastercard.includes(+value.slice(0, 2))) {
        cardType = 'mastercard';
      }
    }

    if (property === 'cvv') {
      if (!CVV_FORMAT.test(value)) {
        return;
      }
    }

    updater({ ...state, [property]: value, cardType });
  };

  const handleFocus = (e) => {
    updater({ ...state, focus: e.target.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('state', state);
    resetForm();
  };

  return (
    <div className={styles.form}>
      <form>
        <div className={styles['card-number']}>
          <label htmlFor="number">Card Number</label>
          <input
            type="text"
            value={state.number}
            onChange={handleChange}
            name="number"
            id="number"
            maxLength={DEFAULT_CARD_LENGTH}
            pattern={CARD_FORMAT}
            onFocus={handleFocus}
            autoComplete="off"
          />
        </div>

        <div className={styles.name}>
          <label htmlFor="name">
            Card Name
            <input
              type="text"
              value={state.name}
              onChange={handleChange}
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
              data-type="month"
              id="expiration"
              value={state.expMonth}
              onChange={handleChange}
              onFocus={handleFocus}
            >
              <option value="" disabled>
                MONTH
              </option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              name="expiration"
              data-type="year"
              value={state.expYear}
              onChange={handleChange}
              onFocus={handleFocus}
            >
              <option value="" disabled>
                YEAR
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.cvv}>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              value={state.cvv}
              onChange={handleChange}
              name="cvv"
              id="cvv"
              pattern={CVV_FORMAT}
              maxLength={CVV_LENGTH}
              onFocus={handleFocus}
              autoComplete="off"
            />
          </div>
        </div>

        <button
          type="submit"
          value="submit form"
          onSubmit={handleSubmit}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CardForm;
