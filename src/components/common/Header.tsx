import icon from "../../assets/icons/homeIcon.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header-nav">
        <a href="/">
          <img className="header-icon" src={icon}></img>
        </a>
        <button className="header-rolling-button">롤링 페이퍼 만들기</button>
      </div>
    </div>
  );
};

export default Header;
