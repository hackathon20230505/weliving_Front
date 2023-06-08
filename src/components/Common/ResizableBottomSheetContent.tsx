import styled from "styled-components";

interface ResizableBottomSheetContentProps {
  children: React.ReactNode;
  borderRadius?: string;
}

const ResizableBottomSheetContent = ({
  children,
  borderRadius = "0px",
}: ResizableBottomSheetContentProps) => {
  return (
    <ResizableBottomSheetContentFragment borderRadius={borderRadius}>
      {children}
    </ResizableBottomSheetContentFragment>
  );
};

interface ResizableBottomSheetContentFragmentProps {
  borderRadius: string;
}

const ResizableBottomSheetContentFragment = styled.div<ResizableBottomSheetContentFragmentProps>`
  width: 100%;
  height: 100%;
  overflow: auto;
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export default ResizableBottomSheetContent;
