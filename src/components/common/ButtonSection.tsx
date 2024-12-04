import { Link } from "react-router-dom";
import Button from "./Button";

/*
 * <pre>
 * @title ButtonSection.tsx
 * @desc 하단 버튼 공통컴포넌트
 * </pre>
 *
 * @author 임광조
 * @since 2024.12.02
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2024.12.02.  임광조  최초작성
 *  2024.12.04.  윤예지  props 추가
 */

interface ButtonSectionProps {
  content: string; // 버튼 텍스트
  addClassName?: string; // 추가 클래스
  linkTo: string; // 링크 URL (항상 있어야 함)
  disabled?: boolean; // 버튼 비활성화 여부
}

const ButtonSection = ({
  content,
  addClassName = "",
  linkTo,
  disabled = false,
}: ButtonSectionProps) => {
  return (
    <section className="button-section">
      <Link to={linkTo}>
        <Button addClassName={addClassName} disabled={disabled}>
          {content}
        </Button>
      </Link>
    </section>
  );
};

export default ButtonSection;
