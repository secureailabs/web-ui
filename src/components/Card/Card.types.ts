import { ReactElement } from 'react';

type TCard = {
  primaryText: string;
  secondaryText: string;
  secondaryTextOnClick?(): void;
  children: ReactElement;
};

export default TCard;
