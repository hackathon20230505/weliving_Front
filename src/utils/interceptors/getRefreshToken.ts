import axios from "axios";

type RefreshTokenProps = {
  ok: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const getRefreshToken = async (): Promise<string | void> => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    Refresh: localStorage.getItem("refreshToken"),
  };

  try {
    const {
      data: {
        data: { accessToken, refreshToken },
      },
    } = await axios.post<RefreshTokenProps>(
      `/api/users/refresh`,
      {},
      {
        headers,
      },
    );

    localStorage.setItem("accessToken", accessToken);

    if (refreshToken !== null) {
      localStorage.setItem("refreshToken", refreshToken);
    }

    return accessToken;
  } catch (e) {
    // window.location.href = "/";
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};
