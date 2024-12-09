import checkIcon from "../../assets/icons/check_icon.svg";
import { useEffect, useState } from "react";
interface ImageGridProps {
  selectedImage: string;
  handleImageSelect: (image: string) => void;
}

const ImgGrid: React.FC<ImageGridProps> = ({
  selectedImage,
  handleImageSelect,
}) => {
  const [images, setImages] = useState([]);
  console.log(images);
  const fetchBackgroundImages = async () => {
    try {
      const response = await fetch(
        "https://rolling-api.vercel.app/background-images/"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setImages(data.imageUrls); // 객체 형태로 상태 설정
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 데이터 가져오기
  useEffect(() => {
    fetchBackgroundImages();
  }, []);
  return (
    <div className="image-grid-container">
      {images.map((image: string) => (
        <div
          key={image}
          className={`image-grid-item ${selectedImage === image ? "selected" : ""}`}
          onClick={() => handleImageSelect(image)}
        >
          <img src={image} alt="Background" />
          {selectedImage === image && (
            <img
              className="image-check-icon"
              src={checkIcon}
              alt="Selected Icon"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImgGrid;
