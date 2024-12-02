import cardImg from "../../assets/images/example_card_img.svg";
const IntroSection = () => {
  return (
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
  );
};

export default IntroSection;
