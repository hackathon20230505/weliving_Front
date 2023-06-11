import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";
import ResizeableBottomSheet from "../Common/ResizableBottomSheet.tsx";
import ResizableBottomSheetHeader from "../Common/ResizableBottomSheetHeader.tsx";
import BottomSheetTitle from "../Common/BottomSheetTitle.tsx";
import ResizableBottomSheetContent from "../Common/ResizableBottomSheetContent.tsx";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

type WriteCardHeaderProps = {
  // setIsShow: (value: boolean) => void;
};

const WriteCardHeader: FunctionComponent<WriteCardHeaderProps> = () => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [isFullSize, setIsFullSize] = useState<boolean>(false);

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

  return (
    <>
      <CommonHeaderContainer height="56px" xMargin="5%">
        {/* <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton> */}
        <FindPWTitle>추억카드</FindPWTitle>
        <PostButtonGropContainer>
          <SubmitButton onClick={onClickSubmitButtonHandler}>
            카드예시
          </SubmitButton>
        </PostButtonGropContainer>
      </CommonHeaderContainer>
      <ResizeableBottomSheet
        isShow={isShow}
        isFullSize={isFullSize}
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
          <BottomSheetContentWrapper>
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
    </>
  );
};

export default WriteCardHeader;

const PostButtonGropContainer = styled.div`
  position: absolute;
  right: 0px;

  width: fit-content;
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.div`
  font-weight: 400;
  font-size: 12px;

  &::after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 6px;
    background: url("https://wliv.kr/img/card/arrow-top-icon.svg") no-repeat
      center center;
    background-size: contain;
    margin-left: 4px;
    position: relative;
    top: -1px;
  }
`;

const FindPWTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;

const BottomSheetContentWrapper = styled.div`
  position: relative;
  height: 100%;
  max-height: 450px;
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
