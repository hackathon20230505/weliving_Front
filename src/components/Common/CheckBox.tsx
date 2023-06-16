import { FunctionComponent } from "react";
import styled from "styled-components";
type CheckBoxProps = {
  isChecked: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckBox: FunctionComponent<CheckBoxProps> = ({ isChecked }) => {
  return (
    <>
      <CheckboxInput id="checkbox" type="checkbox" />
      <CheckboxLabel htmlFor="checkbox" isChecked={isChecked}></CheckboxLabel>
    </>
  );
};

export default CheckBox;

const CheckboxInput = styled.input`
  display: none;
`;

interface CheckboxLabel {
  isChecked: boolean;
}

const CheckboxLabel = styled.label<CheckboxLabel>`
  display: inline-block;
  width: 20px;
  height: 20px;

  background-image: ${({ isChecked }) =>
    isChecked ? `url("https://welldie.com/img/check-icon.svg")` : "none"};
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ isChecked }) =>
    isChecked ? "var(--main-color)" : "inherit"};

  border: ${({ isChecked }) =>
    isChecked ? "2px solid var(--main-color)" : "2px solid #665569"};
  border-radius: 50%;

  cursor: pointer;
`;
