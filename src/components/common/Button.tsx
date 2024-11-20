import { ReactNode } from 'react';
import classes from '../../utils/classes';

interface ButtonProps {
  children?: ReactNode;
  name?: string | string[];
  handleClick?: () => void;
  disabled: boolean;
}

function Button({ children, name, handleClick, disabled }: ButtonProps) {
  return (
    <>
      <button type="button" className={classes('common-button', name)} onClick={handleClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
}

export default Button;
