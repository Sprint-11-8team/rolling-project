import cardImg from "../assets/images/example_card_img.svg";

import emojiImg from "../assets/images/emoji_img.png";
import emojiAddImg from "../assets/images/emoji_add_img.png";
const MainPage = () => {
  return (
    <div className="main-page">
      <section className="intro-section">
        <header className="intro-content">
          <div className="intro-point">Point. 01</div>
          <h2 className="intro-title">
            누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
          </h2>
          <p className="intro-description">로그인 없이 자유롭게 만들어요.</p>
        </header>
        <main className="intro-image-container">
          <img className="intro-image" src={cardImg} alt="Example Card" />
        </main>
      </section>

      <section className="intro-section-second">
        <header className="intro-content">
          <div className="intro-point">Point. 02</div>
          <h2 className="intro-title">서로에게 이모지로 감정을 표현해보세요</h2>
          <p className="intro-description">
            롤링 페이퍼에 이모지를 추가할 수 있어요.
          </p>
        </header>
        <main className="intro-main-second">
          <div className="intro-emoji-container">
            <img className="intro-emoji-add" src={emojiAddImg}></img>
            <img className="intro-emoji" src={emojiImg}></img>
          </div>
        </main>
      </section>
    </div>
  );
};

export default MainPage;
