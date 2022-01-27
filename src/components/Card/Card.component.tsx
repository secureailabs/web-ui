import React from 'react';

import type TCard from './Card.types';

import Text from '@components/Text';

const Card: React.FC<TCard> = ({
  children,
  primaryText,
  secondaryText,
  secondaryTextOnClick = () => {},
}) => {
  return (
    <div className="card">
      {primaryText || secondaryText ? (
        <div className="card__top">
          <Text lineHeight={4} fontSize="1.6rem" fontWeight={600}>
            Feeds
          </Text>
          <Text
            lineHeight={4}
            color="primary"
            fontSize="1.2rem"
            fontWeight={500}
          >
            Show all
          </Text>
        </div>
      ) : (
        <></>
      )}
      <div className="card__content">{children}</div>
    </div>
  );
};

export default Card;
