import { useState } from "react";
import Button from "../components/common/Button";
import backgroundImg1 from "../assets/images/backgroundImg/background_img_1.svg";
import backgroundImg2 from "../assets/images/backgroundImg/background_img_2.jpg";
import backgroundImg3 from "../assets/images/backgroundImg/background_img_3.svg";
import backgroundImg4 from "../assets/images/backgroundImg/background_img_4.jpg";
import checkIcon from "../assets/icons/check_icon.svg";

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

  // 이름 입력 값 변경 시 호출되는 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); // 입력 값을 상태로 저장

    if (!isFocused) {
      return; // 포커스되지 않은 경우 에러 메시지를 업데이트하지 않음
    }

    if (value.length < 2) {
      setInputError("적어도 2글자 이상 입력해주세요."); // 입력 값이 2글자 미만일 때 에러 메시지 설정
    } else {
      setInputError(""); // 입력 값이 유효할 때 에러 메시지 초기화
    }
  };

  // 입력 필드에 포커스되었을 때 호출되는 핸들러
  const handleFocus = () => {
    setIsFocused(true); // 포커스 상태로 변경
    if (inputValue.length < 2) {
      setInputError("적어도 2글자 이상 입력해주세요."); // 포커스된 상태에서 2글자 미만일 때 에러 메시지 설정
    }
  };

  // 입력 필드에서 포커스가 해제되었을 때 호출되는 핸들러
  const handleBlur = () => {
    setIsFocused(false); // 포커스 상태 해제
    if (!inputValue) {
      setInputError("값을 입력해 주세요."); // 값이 비어 있을 경우 에러 메시지 설정
    }
  };

  // 컬러 선택 시 호출되는 핸들러
  const handleColorSelect = (color: string) => {
    setSelectedColor(color); // 선택된 컬러를 상태로 저장
  };

  // 이미지 선택 시 호출되는 핸들러
  const handleImageSelect = (img: string) => {
    setSelectedImage(img); // 선택된 이미지를 상태로 저장
  };

  return (
    <form className="post-page-container">
      {/* 이름 입력 섹션 */}
      <div className="name-input-container">
        <h2>To.</h2>
        <input
          value={inputValue} // 입력 값 상태 연결
          onChange={handleInputChange} // 입력 값 변경 핸들러 연결
          onFocus={handleFocus} // 포커스 핸들러 연결
          onBlur={handleBlur} // 포커스 해제 핸들러 연결
          placeholder="받는 사람 이름을 입력해 주세요"
        ></input>
        {inputError && <div className="error-message">{inputError}</div>}{" "}
        {/* 에러 메시지 표시 */}
      </div>

      {/* 배경화면 선택 섹션 */}
      <div className="background-color-container">
        <h2>배경화면을 선택해 주세요.</h2>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
      </div>

      {/* 컬러/이미지 선택 버튼 및 동적 테두리 */}
      <div className="color-img-button-container">
        <div
          className="dynamic-border-highlight" // 동적 테두리 스타일
          style={{ left: isColorVisible ? "0" : "50%" }}
        ></div>
        <button
          type="button"
          onClick={() => {
            setIsColorVisible(true); // 컬러 선택 모드 활성화
          }}
        >
          컬러
        </button>
        <button type="button" onClick={() => setIsColorVisible(false)}>
          이미지
        </button>
      </div>

      {/* 컬러 선택 그리드 */}
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
              onClick={() => handleColorSelect(item)} // 컬러 선택 핸들러 연결
            >
              {selectedColor === item && (
                <img className="color-check-icon" src={checkIcon}></img> // 선택 아이콘 표시
              )}
            </div>
          ))}
        </div>
      ) : (
        // 이미지 선택 그리드
        <div className="image-grid-container">
          {[backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4].map(
            (src) => (
              <div
                key={src}
                className={`image-grid-item ${
                  selectedImage === src ? "selected" : ""
                }`}
                onClick={() => handleImageSelect(src)} // 이미지 선택 핸들러 연결
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

      {/* 생성 버튼 */}
      <div className="post-create-button-container">
        <Button
          addClassName="post-create-button"
          disabled={inputValue.length >= 2 ? false : true}
        >
          생성하기
        </Button>
      </div>
    </form>
  );
};

export default PostPage;
