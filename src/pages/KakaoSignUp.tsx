import { FunctionComponent, useEffect, useState } from "react";
import PageContainer from "../components/Common/PageContainer";
import axios from "axios";
import { kakaoSignIn } from "../apis/users/kakaoSignIn.ts";
import LoadingComponent from "../components/Common/LoadingComponent.tsx";

type KakaoSignUpProps = {};

// const { Kakao } = window;

const KakaoSignUp: FunctionComponent<KakaoSignUpProps> = () => {
  const [, setKakakoAccessToken] = useState<string>("");
  const [, setKakaoRefreshToken] = useState<string>("");

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const grant_type = "authorization_code";
    const client_id = import.meta.env.VITE_KAKAO_CLIENT_ID;

    (async () => {
      const data = await axios.post(
        `https://kauth.kakao.com/oauth/token`,
        {
          grant_type,
          client_id,
          redirect_uri: window.location.href.split("?")[0],
          code,
        },
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        },
      );

      if (data) {
        const {
          data: { access_token: accessToken, refresh_token: refreshToken },
        } = data;

        console.log(accessToken, refreshToken);

        localStorage.setItem("kakaoAccessToken", accessToken);
        localStorage.setItem("kakaoRefreshToken", refreshToken);

        setKakakoAccessToken(accessToken);
        setKakaoRefreshToken(refreshToken);

        const loginInfo = await kakaoSignIn(accessToken);

        localStorage.setItem("accessToken", loginInfo.accessToken);

        window.location.href = "/";
      }
    })();
  }, []);

  return (
    <PageContainer>
      <LoadingComponent />
      {/*<KakaoSignUpHeader />*/}
      {/*<KakaoSignUpBody />*/}
    </PageContainer>
  );
};

export default KakaoSignUp;
