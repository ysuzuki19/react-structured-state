import { atom } from 'recoil';

export const arrayState = atom({
  key: 'arrayState',
  default: [1, 2, 3],
});
