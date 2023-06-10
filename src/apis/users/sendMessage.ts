import axios from "axios";

export const sendMessage = async (phone: string) => {
  try {
    const data = await axios.post(`/api/users/send-message/`, {
      phoneNumber: phone,
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
