import { IconType } from 'react-icons';

type TResource = {
  Icon: IconType;
  primaryText: string;
  secondaryText?: string;
  buttonText: string;
  onClick: () => void;
};

export default TResource;
