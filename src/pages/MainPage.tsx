import ButtonSection from "../components/MainPage/ButtonSection";
import EmojiSection from "../components/MainPage/EmojiSection";
import IntroSection from "../components/MainPage/IntroSection";
const MainPage = () => {
  return (
    <div className="main-page">
      <IntroSection />
      <EmojiSection />
      <ButtonSection />
    </div>
  );
};

export default MainPage;
