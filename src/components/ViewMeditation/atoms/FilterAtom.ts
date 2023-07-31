import { atom } from "recoil";

interface IFilterTypes {
  id: number;
  title: string;
  birth: number;
  isActive: boolean;
}

const FilterObj = [
  {
    id: 0,
    title: "전체",
    birth: 6,
    isActive: true,
  },
  {
    id: 1,
    title: "00년생",
    birth: 0,
    isActive: false,
  },
  {
    id: 2,
    title: "90년생",
    birth: 9,
    isActive: false,
  },
  {
    id: 3,
    title: "80년생",
    birth: 8,
    isActive: false,
  },
  {
    id: 4,
    title: "70년생",
    birth: 7,
    isActive: false,
  },
];

/** 필터 상태값 */
const FilterState = atom<IFilterTypes[]>({
  key: `FilterState`,
  default: FilterObj,
});

export { FilterState };
