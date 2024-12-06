import { ReactNode } from 'react';
import classes from '../../utils/classes';

interface ButtonProps {
  children?: ReactNode;
  addClassName?: string | string[];
  handleClick?: () => void;
  disabled: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

function Button({ children, addClassName, handleClick, disabled, type = 'button' }: ButtonProps) {
  return (
    <>
      <button type={type} className={classes('common-button', addClassName)} onClick={handleClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
}

export default Button;
