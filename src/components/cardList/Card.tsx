import Button from "../common/Button";
import Profile from "./Profile";
import Emoji from "../../assets/icons/emoji.svg";

const Card = () => {
  return (
    <div className="card-content">
      <div className="card">
        <div className="card__header">
          <div className="card__header-text">To. Sowon</div>
          <div className="card__header-profile-list">
            <Profile />
            <Profile />
            <Profile />
            <div className="count-circle">
              <span>+27</span>
            </div>
          </div>
          <div className="card__header-content">
            <span className="bold">30</span>명이 작성했어요!
          </div>
        </div>
        <div className="card__footer">
          <div className="card__footer-button-area">
            <Button disabled={false} addClassName={"badge-button"}>
              <div className="card__footer-button">
                <img src={Emoji} alt="이모지" className="img"></img>
                <div className="count">20</div>
              </div>
            </Button>
            <Button disabled={false} addClassName={"badge-button"}>
              <div className="card__footer-button">
                <img src={Emoji} alt="이모지" className="img"></img>
                <div className="count">20</div>
              </div>
            </Button>
            <Button disabled={false} addClassName={"badge-button"}>
              <div className="card__footer-button">
                <img src={Emoji} alt="이모지" className="img"></img>
                <div className="count">20</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
