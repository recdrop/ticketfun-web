export type DialogProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
  update?: (param: string | any) => void;
};
