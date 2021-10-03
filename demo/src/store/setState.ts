import { atom } from 'recoil';

export const setState = atom({
  key: 'setState',
  default: new Set([1, 2, 3]),
});
