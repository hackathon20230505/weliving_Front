import { atom } from "recoil";

/** 전체 동의 */
const isAllCheckedState = atom<boolean>({
  key: "isAllCheckedState",
  default: false,
});

/** 이용 약관 동의 여부 (필수) */
const isTermsAndConditionsCheckedState = atom<boolean>({
  key: "isTermsAndConditionsCheckedState",
  default: false,
});

/** 개인정보 수집 및 이용 동의 여부 (필수) */
const isCollectPersonalInfoCheckedState = atom<boolean>({
  key: "isCollectPersonalInfoCheckedState",
  default: false,
});

export {
  isAllCheckedState,
  isTermsAndConditionsCheckedState,
  isCollectPersonalInfoCheckedState,
};
