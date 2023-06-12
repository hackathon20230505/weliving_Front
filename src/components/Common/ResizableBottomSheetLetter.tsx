import styled from "styled-components";

interface ResizableBottomSheetProps {
  children: React.ReactNode;
  manualMaxHeight?: string;
  manualFullSizeHeight?: string;
  backgroundClickHandler?: () => void;
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
  isFullSize: boolean;
  setIsFullSize: (isFullSize: boolean) => void;
}

const ResizeableBottomSheet = ({
  children,
  manualMaxHeight,
  manualFullSizeHeight,
  backgroundClickHandler,
  isShow,
  isFullSize = false,
}: ResizableBottomSheetProps) => {
  const blockBubble = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div>
      <BottomSheetBackCurtain isShow={isShow} />
      <BottomSheetWrapper isShow={isShow} onClick={backgroundClickHandler}>
        <BottomSheetContentWrapper
          isShow={isShow}
          isFullSize={isFullSize}
          manualMaxHeight={manualMaxHeight}
          manualFullSizeHeight={manualFullSizeHeight}
          onClick={blockBubble}
        >
          {children}
        </BottomSheetContentWrapper>
      </BottomSheetWrapper>
    </div>
  );
};

// isShow 가 false 면 화면에서 가리고, isShow 가 true 면 화면에 보여준다.
interface IsShowProps {
  isShow: boolean;
}

const BottomSheetWrapper = styled.div<IsShowProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: ${({ isShow }) =>
    isShow ? "translateY(0%)" : "translateY(100%)"};
  transition: transform 0.3s;
  max-height: 100%;
  overflow: hidden;
  z-index: 3;
`;

const BottomSheetBackCurtain = styled.div<IsShowProps>`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100%;
  background-color: rgba(17, 17, 17, 80%);
  display: ${({ isShow }) => (isShow ? "block" : "none")};
  z-index: 2;
`;

interface BottomSheetContentWrapperProps {
  isShow: boolean;
  isFullSize: boolean;
  manualMaxHeight?: string;
  manualFullSizeHeight?: string;
}

const BottomSheetContentWrapper = styled.div<BottomSheetContentWrapperProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 10;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #352638;
  padding: 20px 20px 4px;
  max-height: ${({ isFullSize, manualMaxHeight, manualFullSizeHeight }) =>
    isFullSize ? manualFullSizeHeight || "100%" : manualMaxHeight || "100%"};
  display: flex;
  flex-direction: column;
  min-height: ${({ isFullSize, manualFullSizeHeight }) =>
    isFullSize ? manualFullSizeHeight || "100%" : "0%"};
  transition: min-height 0.3s, max-height 0.3s;
`;

export default ResizeableBottomSheet;
