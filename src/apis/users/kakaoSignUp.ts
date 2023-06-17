import axios from "axios";

interface KakaoSignUpResponse {
  birth: boolean;
}

const kakaoSignUp = async (birth: string) => {
  const token = localStorage.getItem("accessToken");

  const birthPrefix = birth.substring(0, 1) === "0" ? "20" : "19";
  const birthValue = birthPrefix + birth.substring(0, 2);

  const { data } = await axios.post<KakaoSignUpResponse>(
    "/api/users/birth",
    {
      birth: birthValue,
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
