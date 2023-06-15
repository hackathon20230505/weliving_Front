import axios from "axios";

interface ISignInTypes {
  username: string;
  password: string;
}

export const onSignIn = async ({ username, password }: ISignInTypes) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await axios.post(`/api/users/signin/`, {
      email: username,
      password: password,
    });

    console.log(data.data.accessToken);

    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.data.accessToken}`;

    localStorage.setItem("accessToken", data.data.accessToken);
    localStorage.setItem("refreshToken", data.data.refreshToken);

    return data;
  } catch (error) {
    throw error; // Rethrow the error to be caught by the caller
  }
};
