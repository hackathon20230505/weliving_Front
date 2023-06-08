import { atom } from "recoil";

/** 공유 모달 open 여부 */
const isOpenShareState = atom<boolean>({
  key: `isOpenShareState`,
  default: false,
});

/** 더보기 모달 open 여부 */
const isOpenMoreState = atom<boolean>({
  key: `isOpenMoreState`,
  default: false,
});

export { isOpenShareState, isOpenMoreState };
