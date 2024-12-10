import Badge from './Badge';
import addBtnImg from '../../assets/images/add_btn.svg';
import arrowDownImg from '../../assets/images/arrow_down.svg';
import shareImg from '../../assets/images/share.svg';
import Button from './Button';
import { useState } from 'react';
import Picker, { EmojiClickData } from 'emoji-picker-react';
import ProfileList from '../card/ProfileList';
import useResize from '../../hooks/useResize';

/*
 * <pre>
 * @title SubHeader.tsx
 * @desc 서브헤더 컴포넌트
 * </pre>
 *
 * @author 윤예지
 * @since 2024.12.04
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2024.12.04.  윤예지  최초작성
 */

const SubHeader = () => {
  const [inputStr, setInputStr] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const screenType = useResize();

  const onEmojiClick = (event: MouseEvent, emojiObject: EmojiClickData) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div className='sub-header'>
      <div className='sub-header-nav'>
        <div className='sub-header-text'>To. Ashley Kim</div>
        <div className='sub-header-right'>
          {screenType === 'desktop' && (
            <div className='profile-area'>
              <ProfileList></ProfileList>
              <div className='border-line'></div>
            </div>
          )}
          <div className='emoji-area'>
            <div className='badge-area'>
              <Badge />
              <Badge />
              <Badge />
            </div>
            <Button disabled={false} addClassName={'header-btn'}>
              <img className='arrow' src={arrowDownImg}></img>
            </Button>
          </div>
          <div className='button-area'>
            <Button
              disabled={false}
              addClassName={'button-image'}
              onClick={() => setShowPicker((val) => !val)}
            >
              <img className='arrow' src={addBtnImg}></img>
            </Button>
            <div></div>
            {showPicker && (
              <div className='picker-area'>
                <Picker
                  width={'100%'}
                  // onEmojiClick={onEmojiClick}
                />
              </div>
            )}
            <div className='border-line'></div>
            <Button disabled={false} addClassName={'button-image no-after'}>
              <img className='arrow' src={shareImg}></img>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
