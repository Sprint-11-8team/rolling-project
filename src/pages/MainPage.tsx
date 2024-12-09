import ButtonSection from "../components/common/ButtonSection";
import EmojiSection from "../components/MainPage/EmojiSection";
import IntroSection from "../components/MainPage/IntroSection";
const MainPage = () => {
  return (
    <div className="main-page-container">
      <IntroSection />
      <EmojiSection />
      <ButtonSection
        linkTo="/list"
        content="구경해보기"
        addClassName="viewMoreButton"
      />
    </div>
  );
};

export default MainPage;
