// src/components/Input/Input.tsx

import React, { FC, ChangeEvent } from 'react';
import { Retool } from '@tryretool/custom-component-support'

import './Input.css';

interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ onChange }) => {
  const { value, setValue } = Retool.useStateString({ name: 'value'});
  const { placeholder, setPlaceholder } = Retool.useStateString({ name: 'placeholder'});
  return (
    <input placeholder={placeholder}
      className="input"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

  /*const [name, _setName] = Retool.useStateString({
    name: 'name'
  })*/