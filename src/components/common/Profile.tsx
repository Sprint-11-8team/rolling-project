import profileImg from "../../assets/images/profile_img.png";
import classes from "../../utils/classes";

/*
 * <pre>
 * @title Profile.tsx
 * @desc 프로필 공통컴포넌트
 * </pre>
 *
 * @author 윤예지
 * @since 2024.11.24
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2024.11.24  윤예지  최초작성
 */

interface ProfileProps {
  addClassName?: string | string[];
  imageUrl?: string;
}

const Profile = ({ addClassName, imageUrl }: ProfileProps) => {
  return (
    <div className={classes("profile-content", addClassName)}>
      <img
        src={imageUrl || profileImg}
        alt="프로필사진"
        className="image"
      ></img>
    </div>
  );
};

export default Profile;
