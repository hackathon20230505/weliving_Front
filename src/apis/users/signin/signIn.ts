import axios from "axios";

interface ISignInTypes {
  username: string;
  password: string;
}

export const onSignIn = async ({ username, password }: ISignInTypes) => {
  try {
    const {
      data: { access },
    } = await axios.post("/api/users/signin/", {
      username: username,
      password: password,
    });

    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;

    return access;
  } catch (error) {
    throw error; // Rethrow the error to be caught by the caller
  }
};
