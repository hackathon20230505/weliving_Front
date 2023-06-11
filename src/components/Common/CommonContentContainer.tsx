import styled from "styled-components";

interface CommonContentContainerProps
  extends CommonContentContainerFragmentProps {
  children: React.ReactNode;
}

const CommonContentContainer = (props: CommonContentContainerProps) => {
  const { children, ...rest } = props;

  rest.h = rest.h || "calc(100% - 56px)";
  rest.topSpacing = rest.topSpacing || "40px";
  rest.customOverflowX = rest.customOverflowX || "hidden";
  rest.customOverflowY = rest.customOverflowY || "auto";

  return (
    <CommonContentContainerFragment {...rest}>
      {children}
    </CommonContentContainerFragment>
  );
};

interface CommonContentContainerFragmentProps {
  xPadding?: string;
  yPadding?: string;
  xMargin?: string;
  yMargin?: string;
  h?: string;
  topSpacing?: string;
  customOverflowX?: string;
  customOverflowY?: string;
}

const CommonContentContainerFragment = styled.div<CommonContentContainerFragmentProps>`
  ${(props) =>
    props.yPadding && props.xPadding
      ? `padding: ${props.yPadding} ${props.xPadding};`
      : props.yPadding
      ? `padding: ${props.yPadding} 0;`
      : props.xPadding
      ? `padding: 0 ${props.xPadding};`
      : ""}

  ${(props) =>
    props.yMargin && props.xMargin
      ? `margin: ${props.yMargin} ${props.xMargin};`
      : props.yMargin
      ? `margin: ${props.yMargin} 0;`
      : props.xMargin
      ? `margin: 0 ${props.xMargin};`
      : ""}

  ${(props) => (props.h ? `height: ${props.h};` : "")}
      
  padding-top: ${(props) => props.topSpacing};

  overflow-x: ${(props) => props.customOverflowX};
  overflow-y: ${(props) => props.customOverflowY};
`;

export default CommonContentContainer;
