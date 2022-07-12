import React from 'react';

import type TButton from './Button.types';

const Button: React.FC<TButton> = ({
  children,
  type,
  full,
  height = '5rem',
  button_type,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`button button--${button_type} ${full ? 'button--full' : ''}`}
      onClick={onClick}
      style={{
        height: height,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
