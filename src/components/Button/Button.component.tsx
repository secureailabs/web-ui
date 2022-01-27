import React from 'react';

import type TButton from './Button.types';

const Button: React.FC<TButton> = ({ children, type, full }) => {
  return (
    <button className={`button button--${type} ${full ? 'button--full' : ''}`}>
      {children}
    </button>
  );
};

export default Button;
