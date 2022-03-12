type TFeed = {
  title: string;
  description: string;
  date: Date;
  onClick?: () => void;
  image?: string;
  avatar?: string;
  avatar_color?: string;
};

export default TFeed;
