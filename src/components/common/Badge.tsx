import Button from "./Button";
import Emoji from "../../assets/icons/emoji.svg";

/*
 * <pre>
 * @title Badge.tsx
 * @desc Badge 공통컴포넌트
 * </pre>
 *
 * @author 윤예지
 * @since 2024.12.02
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2024.12.02.  윤예지  최초작성
 */

const Badge = () => {
  return (
    <Button disabled={false} addClassName={"badge-button"}>
      <div className="footer-button">
        <img src={Emoji} alt="이모지" className="img"></img>
        <div className="count">20</div>
      </div>
    </Button>
  );
};

export default Badge;
