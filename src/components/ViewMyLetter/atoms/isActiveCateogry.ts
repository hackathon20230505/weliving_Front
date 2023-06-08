import { atom } from "recoil";

/** 일지 active 여부 */
const isActiveLetterState = atom<boolean>({
  key: `isActiveLetterState`,
  default: true,
});

/** 추억카드 active 여부 */
const isActiveMemoryCardState = atom<boolean>({
  key: `isActiveMemoryCardState`,
  default: false,
});

export { isActiveLetterState, isActiveMemoryCardState };
