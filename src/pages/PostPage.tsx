import { useState } from "react";
import Button from "../components/common/Button";
import backgroundImg1 from "../assets/images/backgroundImg/background_img_1.svg";
import backgroundImg2 from "../assets/images/backgroundImg/background_img_2.jpg";
import backgroundImg3 from "../assets/images/backgroundImg/background_img_3.svg";
import backgroundImg4 from "../assets/images/backgroundImg/background_img_4.jpg";
import checkIcon from "../assets/icons/check_icon.svg";
const PostPage = () => {
  const [isColorVisible, setIsColorVisible] = useState(true);
  const [selectedColor, setSelectedColor] = useState("color-grid-item1");
  const [selectedImage, setSelectedImage] = useState(backgroundImg1); // 선택된 이미지 상태
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  const handleImageSelect = (img: string) => {
    setSelectedImage(img);
  };
  return (
    <form className="post-page-container">
      {/* 이름 입력 */}
      <div className="name-input-container">
        <h2>To.</h2>
        <input placeholder="받는 사람 이름을 입력해 주세요"></input>
      </div>

      {/* 배경화면 선택 */}
      <div className="background-color-container">
        <h2>배경화면을 선택해 주세요.</h2>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
      </div>

      {/* 버튼 및 동적 테두리 */}
      <div className="color-img-button-container">
        <div
          className="dynamic-border-highlight"
          style={{ left: isColorVisible ? "0" : "50%" }}
        ></div>
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
          {[
            "color-grid-item1",
            "color-grid-item2",
            "color-grid-item3",
            "color-grid-item4",
          ].map((item) => (
            <div
              key={item}
              className={`color-grid-item ${item} ${selectedColor === item ? "selected" : ""}`}
              onClick={() => handleColorSelect(item)}
            >
              {selectedColor === item && (
                <img className="color-check-icon" src={checkIcon}></img>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="image-grid-container">
          {[backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4].map(
            (src) => (
              <div
                key={src}
                className={`image-grid-item ${
                  selectedImage === src ? "selected" : ""
                }`}
                onClick={() => handleImageSelect(src)}
              >
                <img src={src} />
                {selectedImage === src && (
                  <img
                    className="image-check-icon"
                    src={checkIcon}
                    alt="Selected Icon"
                  />
                )}
              </div>
            )
          )}
        </div>
      )}

      <div className="post-create-button-container">
        <Button addClassName="post-create-button" disabled={true}>
          생성하기
        </Button>
      </div>
    </form>
  );
};

export default PostPage;
