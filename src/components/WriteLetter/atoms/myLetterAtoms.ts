import { atom } from "recoil";

interface IMyLetterPostTypes {
  title: string;
  content: string;
  isShare: number;
}

/** 나의 일지 데이터 */
const myLetterState = atom<IMyLetterPostTypes>({
  key: `myLetterState`,
  default: {
    title: "",
    content: "",
    isShare: 1,
  },
});

export { myLetterState, type IMyLetterPostTypes };
