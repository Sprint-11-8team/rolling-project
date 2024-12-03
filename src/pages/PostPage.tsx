import { useState } from "react";
import Button from "../components/common/Button";
import backgroundImg1 from "../assets/images/backgroundImg/background_img_1.svg";
import backgroundImg2 from "../assets/images/backgroundImg/background_img_2.jpg";
import backgroundImg3 from "../assets/images/backgroundImg/background_img_3.svg";
import backgroundImg4 from "../assets/images/backgroundImg/background_img_4.jpg";
const PostPage = () => {
  const [isColorVisible, setIsColorVisible] = useState(true);
  return (
    <form className="post-page-container">
      <div className="name-input-container">
        <h2>To.</h2>
        <input placeholder="받는 사람 이름을 입력해 주세요"></input>
      </div>
      <div className="background-color-container">
        <h2>배경화면을 선택해 주세요.</h2>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
      </div>
      <div className="color-img-container">
        <button
          type="button"
          onClick={() => {
            setIsColorVisible(true);
          }}
        >
          컬러
        </button>
        <button type="button" onClick={() => setIsColorVisible(false)}>
          이미지
        </button>
      </div>
      {isColorVisible ? (
        <div className="color-grid-container">
          <div className="color-grid-item"></div>
          <div className="color-grid-item"></div>{" "}
          <div className="color-grid-item"></div>{" "}
          <div className="color-grid-item"></div>
        </div>
      ) : (
        <div className="image-grid-container">
          <div>
            <img src={backgroundImg1}></img>
          </div>
          <div>
            <img src={backgroundImg2}></img>
          </div>
          <div>
            <img src={backgroundImg3}></img>
          </div>
          <div>
            <img src={backgroundImg4}></img>
          </div>
        </div>
      )}

      <div className="post-create-button-container">
        <Button addClassName="post-create-button" disabled={false}>
          생성하기
        </Button>
      </div>
    </form>
  );
};

export default PostPage;
