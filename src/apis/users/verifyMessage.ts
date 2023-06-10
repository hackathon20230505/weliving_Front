import axios from "axios";

export const verifyMessage = async (phone: string, verifyCode: string) => {
  try {
    const data = await axios.post(`/api/users/verify-message/`, {
      phoneNumber: phone,
      verifyCode: verifyCode,
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
