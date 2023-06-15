import axios from "axios";

interface ISignUpTypes {
  email: string;
  password: string;
  birth: string;
}

export const onSignup = async ({ email, password, birth }: ISignUpTypes) => {
  const birthPrefix = birth.substring(0, 1) === "0" ? "20" : "19";
  const birthValue = birthPrefix + birth.substring(0, 2);

  // 임시방편, back : signup.js 나중에 백에서 수정된 뒤  재작업 필요

  try {
    const data = await axios.post(`/api/users/signup/`, {
      email: email,
      password: password,
      birth: birthValue,
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
