import { atom } from "recoil";

/** 바텀 시트 open 여부 */
const isValidPostStateCard = atom<boolean>({
  key: `isValidPostStateCard`,
  default: false,
});

export { isValidPostStateCard };
