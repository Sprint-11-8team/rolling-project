import { ReactNode } from 'react';
import classes from '../../utils/classes';

/*
 * <pre>
 * @title Button.tsx
 * @desc Button 공통컴포넌트
 * </pre>
 *
 * @author 김진희
 * @since 2024.11.24
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2024.11.24.  김진희  최초작성
 *  2024.12.09.  윤예지  버튼속성 추가
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  addClassName?: string | string[];
  handleClick?: () => void;
  disabled: boolean;
}

const Button = ({
  children,
  addClassName,
  handleClick,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classes('common-button', addClassName)}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
