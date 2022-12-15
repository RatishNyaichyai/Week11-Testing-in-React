import { ReactElement } from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps): ReactElement => {
  return <button onClick={onClick} data-testid="button">{label}</button>;
};

export default Button;
