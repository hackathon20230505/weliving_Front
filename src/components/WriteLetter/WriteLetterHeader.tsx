import { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isValidPostState } from "./atoms/isValidPostAtom";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";
import { createMyLetter } from "../../apis/life/letter/createMyLetter";
import { myLetterState } from "./atoms/myLetterAtoms";

type WriteLetterHeaderProps = {};

const WriteLetterHeader: FunctionComponent<WriteLetterHeaderProps> = () => {
  const navigate = useNavigate();
  const [isValidPost] = useRecoilState(isValidPostState);
  const [myLetterPost] = useRecoilState(myLetterState);

  const onClickGoBackButtonHandler = () => {
    navigate("/");
  };

  const onClickSubmitButtonHandler = async () => {
    const result = createMyLetter(myLetterPost);
    console.log("result", result);
    navigate("/getanswergpt");
  };

  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
      <PostButtonGropContainer>
        <SubmitButton
          isValidPost={isValidPost}
          onClick={onClickSubmitButtonHandler}
        >
          등록
        </SubmitButton>
      </PostButtonGropContainer>
    </CommonHeaderContainer>
  );
};

export default WriteLetterHeader;

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
