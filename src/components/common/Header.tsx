import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import icon from "../../assets/icons/homeIcon.svg";

const Header = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 768;
      const isAllowedPath =
        location.pathname === "/" || location.pathname === "/list";
      setIsVisible(!isSmallScreen || isAllowedPath);
    };

    // 초기 실행 및 이벤트 리스너 등록
    handleResize();
    window.addEventListener("resize", handleResize);

    // 이벤트 리스너 해제
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]);

  if (!isVisible) return null; // 조건에 맞지 않으면 헤더 숨기기

  return (
    <div className="header">
      <div className="header-nav">
        <a href="/">
          <img className="header-icon" src={icon} alt="Home Icon" />
        </a>
        {location.pathname === "/" && (
          <button className="header-rolling-button">
            <Link to="/post">
              <div className="rolling-paper-text">롤링페이퍼 만들기</div>
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
