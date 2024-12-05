interface colorImageToggleProps {
  isColorVisible: boolean;
  setIsColorVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColorImageToggle = ({
  isColorVisible,
  setIsColorVisible,
}: colorImageToggleProps) => {
  return (
    <section className="color-img-button-container">
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
    </section>
  );
};

export default ColorImageToggle;
