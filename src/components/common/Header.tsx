import icon from "../../assets/icons/homeIcon.svg";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="header">
      <div className="header-nav">
        <a href="/">
          <img className="header-icon" src={icon}></img>
        </a>
        {location.pathname === "/" && ( // 경로가 '/' 일때만 렌더링
          <button className="header-rolling-button">
            <div className="rolling-paper-text">롤링 페이퍼 만들기</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
