import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CommonContentContainer from "../Common/CommonContentContainer";
import ResizeableBottomSheet from "../Common/ResizableBottomSheet";
import ResizableBottomSheetHeader from "../Common/ResizableBottomSheetHeader";
import BottomSheetTitle from "../Common/BottomSheetTitle";
import ResizableBottomSheetContent from "../Common/ResizableBottomSheetContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
type WriteCardBodyProps = {};

import "swiper/css";
import "swiper/css/pagination";
import WriterCardTermModalComponent from "./WriteCardTermModalComponent";
import { useRecoilState } from "recoil";
import { isValidPostStateCard } from "./atoms/isValidPostAtom";
import { myCardState } from "./atoms/myCardAtoms";

const WriteCardBody: FunctionComponent<WriteCardBodyProps> = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState<boolean>(true);
  const [, setIsFullSize] = useState<boolean>(false);

  const [isShowTerm, setIsShowTerm] = useState<boolean>(false);
  const [isFullSizeTerm, setIsFullSizeTerm] = useState<boolean>(true);

  const [isDisplayContent, setIsDisplayContent] = useState<boolean>(true);

  const [, setIsValidPost] = useRecoilState(isValidPostStateCard);

  const [myCardPost, setMyCardPost] = useRecoilState(myCardState);

  const backgroundClickHandler = () => {
    setIsShow(false);
  };

  const closeHandler = () => {
    // setIsDisplayContent((s) => !s);
    setIsShow(false);
  };

  const onClickSubmitButtonHandler = () => {
    setIsShow(true);
  };
  const closeHandlerTerm = () => {
    setIsShowTerm(false);
  };

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
      <CommonContentContainer xPadding="5%">
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
      <ResizeableBottomSheet
        isShow={isShow}
        isFullSize={isDisplayContent}
        setIsShow={setIsShow}
        setIsFullSize={setIsFullSize}
        manualFullSizeHeight="500px"
        backgroundClickHandler={backgroundClickHandler}
      >
        <ResizableBottomSheetHeader
          align="right"
          closable={true}
          closeHandler={closeHandler}
          closeIconOverwrap={<img src="https://wliv.kr/img/x-icon.svg" />}
        >
          <BottomSheetTitle></BottomSheetTitle>
        </ResizableBottomSheetHeader>
        <ResizableBottomSheetContent>
          <BottomSheetContentWrapper isDisplayContent={isDisplayContent}>
            <CardBottomSheetTitle>
              아래의 예를 기반으로 작성해보세요.
            </CardBottomSheetTitle>
            <SwiperWrapper pagination={true} loop={true} modules={[Pagination]}>
              <SwiperSlide>
                <SwiperImg src="https://wliv.kr/img/card/card-help-2.png" />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImg src="https://wliv.kr/img/card/card-help-5.png" />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImg src="https://wliv.kr/img/card/card-help-4.png" />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImg src="https://wliv.kr/img/card/card-help-3.png" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <SwiperImg src="https://wliv.kr/img/card/card-help-1.png" />
              </SwiperSlide>
            </SwiperWrapper>
          </BottomSheetContentWrapper>
        </ResizableBottomSheetContent>
      </ResizeableBottomSheet>
      <ResizeableBottomSheet
        isShow={isShowTerm}
        isFullSize={isFullSizeTerm}
        setIsShow={setIsShowTerm}
        setIsFullSize={setIsFullSizeTerm}
      >
        <ResizableBottomSheetHeader
          align="right"
          closable={true}
          closeHandler={closeHandlerTerm}
        >
          <BottomSheetTitle>이용 규칙</BottomSheetTitle>
        </ResizableBottomSheetHeader>
        <ResizableBottomSheetContent borderRadius="1rem">
          <TextWrapper>
            <WriterCardTermModalComponent />
          </TextWrapper>
        </ResizableBottomSheetContent>
      </ResizeableBottomSheet>
    </>
  );
};

export default WriteCardBody;

const RulesOfUseGropContainer = styled.div``;

const WritingHelpBottomSheet = styled.div``;

interface BottomSheetContentWrapperProps {
  isDisplayContent: boolean;
}

const BottomSheetContentWrapper = styled.div<BottomSheetContentWrapperProps>`
  position: relative;
  height: 100%;
  max-height: ${(props) => (props.isDisplayContent ? "450px" : "0px")};
  overflow: hidden;
  transition: max-height 0.15s linear;
`;

const CardBottomSheetTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 6px;
`;

const SwiperImg = styled.img`
  width: 100%;
`;

const SwiperWrapper = styled(Swiper)`
  margin-top: 24px;
  padding-bottom: 1rem;
`;

const TextWrapper = styled.div`
  background-color: white;
`;

// 신규생성

const LogInSignUpContainer = styled.div`
  padding: 0px;
  position: absolute;
  bottom: 0px;
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
  align-items: right;
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
