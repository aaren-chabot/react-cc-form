import React from 'react';

import Card from '../Card/Card';
import Form from '../Form/Form';

import styles from './CardForm.module.scss';

const CardForm = () => (
  <div className={styles['card-form']}>
    <Card />
    <Form />
  </div>
);

export default CardForm;
