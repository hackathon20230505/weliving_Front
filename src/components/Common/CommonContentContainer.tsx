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
  height = undefined,
  marginTop = "40px",
}: CommonContentContainerProps) => {
  return (
    <CommonContentContainerFragment
      xPadding={xPadding}
      yPadding={yPadding}
      xMargin={xMargin}
      yMargin={yMargin}
      height={height}
      marginTop={marginTop}
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
  height?: string;
  marginTop?: string;
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

  ${(props) => (props.height ? `height: ${props.height};` : "")}
      
  margin-top: ${(props) => props.marginTop};
`;

export default CommonContentContainer;
