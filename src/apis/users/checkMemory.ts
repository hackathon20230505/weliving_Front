import axios from "axios";

export const checkMemory = async () => {
  try {
    const {
      data: { existsInMemory },
    } = await axios.get(`/api/users/checkMemory/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return existsInMemory;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
