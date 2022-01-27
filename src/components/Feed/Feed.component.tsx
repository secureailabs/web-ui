import React from 'react';

import FeedItem from './FeedItem';
import Card from '@components/Card';
import TFeed from './Feed.types';

const Feed: React.FC<TFeed> = ({ feed }) => {
  return (
    <Card primaryText="Feeds" secondaryText="Show all">
      <div className="feed">
        {feed.map(({ title, description, image, date }, index) => (
          <FeedItem
            title={title}
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
