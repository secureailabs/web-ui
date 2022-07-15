import React from 'react';

import type TResource from './Resource.types';

import Text from '@components/Text';
import Button from '@components/Button';

const Resource: React.FC<TResource> = ({
  Icon,
  primaryText,
  secondaryText,
  buttonText,
  onClick,
}) => {
  return (
    <div className="resource">
      <Icon className="resource__icon" />
      <Text
        className="resource__primary"
        fontStyle="normal"
        lineHeight={3}
        textAlign="center"
        fontWeight={600}
        fontSize="16px"
      >
        {primaryText}
      </Text>
      <Text
        className="resource__secondary"
        fontStyle="normal"
        lineHeight={5}
        fontWeight={400}
        textAlign="center"
        fontSize="12px"
      >
        {secondaryText}
      </Text>
      <div className="resource__button">
        <Button button_type="secondary" full={false} onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Resource;
