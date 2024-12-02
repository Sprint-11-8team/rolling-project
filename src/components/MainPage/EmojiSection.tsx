import emojiImg from "../../assets/images/emoji_img.png";
import emojiAddImg from "../../assets/images/emoji_add_img.png";
const EmojiSection = () => {
  return (
    <section className="intro-emoji-section">
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
  );
};

export default EmojiSection;
