import { useEffect, useState } from "react";

const PostMessagePage = () => {
  const [profileImages, setProfileImages] = useState("");
  const fetchProfileImages = async () => {
    try {
      const response = await fetch(
        "https://rolling-api.vercel.app/profile-images/"
      );
      const data = await response.json();
      setProfileImages(data);
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
    <div className="post-message-container">
      <form className="post-message-form">
        <section className="input-name-section">
          <h2>From.</h2>
          <input className="" placeholder="이름을 입력해 주세요."></input>
        </section>
        <div>
          <h2>프로필 이미지</h2>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </form>
    </div>
  );
};

export default PostMessagePage;
