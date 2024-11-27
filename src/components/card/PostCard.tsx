import Profile from '../common/Profile';

const PostCard = () => {
  return (
    <>
      <div className="card-container">
        <div className="card-container-header">
          <div className="card-container-header-content">
            <Profile />
            <div className="writer-content">
              <div className="writer-content-title">
                <div className="writer-content-title-from">From.</div>
                <div className="writer-content-title-name">김동훈</div>
              </div>
              <div className="writer-content-label">
                <div className="writer-content-label-sort">가족</div>
              </div>
            </div>
          </div>
          <hr className="card-container-header-border" />
        </div>
        <div className="card-container-body">
          <div className="card-container-body-message">코로나가 또 다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!</div>
          <div className="card-container-body-writen-date">2024.07.08</div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
