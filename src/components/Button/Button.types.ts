type TButton = {
  children: string;
  button_type: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  full: boolean;
};

export default TButton;
