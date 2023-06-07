import { atom } from "recoil";

interface IUserInfoStateTypes {
  userEmail: string;
  userPassword: string;
  userPasswordConfirm: string;
  userBirth: string;
}

interface IIsValidUserInfoStateTypes {
  isValidUserEmail: boolean;
  isValidUserPassword: boolean;
  isValidUserPasswordConfirm: boolean;
  isValidUserBirth: boolean;
}

/** 사용자 데이터 */
const UserInfoState = atom<IUserInfoStateTypes>({
  key: `UserInfoState`,
  default: {
    userEmail: "",
    userPassword: "",
    userPasswordConfirm: "",
    userBirth: "",
  },
});

/** 사용자 데이터 유효 여부 */
const isValidUserInfoState = atom<IIsValidUserInfoStateTypes>({
  key: `isValidUserInfoState`,
  default: {
    isValidUserEmail: false,
    isValidUserPassword: false,
    isValidUserPasswordConfirm: false,
    isValidUserBirth: false,
  },
});

export {
  UserInfoState,
  isValidUserInfoState,
  type IUserInfoStateTypes,
  type IIsValidUserInfoStateTypes,
};
