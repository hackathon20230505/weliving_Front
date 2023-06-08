import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const refreshTokenState = atom({
  key: "refreshTokenState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export { refreshTokenState, accessTokenState };
