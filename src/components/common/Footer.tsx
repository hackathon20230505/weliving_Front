import { FunctionComponent } from "react";
import styled from "styled-components";
type FooterProps = {};

const Footer: FunctionComponent<FooterProps> = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

export default Footer;

const FooterContainer = styled.footer`
  display: none;
`;
