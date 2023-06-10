import { FunctionComponent, useEffect, useState } from "react";
import KakaoSignUpHeader from "../components/KakaoSignUp/KakaoSignUpHeader";
import KakaoSignUpBody from "../components/KakaoSignUp/KakaoSignUpBody";
import PageContainer from "../components/Common/PageContainer";
import axios from "axios";
type KakaoSignUpProps = {};

const { Kakao } = window;

const KakaoSignUp: FunctionComponent<KakaoSignUpProps> = () => {
  const [kakaoAccessToken, setKakakoAccessToken] = useState<string>("");
  const [kakaoRefreshToken, setKakaoRefreshToken] = useState<string>("");

  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    let grant_type = "authorization_code";
    let client_id = import.meta.env.VITE_KAKAO_CLIENT_ID;

    {
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

        console.log("DATA:", data);
        if (data) {
          const {
            data: { access_token: accessToken, refresh_token: refreshToken },
          } = data;

          console.log(accessToken, refreshToken);

          localStorage.setItem("kakaoAccessToken", accessToken);
          localStorage.setItem("kakaoRefreshToken", refreshToken);

          setKakakoAccessToken(accessToken);
          setKakaoRefreshToken(refreshToken);
        }
      })();
    }

    // axios
    //   .post(
    //     `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${
    //       import.meta.env.REACT_APP_FRONTEND_BASE_URL
    //     }/login/oauth&code=${code}`,
    //     {
    //       headers: {
    //         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //       },
    //     },
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     Kakao.auth.setAccessToken(res.data.accessToken);
    //     Kakao.API.request({
    //       url: "/v2/user/me",
    //       success: function (response: any) {
    //         console.log(response);
    //       },
    //       fail: function (error: any) {
    //         console.log(error);
    //       },
    //     });
    //   });
  }, []);

  return (
    <PageContainer>
      <KakaoSignUpHeader />
      <KakaoSignUpBody />
    </PageContainer>
  );
};

export default KakaoSignUp;
