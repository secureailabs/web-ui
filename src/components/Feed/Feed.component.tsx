import React from 'react';

import FeedItem from './FeedItem';
import Card from '@components/Card';
import TFeed from './Feed.types';

const Feed: React.FC<TFeed> = ({ feed, title, secondary, containerHeight }) => {
  return (
    <Card
      primaryText={title}
      secondaryText={secondary}
      containerHeight={containerHeight}
    >
      <div className="feed">
        {feed.map(({ title: feed_title, description, image, date }, index) => (
          <FeedItem
            title={feed_title}
            description={description}
            image={image}
            date={date}
            key={index}
          />
        ))}
      </div>
    </Card>
  );
};

export default Feed;
