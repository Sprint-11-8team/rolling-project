import profileImg from "../../assets/images/profile_img.png";

const Profile = () => {
  return (
    <div className="profile-content">
      <img src={profileImg} alt="프로필사진" className="image"></img>
    </div>
  );
};

export default Profile;
