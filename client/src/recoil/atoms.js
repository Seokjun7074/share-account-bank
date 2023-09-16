import { atom, atomFamily } from "recoil";

export const modalState = atomFamily({
  key: "modalState",
  default: false,
});

export const selectedMyAccountState = atom({
  key: "selectedMyAccount",
  default: "",
});

export const effectState = atom({
  key: "effectState",
  default: false,
});
