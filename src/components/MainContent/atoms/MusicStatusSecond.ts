import { atom } from "recoil";

export const isPlayingStateSecond = atom({
  key: "isPlayingStateSecond", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
