import { atom } from 'recoil';

export const queueState = atom({
  key: 'queueState',
  default: [1, 2, 3],
});
