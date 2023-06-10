import styled from "styled-components";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <PageContainerFragment>{children}</PageContainerFragment>;
};

// styled-component
const PageContainerFragment = styled.main`
  height: 100%;
`;

export default PageContainer;
