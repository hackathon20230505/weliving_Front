import styled from "styled-components";

interface CommonContentContainerProps
  extends CommonContentContainerFragmentProps {
  children: React.ReactNode;
}

const CommonContentContainer = ({
  children,
  xPadding = undefined,
  yPadding = undefined,
  xMargin = undefined,
  yMargin = undefined,
  h = undefined,
  topSpacing = "40px",
}: CommonContentContainerProps) => {
  return (
    <CommonContentContainerFragment
      xPadding={xPadding}
      yPadding={yPadding}
      xMargin={xMargin}
      yMargin={yMargin}
      h={h}
      topSpacing={topSpacing}
    >
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
  overflow: hidden;
  position: relative;
`;

export default CommonContentContainer;
