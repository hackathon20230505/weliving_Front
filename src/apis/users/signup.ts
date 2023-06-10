import axios from "axios";

interface ISignUpTypes {
  email: string;
  password: string;
  birth: string;
}

export const onSignup = async ({ email, password, birth }: ISignUpTypes) => {
  try {
    const data = await axios.post(`/api/users/signup/`, {
      email: email,
      password: password,
      birth: birth,
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
