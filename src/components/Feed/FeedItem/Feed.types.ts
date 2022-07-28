import { ReactElement } from 'react';

type TFeed = {
  title: string | ReactElement;
  description: string | ReactElement;
  date: Date;
  onClick?: () => void;
  image?: string;
  avatar?: string;
  avatar_color?: string;
};

export default TFeed;
