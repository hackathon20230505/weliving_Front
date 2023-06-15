import styled from "styled-components";

interface ResizableBottomSheetHeaderProps {
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
  closable?: boolean;
  closeHandler?: () => void;
  closeIconOverwrap?: React.ReactNode;
}

const ResizableBottomSheetHeader = ({
  children,
  align = "left",
  closable = false,
  closeHandler = undefined,
  closeIconOverwrap = undefined,
}: ResizableBottomSheetHeaderProps) => {
  return (
    <ResizableBottomSheetHeaderFragment align={align}>
      {children && <>{children}</>}
      {closable && (
        <CloseButton tabIndex={-1} onClick={closeHandler}>
          {closeIconOverwrap ? (
            closeIconOverwrap
          ) : (
            <CloseIcon src="https://wliv.kr/img/x-icon.svg" alt="닫기 버튼" />
          )}
        </CloseButton>
      )}
    </ResizableBottomSheetHeaderFragment>
  );
};

interface ResizableBottomSheetHeaderFragmentProps {
  align: "left" | "center" | "right";
}

const ResizableBottomSheetHeaderFragment = styled.div<ResizableBottomSheetHeaderFragmentProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align};
  margin: 0.5rem 0;
`;

const CloseButton = styled.button`
  width: 12px;
  outline: none;
`;

const CloseIcon = styled.img`
  width: 12px;
`;

export default ResizableBottomSheetHeader;
