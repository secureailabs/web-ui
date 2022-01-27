type TModal = {
  title: string;
  description: string;
  children: React.ReactElement;
  close(): void;
};

export default TModal;
