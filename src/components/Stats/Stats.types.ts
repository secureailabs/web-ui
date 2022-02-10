import type TStat from '@components/Stat/Stat.types';

type TFeed = {
  stats: TStat[];
  title: string;
  secondary?: string;
  containerHeight?: boolean;
  widthMaxContent?: boolean;
};

export default TFeed;
