import React from 'react';

import Heading from '@components/Heading';

import type TStandardContent from './StandardContent.types';
import Margin from '@components/Margin';

const StandardContent: React.FC<TStandardContent> = ({ title, children }) => {
  return (
    <div className="standard-content">
      <Heading size="h1">{title}</Heading>
      <Margin size={8} />
      {children}
    </div>
  );
};

export default StandardContent;
