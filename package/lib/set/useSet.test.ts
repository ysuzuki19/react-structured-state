import { renderHook, act } from '@testing-library/react-hooks';

import { useSet } from './useSet';

describe('useSet', () => {
  it('initialize', () => {
    const { result } = renderHook(() => useSet<number>());
    expect(result.current[0]).toStrictEqual(new Set<number>());
  });

  it('call actions', () => {
    const { result } = renderHook(() => useSet<number>());
    const actionSet = result.current[1];
    act(() => actionSet.add(1));
    expect(result.current[0]).toStrictEqual(new Set<number>([1]));
    act(() => actionSet.add(2));
    expect(result.current[0]).toStrictEqual(new Set<number>([1, 2]));
    act(() => actionSet.delete(1));
    expect(result.current[0]).toStrictEqual(new Set<number>([2]));
    act(() => actionSet.clear());
    expect(result.current[0]).toStrictEqual(new Set<number>());
  });
});
