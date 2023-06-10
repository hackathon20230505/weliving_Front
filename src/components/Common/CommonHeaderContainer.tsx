import styled from "styled-components";

interface CommonHeaderContainerProps
  extends CommonHeaderContainerFragmentProps {
  children: React.ReactNode;
}

const CommonHeaderContainer = ({
  children,
  height = undefined,
  xPadding = undefined,
  yPadding = undefined,
  xMargin = undefined,
  yMargin = undefined,
}: CommonHeaderContainerProps): React.ReactElement => {
  return (
    <CommonContainerFragment
      height={height}
      xPadding={xPadding}
      yPadding={yPadding}
      xMargin={xMargin}
      yMargin={yMargin}
    >
      {children}
    </CommonContainerFragment>
  );
};

interface CommonHeaderContainerFragmentProps {
  height?: string;
  xPadding?: string;
  yPadding?: string;
  xMargin?: string;
  yMargin?: string;
}

const CommonContainerFragment = styled.header<CommonHeaderContainerFragmentProps>`
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.height ? `min-height: ${props.height};` : "")}

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

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export default CommonHeaderContainer;
