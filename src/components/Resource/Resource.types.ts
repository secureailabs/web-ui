import { IconType } from 'react-icons';

type TResource = {
  Icon: IconType;
  primaryText: string;
  secondaryText?: string;
  buttonText: string;
  buttonOnClick: () => void;
  titleOnClick: () => void;
};

export default TResource;
