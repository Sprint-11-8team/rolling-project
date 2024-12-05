import backgroundImg1 from "../../assets/images/backgroundImg/background_img_1.svg";
import backgroundImg2 from "../../assets/images/backgroundImg/background_img_2.jpg";
import backgroundImg3 from "../../assets/images/backgroundImg/background_img_3.svg";
import backgroundImg4 from "../../assets/images/backgroundImg/background_img_4.jpg";

import checkIcon from "../../assets/icons/check_icon.svg";
interface ImageGridProps {
  selectedImage: string;
  handleImageSelect: (image: string) => void;
}

const ImgGrid: React.FC<ImageGridProps> = ({
  selectedImage,
  handleImageSelect,
}) => {
  const images = [
    backgroundImg1,
    backgroundImg2,
    backgroundImg3,
    backgroundImg4,
  ];

  return (
    <div className="image-grid-container">
      {images.map((image) => (
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
