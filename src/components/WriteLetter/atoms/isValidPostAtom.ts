import { atom } from "recoil";

/** 바텀 시트 open 여부 */
const isValidPostState = atom<boolean>({
  key: `isValidPostState`,
  default: false,
});

export { isValidPostState };
