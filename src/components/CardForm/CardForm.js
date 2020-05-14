import React from 'react';

import Card from '../Card/Card';
import Form from '../Form/Form';

import { FormProvider } from '../../context/form.context';

import styles from './CardForm.module.scss';

const CardForm = () => (
  <div className={styles['card-form']}>
    <FormProvider>
      <Card />
      <Form />
    </FormProvider>
  </div>
);

export default CardForm;
