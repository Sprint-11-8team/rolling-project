import Profile from '../common/Profile';
import Badge from '../common/Badge';
import { Link } from 'react-router-dom';

const Card = ({}) => {
  return (
    <Link to='/post/1'>
      <div className='card-content'>
        <div className='card'>
          <div className='card__header'>
            <div className='card__header-text'>To. Sowon</div>
            <div className='card__header-profile-list'>
              <Profile />
              <Profile />
              <Profile />
              <div className='count-circle'>
                <span>+27</span>
              </div>
            </div>
            <div className='card__header-content'>
              <span className='bold'>30</span>명이 작성했어요!
            </div>
          </div>
          <div className='card__footer'>
            <div className='card__footer-button-area'>
              <Badge />
              <Badge />
              <Badge />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
