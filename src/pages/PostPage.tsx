import { useState } from "react";

import backgroundImg1 from "../assets/images/backgroundImg/background_img_1.svg";

import NameInput from "../components/PostPage/NameInput";
import CreateButton from "../components/PostPage/CreateButton";
import BackgroundDescription from "../components/PostPage/BackgroundDescription";
import ColorImageToggle from "../components/PostPage/ColorImageToggle";
import ColorGrid from "../components/PostPage/ColorGrid";
import ImgGrid from "../components/PostPage/ImgGrid";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  // 이름 입력 값 상태
  const [inputValue, setInputValue] = useState("");

  // 입력 필드 에러 메시지 상태
  const [inputError, setInputError] = useState("값을 입력해 주세요.");

  // 입력 필드가 포커스 되었는지 여부를 추적하는 상태
  const [isFocused, setIsFocused] = useState(false);

  // 컬러 선택 화면이 보이는지 여부를 결정하는 상태
  const [isColorVisible, setIsColorVisible] = useState(true);

  // 선택된 컬러 클래스명을 저장하는 상태
  const [selectedColor, setSelectedColor] = useState("color-grid-item1");

  // 선택된 배경 이미지를 저장하는 상태
  const [selectedImage, setSelectedImage] = useState(backgroundImg1);

  const navigate = useNavigate();

  // 컬러 선택 시 호출되는 핸들러
  const handleColorSelect = (color: string) => {
    setSelectedColor(color); // 선택된 컬러를 상태로 저장
  };

  // 이미지 선택 시 호출되는 핸들러
  const handleImageSelect = (img: string) => {
    setSelectedImage(img); // 선택된 이미지를 상태로 저장
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputError) {
      return;
    }
    navigate(`/post/${inputValue}/message`, {
      state: {
        inputValue,
        selectedImage,
      },
    });
  };

  return (
    <form className="post-page-container" onSubmit={handleSubmit}>
      {/* 이름 입력 섹션 */}
      <NameInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputError={inputError}
        setInputError={setInputError}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
      />

      {/* 배경화면 선택 섹션 */}
      <BackgroundDescription />

      {/* 컬러/이미지 선택 버튼 및 동적 테두리 */}
      <ColorImageToggle
        isColorVisible={isColorVisible}
        setIsColorVisible={setIsColorVisible}
      />

      {/* 컬러 선택 그리드 */}
      {isColorVisible ? (
        <ColorGrid
          selectedColor={selectedColor}
          handleColorSelect={handleColorSelect}
        />
      ) : (
        // 이미지 선택 그리드

        <ImgGrid
          selectedImage={selectedImage}
          handleImageSelect={handleImageSelect}
        />
      )}

      {/* 생성 버튼 */}
      <CreateButton inputValue={inputValue} />
    </form>
  );
};

export default PostPage;
