import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CommonContentContainer from "../Common/CommonContentContainer";
import "swiper/css";
import "swiper/css/pagination";
import { useRecoilState } from "recoil";
import { isValidPostStateCard } from "./atoms/isValidPostAtom";
import { myCardState } from "./atoms/myCardAtoms";

type WriteCardBodyProps = {};

const WriteCardBody: FunctionComponent<WriteCardBodyProps> = () => {
  const navigate = useNavigate();

  const [, setIsValidPost] = useRecoilState(isValidPostStateCard);

  const [myCardPost, setMyCardPost] = useRecoilState(myCardState);

  useEffect(() => {
    /** 내용이 입력되면 등록 가능 */
    if (myCardPost.title !== "" && myCardPost.content !== "") {
      setIsValidPost(true);
    }
  }, [myCardPost]);

  // 카드 기능

  const [cardInputs, setCardInputs] = useState<string[]>([""]);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...cardInputs];
    newInputs[index] = value;
    setCardInputs(newInputs);
  };

  const handleAddInput = () => {
    if (cardInputs.length < 6) {
      setCardInputs([...cardInputs, ""]);
    }
  };

  // 카드 기능

  const onClickLogInButtonHandler = () => {
    const confirmed = window.confirm("추억카드를 모두 작성하셨나요?");
    if (confirmed) {
      navigate("/MainContentSecond");
    }
  };

  return (
    <>
      <CommonContentContainer
        xPadding="5%"
        h={"calc(100% - 56px)"}
        topSpacing={"0"}
      >
        <RulesOfUseGropContainer>
          <LogInSignUpContainer>
            <LogInButton onClick={onClickLogInButtonHandler}>다음</LogInButton>
          </LogInSignUpContainer>
          <SignUpContainer>
            당신의 추억을 담아주세요
            <CardSubHeaderContainer>
              <MemoriesContainer>
                <MemoriesText>최대 6개까지 담을 수 있어요.</MemoriesText>
                {`${cardInputs.length}/6`}
              </MemoriesContainer>
            </CardSubHeaderContainer>
            {cardInputs.map((input, index) => (
              <InputContainer key={index}>
                <input
                  type="text"
                  value={input}
                  placeholder="내용을 입력해주세요"
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </InputContainer>
            ))}
            {cardInputs.length < 6 && (
              <AddInputButton onClick={handleAddInput}>
                <img src="https://wliv.kr/img/card/plus-icon.svg" />
              </AddInputButton>
            )}
          </SignUpContainer>
        </RulesOfUseGropContainer>
        <WritingHelpBottomSheet></WritingHelpBottomSheet>
      </CommonContentContainer>
    </>
  );
};

export default WriteCardBody;

const RulesOfUseGropContainer = styled.div``;

const WritingHelpBottomSheet = styled.div``;

// 신규생성

const LogInSignUpContainer = styled.div`
  padding: 0;
  position: absolute;
  bottom: 0;
  width: 90%;

  display: flex;
  flex-direction: column;
`;

const LogInButton = styled.button`
  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;
`;

// 카드 관련

const SignUpContainer = styled.main``;

const InputContainer = styled.div`
  input {
    border: 1px solid #db0fdb;

    ::placeholder {
      color: #867388;
    }

    margin-top: 16px;
    width: 100%;
    padding: 19px;
    font-size: 14px;
    border-radius: 4px;
    outline: none;
  }
`;

const AddInputButton = styled.button`
  border: 1px solid #db0fdb;
  margin-top: 16px;
  width: 100%;
  padding: 19px;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
`;

// 추억 서브 헤더
const MemoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #cbcbcb;
  align-items: flex-end;
`;

const MemoriesText = styled.div`
  flex: 1;
  font-size: 14px;
  color: #cbcbcb;
  text-align: left;

  padding-top: 6px;
  padding-bottom: 8px;
`;

const CardSubHeaderContainer = styled.main``;
