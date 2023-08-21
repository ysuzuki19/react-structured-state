import { act, renderHook } from '@testing-library/react';
import { useArray } from './useArray';

describe('useArray', () => {
  it('initialize', () => {
    const { result } = renderHook(() => useArray([1]));
    expect(result.current[0]).toStrictEqual([1]);
  });

  it('call actions', () => {
    const { result } = renderHook(() => useArray([1]));
    const [, actionArr] = result.current;
    act(() => actionArr.pushBack(2));
    act(() => actionArr.pushFront(0));
    act(() => actionArr.map((e) => e * 2));
    act(() => actionArr.reverse());
    expect(result.current[0]).toStrictEqual([4, 2, 0]);
  });
});
