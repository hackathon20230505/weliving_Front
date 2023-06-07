import { atom } from "recoil";

/** 바텀 시트 open 여부 */
const isOpenBottomSheetState = atom<boolean>({
  key: `isOpenBottomSheetState`,
  default: false,
});

export { isOpenBottomSheetState };
