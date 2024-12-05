import checkIcon from "../assets/icons/check_icon.svg";
interface ColorGridProps {
  selectedColor: string;
  handleColorSelect: (color: string) => void;
}

const ColorGrid = ({ selectedColor, handleColorSelect }: ColorGridProps) => {
  const colors = [
    "color-grid-item1",
    "color-grid-item2",
    "color-grid-item3",
    "color-grid-item4",
  ];

  return (
    <div className="color-grid-container">
      {colors.map((color) => (
        <div
          key={color}
          className={`color-grid-item ${color} ${selectedColor === color ? "selected" : ""}`}
          onClick={() => handleColorSelect(color)}
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
