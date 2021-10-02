import { renderHook, act } from '@testing-library/react-hooks';
import { atom, RecoilRoot } from 'recoil';

import { useRecoilArray } from './useRecoilArray';

const arrayState = atom({
  key: 'arrayState',
  default: [1],
});

describe('useRecoilArray', () => {
  it('initialize', () => {
    const { result } = renderHook(() => useRecoilArray(arrayState), {
      wrapper: RecoilRoot,
    });
    expect(result.current[0]).toStrictEqual([1]);
  });

  it('call actions', () => {
    const { result } = renderHook(() => useRecoilArray(arrayState), {
      wrapper: RecoilRoot,
    });
    const [, actionArr] = result.current;
    act(() => actionArr.pushBack(2));
    act(() => actionArr.pushFront(0));
    act(() => actionArr.map((e) => e * 2));
    act(() => actionArr.reverse());
    expect(result.current[0]).toStrictEqual([4, 2, 0]);
  });
});
