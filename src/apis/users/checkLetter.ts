import axios from "axios";

export const checkLetter = async () => {
  try {
    const {
      data: { existsInLetter },
    } = await axios.get(`/api/users/checkLetter/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return existsInLetter;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
