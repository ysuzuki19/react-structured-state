import { useState } from 'react';
import { renderHook, act } from '@testing-library/react';

import { useSetAction } from './useSetAction';

describe('useSetAction', () => {
  it('initialize empty', () => {
    const { result } = renderHook(() => useState<Set<number>>(new Set()));
    const action = useSetAction(result.current[1]);
  });

  it('add(1)', () => {
    const { result } = renderHook(() => useState<Set<number>>(new Set()));
    const action = useSetAction(result.current[1]);
    act(() => action.add(1));
    expect(result.current[0]).toStrictEqual(new Set([1]));
  });

  it('clear()', () => {
    const { result } = renderHook(() =>
      useState<Set<number>>(new Set([0, 1, 2]))
    );
    const action = useSetAction(result.current[1]);
    act(() => action.clear());
    expect(result.current[0]).toStrictEqual(new Set());
  });

  it('delete()', () => {
    const { result } = renderHook(() =>
      useState<Set<number>>(new Set([0, 1, 2]))
    );
    const action = useSetAction(result.current[1]);
    act(() => action.delete(1));
    expect(result.current[0]).toStrictEqual(new Set([0, 2]));
  });
});
