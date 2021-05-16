import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input: React.FC<IInput> = ({ placeholder, onChange }) => {
  return (
    <Container>
      <input placeholder={placeholder} onChange={onChange} />
    </Container>
  );
};

export default Input;
