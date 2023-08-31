import { useNavigate } from "react-router-dom";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";
import styled from "styled-components";

interface IModifyLetterHeaderProps {
  isActive: boolean;
  letterHeaderClickHandler?: () => void;
}

const ModifyLetterHeader = ({
  isActive,
  letterHeaderClickHandler,
}: IModifyLetterHeaderProps) => {
  const navigate = useNavigate();

  const onClickGoBackButtonHandler = () => {
    // navigate(-1);
    // 어차피 viewmyletter 아닐까?
    navigate("/viewmyletter");
  };

  const onClickSubmitButtonHandler = async () => {
    // const result = createMyLetter(myLetterPost);
    if (isActive) {
      if (letterHeaderClickHandler) {
        letterHeaderClickHandler();
      }
    }
  };

  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img
          src="https://wliv.kr/img/arrow-left-icon.svg"
          alt="뒤로 가기"
        />
      </GoBackButton>
      <PostButtonGropContainer>
        <SubmitButton
          isValidPost={isActive}
          onClick={onClickSubmitButtonHandler}
        >
          수정
        </SubmitButton>
      </PostButtonGropContainer>
    </CommonHeaderContainer>
  );
};

export default ModifyLetterHeader;

const GoBackButton = styled.button`
  position: absolute;
  padding: 4px 1rem 4px 0;
  left: 0;
`;

const PostButtonGropContainer = styled.div`
  position: absolute;
  right: 0;

  width: fit-content;
  display: flex;
  justify-content: space-between;
`;

interface IButtonTypes {
  isValidPost: boolean;
}

const SubmitButton = styled.button<IButtonTypes>`
  width: 57px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background-color: ${({ isValidPost }) =>
    isValidPost ? "var(--main-color)" : "#5B2950"};

  font-weight: 700;
  font-size: 14px;
  color: ${({ isValidPost }) => (isValidPost ? "var(--white)" : "#867388")};
`;
