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
}: CommonContentContainerProps) => {
  return (
    <CommonContentContainerFragment
      xPadding={xPadding}
      yPadding={yPadding}
      xMargin={xMargin}
      yMargin={yMargin}
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
      
  margin-top: 40px;
`;

export default CommonContentContainer;
