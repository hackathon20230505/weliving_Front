import { atom } from "recoil";

interface IMyCardPostTypes {
  title: string;
  content: string;
  isShare: number;
}

/** 나의 일지 데이터 */
const myCardState = atom<IMyCardPostTypes>({
  key: `myCardState`,
  default: {
    title: "",
    content: "",
    isShare: 1,
  },
});

export { myCardState, type IMyCardPostTypes };
