import Button from "./Button";
import Emoji from "../../assets/icons/emoji.svg";

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
