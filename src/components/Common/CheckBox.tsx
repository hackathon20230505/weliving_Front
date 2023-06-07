import { FunctionComponent } from "react";
import styled from "styled-components";
type CheckBoxProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckBox: FunctionComponent<CheckBoxProps> = ({
  isChecked,
  setIsChecked,
}) => {
  const onCheckboxClickHandler = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <CheckboxInput id="checkbox" type="checkbox" />
      <CheckboxLabel
        onClick={onCheckboxClickHandler}
        htmlFor="checkbox"
        isChecked={isChecked}
      ></CheckboxLabel>
    </>
  );
};

export default CheckBox;

const CheckboxInput = styled.input`
  visibility: hidden;
`;

interface CheckboxLabel {
  isChecked: boolean;
}

const CheckboxLabel = styled.label<CheckboxLabel>`
  width: 20px;
  height: 20px;

  background-image: ${({ isChecked }) =>
    isChecked ? `url("https://wliv.kr/img/check-icon.svg")` : "none"};
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ isChecked }) =>
    isChecked ? "var(--main-color)" : "inherit"};

  border: ${({ isChecked }) =>
    isChecked ? "2px solid var(--main-color)" : "2px solid #665569"};
  border-radius: 50%;

  cursor: pointer;
`;
