import React, { useState, useContext, createContext } from 'react';

const FormStateContext = createContext();
const FormUpdaterContext = createContext();

const initialState = {
  focus: '',
  number: '',
  cardType: 'visa',
  name: '',
  expMonth: '',
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

  const reset = () => setState(() => initialState, [setState]);
  return { setState, reset };
}

export { FormProvider, useFormState, useFormUpdater };
