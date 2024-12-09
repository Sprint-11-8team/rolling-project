import React from "react";

interface NameInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputError: string;
  setInputError: React.Dispatch<React.SetStateAction<string>>;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const NameInput = ({
  inputValue,
  setInputValue,
  inputError,
  setInputError,
  isFocused,
  setIsFocused,
}: NameInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (!isFocused) return;

    if (value.length < 2) {
      setInputError("적어도 2글자 이상 입력해주세요.");
    } else {
      setInputError("");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (inputValue.length < 2) {
      setInputError("적어도 2글자 이상 입력해주세요.");
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!inputValue) {
      setInputError("값을 입력해 주세요.");
    }
  };

  return (
    <div className="name-input-container">
      <h2>To.</h2>
      <input
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="받는 사람 이름을 입력해 주세요"
      />
      {inputError && <div className="error-message">{inputError}</div>}
    </div>
  );
};

export default NameInput;
