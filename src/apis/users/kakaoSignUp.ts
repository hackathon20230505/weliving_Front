import axios from "axios";

interface KakaoSignUpResponse {
  birth: boolean;
}

const kakaoSignUp = async (birth: string) => {
  const token = localStorage.getItem("accessToken");

  const { data } = await axios.post<KakaoSignUpResponse>(
    "/api/life/user/birth",
    {
      title: birth,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data;
};

export { kakaoSignUp };
