import React from 'react';

import Text from '@components/Text';

import type TFeed from './Feed.types';

import { Avatar } from 'react-profile-avatar';
import 'react-profile-avatar/dist/index.css';

const FeedItem: React.FC<TFeed> = ({
  image,
  title,
  description,
  date,
  onClick,
  avatar,
  avatar_color,
}) => {
  return (
    <div className="feed-item" onClick={onClick}>
      {avatar ? (
        <div className="feed-item__image">
          <Avatar name={avatar} colour={avatar_color} />
        </div>
      ) : (
        <></>
      )}
      {image ? <img className="feed-item__image" src={image} /> : <></>}

      <div className="feed-item__content">
        <Text fontSize="12px" fontWeight={500}>
          {title}
        </Text>
        <Text color="blackish" fontSize="12px" fontWeight={400}>
          {description}
        </Text>
      </div>
      <Text
        className="feed-item__date"
        color="grey"
        fontSize="12px"
        fontWeight={500}
      >
        {date}
      </Text>
    </div>
  );
};

export default FeedItem;
