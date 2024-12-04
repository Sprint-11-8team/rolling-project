import Badge from "./ Badge";
import addBtnImg from "../../assets/images/add_btn.svg";
import arrowDownImg from "../../assets/images/arrow_down.svg";
import shareImg from "../../assets/images/share.svg";
import Button from "./Button";

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
