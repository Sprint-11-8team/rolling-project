import cardImg from "../assets/images/example_card_img.svg";
const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="introduction">
        <div className="intro-container-first">
          <div className="intro-number">Point. 01</div>

          <h2 className="intro-text">
            누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
          </h2>
          <p className="intro-subtext">로그인 없이 자유롭게 만들어요.</p>
        </div>
        <div className="example-card-img-container">
          <img className="example-card-img" src={cardImg}></img>
        </div>
      </div>
      <div className="introduction">
        <h2 className=""></h2>
        <div></div>
      </div>
    </div>
  );
};

export default MainPage;
