import { renderHook, act } from '@testing-library/react';

import { useQueue } from './useQueue';

describe('useQueue', () => {
  it('initialize', () => {
    const { result } = renderHook(() => useQueue([1]));
    expect(result.current[0]).toStrictEqual([1]);
  });

  it('front() method', () => {
    const { result } = renderHook(() => useQueue<number>([1, 2]));
    expect(result.current[0][0]).toBe(1);
  });

  it('call actions', () => {
    const { result } = renderHook(() => useQueue<number>([1]));
    const [, actionQueue] = result.current;

    act(() => actionQueue.push(1));
    act(() => actionQueue.push(2));
    act(() => actionQueue.push(3));
    act(() => actionQueue.pop());
    expect(result.current[0]).toStrictEqual([1, 2, 3]);
  });
});
