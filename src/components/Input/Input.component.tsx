import React from 'react';

import Text from '@components/Text';

import type TInput from './Input.types';

const Input: React.FC<TInput> = ({ label, placeholder, full, onChange }) => {
  return (
    <div className={`input ${full ? 'input--full' : ''}`}>
      {label ? (
        <Text fontWeight={500} fontSize="14px" lineHeight={5}>
          {label}
        </Text>
      ) : (
        <></>
      )}
      <input placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default Input;
