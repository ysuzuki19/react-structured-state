import { atom } from 'recoil';

export const mapState = atom({
  key: 'mapState',
  default: new Map<string, number>([
    ['a', 1],
    ['b', 2],
  ]),
});
