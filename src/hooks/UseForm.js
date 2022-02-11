import React, { useState } from 'react';

const UseForm = (type) => {
  const [value, setValue] = useState('');
  const [erro, setErro] = useState(null);
  const types = {
    email: {
      regex:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Preencha o campo com um email válido.',
    },
    password: {
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      message:
        'a senha precisa conter:  1 letra maiuscula, 1 letra minuscula, 1 numero minuscul e no minimo 8 digitos. ',
    },
    number: {
      regex: /^\d+$/,
      message: 'Preencha o campo apenas com numeros.',
    },
  };
  function onChange({ target }) {
    setValue(target.value);
    if (erro) validate(target.value);
  }
  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setErro('Preencha o campo');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    erro,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
export default UseForm;
