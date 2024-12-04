import Badge from "./Badge";
import addBtnImg from "../../assets/images/add_btn.svg";
import arrowDownImg from "../../assets/images/arrow_down.svg";
import shareImg from "../../assets/images/share.svg";
import Button from "./Button";

/*
 * <pre>
 * @title SubHeader.tsx
 * @desc 서브헤더 컴포넌트
 * </pre>
 *
 * @author 윤예지
 * @since 2024.12.04
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2024.12.04.  윤예지  최초작성
 */

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="sub-header-text">To. Ashley Kim</div>
      <div className="sub-header-right">
        <div className="emoji-area">
          <div className="badge-area">
            <Badge />
            <Badge />
            <Badge />
          </div>
          <Button disabled={false} addClassName={"header-btn"}>
            <img className="arrow" src={arrowDownImg}></img>
          </Button>
        </div>
        <div className="button-area">
          <Button disabled={false} addClassName={"button-image"}>
            <img className="arrow" src={shareImg}></img>
          </Button>
          <div className="border-line"></div>
          <Button disabled={false} addClassName={"button-image"}>
            <img className="arrow" src={addBtnImg}></img>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
