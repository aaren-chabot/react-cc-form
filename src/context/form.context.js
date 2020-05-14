import React, { useState, useContext, createContext, useCallback } from 'react';

const FormStateContext = createContext();
const FormUpdaterContext = createContext();

const initialState = {
  focus: '',
  number: '',
  cardType: '',
  name: '',
  expDay: '',
  expYear: '',
  cvv: ''
};

function FormProvider({ children }) {
  const [state, setState] = useState(initialState);

  return (
    <FormStateContext.Provider value={state}>
      <FormUpdaterContext.Provider value={setState}>
        {children}
      </FormUpdaterContext.Provider>
    </FormStateContext.Provider>
  );
}

function useFormState() {
  const context = useContext(FormStateContext);
  if (context === undefined) {
    throw new Error('useFormState must be used within the FormProvider');
  }
  return context;
}

function useFormUpdater() {
  const setState = useContext(FormUpdaterContext);
  if (typeof setState === undefined) {
    throw new Error('useFormUpdater must be used within a FormProvider');
  }

  const updaters = {
    focus: useCallback((val) => setState((c) => ({ ...c, focus: val })), [
      setState
    ]),
    number: useCallback((val) => setState((c) => ({ ...c, number: val })), [
      setState
    ]),
    cardType: useCallback((val) => setState((c) => ({ ...c, cardType: val })), [
      setState
    ]),
    name: useCallback((val) => setState((c) => ({ ...c, name: val })), [
      setState
    ]),
    expDay: useCallback((val) => setState((c) => ({ ...c, expDay: val })), [
      setState
    ]),
    expYear: useCallback((val) => setState((c) => ({ ...c, expYear: val })), [
      setState
    ]),
    cvv: useCallback((val) => setState((c) => ({ ...c, cvv: val })), [setState])
  };

  return updaters;
}

export { FormProvider, useFormState, useFormUpdater };
