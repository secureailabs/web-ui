import { ReactElement } from 'react';

type TCard = {
  primaryText: string;
  secondaryText?: string;
  secondaryTextOnClick?(): void;
  children?: ReactElement;
  containerHeight?: boolean;
  widthMaxContent?: boolean;
};

export default TCard;
