import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import CommonContentContainer from "../Common/CommonContentContainer";
import ResizeableBottomSheet from "../Common/ResizableBottomSheet";
import ResizableBottomSheetHeader from "../Common/ResizableBottomSheetHeader";
import BottomSheetTitle from "../Common/BottomSheetTitle";
import ResizableBottomSheetContent from "../Common/ResizableBottomSheetContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
type WriteLetterBodyProps = {};

import "swiper/css";
import "swiper/css/pagination";
import WriterLetterTermModalComponent from "./WriteLetterTermModalComponent";
import { useRecoilState } from "recoil";
import { isValidPostState } from "./atoms/isValidPostAtom";
import { myLetterState } from "./atoms/myLetterAtoms";

const WriteLetterBody: FunctionComponent<WriteLetterBodyProps> = () => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [, setIsFullSize] = useState<boolean>(false);

  const [isShowTerm, setIsShowTerm] = useState<boolean>(false);
  const [isFullSizeTerm, setIsFullSizeTerm] = useState<boolean>(true);

  const [isDisplayContent, setIsDisplayContent] = useState<boolean>(true);

  const [, setIsValidPost] = useRecoilState(isValidPostState);

  const [myLetterPost, setMyLetterPost] = useRecoilState(myLetterState);

  const backgroundClickHandler = () => {
    setIsShow(false);
  };

  const closeHandler = () => {
    setIsDisplayContent((s) => !s);
  };

  const closeHandlerTerm = () => {
    setIsShowTerm(false);
  };

  useEffect(() => {
    /** 내용이 입력되면 등록 가능 */
    if (myLetterPost.title !== "" && myLetterPost.content !== "") {
      setIsValidPost(true);
    }
  }, [myLetterPost]);

  const onChangeLetterTitleHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setMyLetterPost((prevstate) => {
      return {
        ...prevstate,
        title: value,
      };
    });
  };

  const onChangeLetterContentHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    setMyLetterPost((prevstate) => {
      return {
        ...prevstate,
        content: value,
      };
    });
  };

  return (
    <>
      <CommonContentContainer xPadding="5%">
        <WriteLetterTitleInput
          placeholder="제목"
          maxLength={150}
          value={myLetterPost.title}
          onChange={onChangeLetterTitleHandler}
        />
        <WriteLetterConteintInput
          placeholder="무슨 이야기를 나누고 싶으세요?"
          maxLength={1000}
          value={myLetterPost.content}
          onChange={onChangeLetterContentHandler}
        />
        <RulesOfUseGropContainer>
          <ViewRulesOfUseGroupContainer>
            <ViewRulesOfUseButton
              onClick={() => {
                setIsShowTerm(true);
              }}
            >
              이용규칙 전체보기
            </ViewRulesOfUseButton>
          </ViewRulesOfUseGroupContainer>
          <RulesOfUseGroupDescription>
            지금 쓰고계신 내용은 공유되며 모두 익명으로 저장됩니다. <br />
            규정에 어긋나는 내용은 삭제처리가 될 수 있습니다.
          </RulesOfUseGroupDescription>
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
          closeIconOverwrap={
            isDisplayContent ? (
              <img src="https://wliv.kr/img/arrow-bottom-icon.svg" />
            ) : (
              <img
                src="https://wliv.kr/img/arrow-bottom-icon.svg"
                style={{
                  transform: "rotate(180deg)",
                }}
              />
            )
          }
        >
          <BottomSheetTitle>작성 도움말</BottomSheetTitle>
        </ResizableBottomSheetHeader>
        <ResizableBottomSheetContent>
          <BottomSheetContentWrapper isDisplayContent={isDisplayContent}>
            <LetterBottomSheetTitle>
              작성 시 내용들을 참고해보세요.
            </LetterBottomSheetTitle>
            <LetterBottomSheetDescription>
              아래의 방법을 통해 작성하면 나를 이해하는데 도움이 돼요.
            </LetterBottomSheetDescription>
            <SwiperWrapper pagination={true} loop={true} modules={[Pagination]}>
              <SwiperSlide>
                <SwiperImg src="https://wliv.kr/img/writinghelp1-img.png" />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImg src="https://wliv.kr/img/writinghelp2-img.png" />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImg src="https://wliv.kr/img/writinghelp3-img.png" />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperImg src="https://wliv.kr/img/writinghelp4-img.png" />
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
            <WriterLetterTermModalComponent />
          </TextWrapper>
        </ResizableBottomSheetContent>
      </ResizeableBottomSheet>
    </>
  );
};

export default WriteLetterBody;

const WriteLetterTitleInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 14px 0;

  font-weight: 700;
  font-size: 18px;

  border-bottom: 1px solid #4b0b50;

  margin-bottom: 24px;

  &::placeholder {
    color: #867388;
  }
`;

const WriteLetterConteintInput = styled.textarea`
  height: calc(100vh - 330px);

  &::placeholder {
    color: #867388;
  }
`;

const RulesOfUseGropContainer = styled.div``;

const ViewRulesOfUseGroupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ViewRulesOfUseButton = styled.button`
  width: 120px;
  height: 24px;

  font-weight: 700;
  font-size: 12px;
  color: #999999;

  background-color: #352638;
  border-radius: 200px;

  margin: 11px 0;
`;

const RulesOfUseGroupDescription = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: #999999;
`;

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

const LetterBottomSheetTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 6px;
`;

const LetterBottomSheetDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #cbcbcb;
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
