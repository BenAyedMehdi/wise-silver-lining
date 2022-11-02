import { useState } from 'react';

export const useInput = (initialValue, required = false, sensitive = false, validation = { regex: /^$/, errorMessage: '' }) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    var passrgx = validation.regex;

    const handleChange = (event) => {
        setError(false);
        setValue(event.target.value);
        if (sensitive) {
            if (event.target.value.match(passrgx) || event.target.value === '') {
                setError(false);
            } else {
                setErrorMessage(validation.errorMessage);
                setError(true);
            }
        }
    };

    return required
        ? {
              value,
              onChange: handleChange,
              error: error,
              helperText: error ? errorMessage : '',
              required
          }
        : {
              value,
              onChange: handleChange
          };
};
