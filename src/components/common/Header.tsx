import { Link } from 'react-router-dom';
import icon from '../../assets/icons/homeIcon.svg';
import { useLocation } from 'react-router-dom';

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

const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className='header'>
      <div className='header-nav'>
        <a href='/'>
          <img className='header-icon' src={icon}></img>
        </a>
        {(location.pathname === '/' || location.pathname === '/list') && (
          // 경로가 '/' 일때만 렌더링
          <button className='header-rolling-button'>
            <Link to='/post'>
              <div className='rolling-paper-text'>롤링페이퍼 만들기</div>
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
