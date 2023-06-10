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
    // const response = await fetch("https://wliv.kr/api/life/letter/create/", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify(myLetterPost), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    // });
    // return response.json();
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
  left: 0px;
`;

const PostButtonGropContainer = styled.div`
  position: absolute;
  right: 0px;

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
