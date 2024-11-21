import { ReactNode } from 'react';
import classes from '../../utils/classes';

interface ButtonProps {
  children?: ReactNode;
  addClassName?: string | string[];
  handleClick?: () => void;
  disabled: boolean;
}

function Button({ children, addClassName, handleClick, disabled }: ButtonProps) {
  return (
    <>
      <button type="button" className={classes('common-button', addClassName)} onClick={handleClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
}

export default Button;
