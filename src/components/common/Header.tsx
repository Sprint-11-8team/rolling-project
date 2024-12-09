import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import icon from "../../assets/icons/homeIcon.svg";
<<<<<<< HEAD
=======
import { useLocation } from "react-router-dom";

/*
 * <pre>
 * @title Header.tsx
 * @desc 하단 버튼 공통컴포넌트
 * </pre>
 *
 * @author 임광조
 * @since 2024.12.02
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2024.12.02.  임광조  최초작성
 *  2024.12.04.  윤예지  공통으로이동, /list 경로추가
 */
>>>>>>> 1f3d04514b78fb06327e75e6cc59c5668a8fdad9

const Header = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 768;
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
<<<<<<< HEAD
        {location.pathname === "/" && (
=======
        {(location.pathname === "/" || location.pathname === "/list") && (
          // 경로가 '/' 일때만 렌더링
>>>>>>> 1f3d04514b78fb06327e75e6cc59c5668a8fdad9
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
