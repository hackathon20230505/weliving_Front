import axios from "axios";

type RefreshTokenProps = {
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const getRefreshToken = async (): Promise<string | void> => {
  try {
    await axios.post<RefreshTokenProps>(`/api/users/refresh`);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};
