type TFeed = {
  title: string;
  description: string;
  date: Date;
  onClick?: () => void;
  image?: string;
  Avatar?: React.ReactElement;
};

export default TFeed;
