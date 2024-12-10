import { ReactNode } from 'react';
import Profile from '../common/Profile';

interface ProfileListProps {
  children?: ReactNode;
}

const ProfileList = ({ children }: ProfileListProps) => {
  return (
    <div className='card__header-profile'>
      <div className='card__header-profile-list'>
        <Profile />
        <Profile />
        <Profile />
        <div className='count-circle'>
          <span>+27</span>
        </div>
      </div>
      <div className='card__header-profile-text'>23명이 작성했어요!</div>
    </div>
  );
};

export default ProfileList;
