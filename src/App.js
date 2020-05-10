import React from 'react';

import Card from './components/Card/Card';
import CardForm from './components/CardForm/CardForm';

import styles from './App.scss';

function App() {
  return (
    <div className={styles.app}>
      <Card></Card>
      <CardForm></CardForm>
    </div>
  );
}

export default App;
