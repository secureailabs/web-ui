type TInput = {
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  label?: string;
  placeholder?: string;
  full?: boolean;
};

export default TInput;
