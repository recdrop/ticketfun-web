export type DialogProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
  updateCity?: (city: string) => void;
};
