import Profile from "./Profile";

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
          </div>
          <div className="card__header-content">
            <span className="bold">30</span>명이 작성했어요!
          </div>
        </div>
        <div className="card__line"></div>
        <div className="card__footer"></div>
      </div>
    </div>
  );
};

export default Card;
