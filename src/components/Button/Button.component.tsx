import React from 'react';

import type TButton from './Button.types';

const Button: React.FC<TButton> = ({ children, type, full, button_type }) => {
  return (
    <button
      type={type}
      className={`button button--${button_type} ${full ? 'button--full' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
