import React from 'react';

import type TStat from './Stat.types';

import Text from '@components/Text';

import HighlightedValue from '@components/HighlightedValue';
import Margin from '@components/Margin';

const Stat: React.FC<TStat> = ({ title, value, Icon }) => {
  return (
    <div className="stat">
      <Text fontWeight={600} fontSize="12px">
        {title}
      </Text>
      <Margin size={3} />
      <Icon className="stat__icon" />
      <Margin size={3} />
      <HighlightedValue>{value}</HighlightedValue>
    </div>
  );
};

export default Stat;
