import { useEffect, useState } from "react";

const PostMessagePage = () => {
  const [profileImages, setProfileImages] = useState([]);
  const [selectedProfileImage, setSelectedProfileImage] = useState("");
  const fetchProfileImages = async () => {
    try {
      const response = await fetch(
        "https://rolling-api.vercel.app/profile-images/"
      );
      const data = await response.json();
      setProfileImages(data.imageUrls);
      setSelectedProfileImage(data.imageUrls[0]);
      return data;
    } catch (error: any) {
      console.log("error =", error);
    }
  };
  console.log(profileImages);
  useEffect(() => {
    fetchProfileImages();
  }, []);
  return (
    <form className="post-message-form">
      <section className="input-name-section">
        <h2>From.</h2>
        <input className="" placeholder="이름을 입력해 주세요."></input>
      </section>
      <div>
        <h2>프로필 이미지</h2>
        <div className="profile-image-container">
          <img
            className="selected-profile-image"
            src={selectedProfileImage}
          ></img>

          <div className="profile-images-section">
            <p className="profile-images-instruction">
              프로필 이미지를 선택해주세요!
            </p>
            <div className="profile-image-grid">
              {profileImages.map((img) => {
                return <img src={img}></img>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </form>
  );
};

export default PostMessagePage;
