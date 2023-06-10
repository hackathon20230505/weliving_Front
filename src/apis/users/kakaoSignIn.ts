import axios from "axios";

interface KakaoSignInResponse {
  ok: boolean;
  accessToken: string;
  email?: string;
}

const kakaoSignIn = async (kakaoAccessToken: string) => {
  const { data } = await axios.post<KakaoSignInResponse>(
    "/api/users/kakao",
    {},
    {
      headers: {
        Authorization: `${kakaoAccessToken}`,
      },
    },
  );
  return data;
};

export { kakaoSignIn };
