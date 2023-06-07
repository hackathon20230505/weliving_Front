import { atom } from "recoil";

interface IIsCheckedStateTypes {
  isAllChecked: boolean;
  isTermsAndConditionsChecked: boolean;
  isCollectPersonalInfoChecked: boolean;
}

/** 동의 */
const isCheckedState = atom({
  key: `isCheckedState`,
  default: {
    isAllChecked: false,
    isTermsAndConditionsChecked: false,
    isCollectPersonalInfoChecked: false,
  },
});

export { isCheckedState, type IIsCheckedStateTypes };
