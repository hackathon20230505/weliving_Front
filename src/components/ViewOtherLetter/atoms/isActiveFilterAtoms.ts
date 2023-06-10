import { atom } from "recoil";

/** 활성화된 필터 이름 */
const isOpenBottomSheetState = atom<boolean>({
  key: `isOpenBottomSheetState`,
  default: false,
});

export { isOpenBottomSheetState };
