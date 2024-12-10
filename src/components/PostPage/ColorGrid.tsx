import checkIcon from "../../assets/icons/check_icon.svg";
interface ColorGridProps {
  selectedColor: string;
  handleColorSelect: (color: string) => void;
}

const ColorGrid = ({ selectedColor, handleColorSelect }: ColorGridProps) => {
  const colors = ["beige", "purple", "blue", "green"];

  return (
    <div className="color-grid-container">
      {colors.map((color) => (
        <div
          key={color}
          className={`color-grid-item  ${selectedColor === color ? "selected" : ""}`}
          onClick={() => handleColorSelect(color)}
          style={{ backgroundColor: color }}
        >
          {selectedColor === color && (
            <img
              className="color-check-icon"
              src={checkIcon}
              alt="Check Icon"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorGrid;
