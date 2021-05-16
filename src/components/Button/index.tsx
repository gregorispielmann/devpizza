import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  onClick,
  color,
  disabled = false,
  children,
}) => {
  return (
    <Container $color={color} onClick={onClick} $disabled={disabled}>
      {children}
    </Container>
  );
};

export default Button;
