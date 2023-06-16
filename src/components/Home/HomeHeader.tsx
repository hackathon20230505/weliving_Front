import { FunctionComponent } from "react";
import CommonHeaderContainer from "../Common/CommonHeaderContainer";
import styled from "styled-components";
type HomeHeaderProps = {};

const HomeHeader: FunctionComponent<HomeHeaderProps> = () => {
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("kakaoAccessToken");
    localStorage.removeItem("kakaoRefreshToken");
    window.location.href = "/";
  };

  return (
    <CommonHeaderContainer height="56px" xMargin="5%">
      Well Dying
      <GoLogoutButton onClick={logoutHandler}>
        <img src="https://welldie.com/img/logout-icon.svg" alt="뒤로 가기" />
      </GoLogoutButton>
    </CommonHeaderContainer>
  );
};

export default HomeHeader;

export const GoLogoutButton = styled.button`
  position: absolute;
  right: 3px;

  .img {
    font-size: 20px;
    width: 28px;
    height: 28px;
  }
`;
