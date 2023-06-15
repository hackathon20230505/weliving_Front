import { atom } from "recoil";

export const isPlayingState = atom({
  key: "isPlayingState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});