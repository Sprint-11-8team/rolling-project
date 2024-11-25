import profileImg from "../../assets/images/profile_img.png";
import classes from "../../utils/classes";
/**
 * 프로필 공통 컴포넌트
 * @returns
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
