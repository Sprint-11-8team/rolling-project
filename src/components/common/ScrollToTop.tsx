import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * <pre>
 * @title Gnb.tsx
 * @desc 최상단올리는 공통컴포넌트
 * </pre>
 *
 * @author 윤예지
 * @since 2024.12.04
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2024.12.04.  윤예지  최초작성
 */

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

export default ScrollToTop;
