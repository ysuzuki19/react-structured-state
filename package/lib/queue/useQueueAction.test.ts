import { useState } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { useQueueAction } from './useQueueAction';

describe('useQueueAction', () => {
  it('initialize [1]', () => {
    const { result } = renderHook(() => useState([1]));
    expect(result.current[0]).toStrictEqual([1]);
  });

  it('setState [1, 2]', () => {
    const { result } = renderHook(() => useState([1]));
    const setState = result.current[1];
    const action = useQueueAction(setState);

    act(() => action.setState([1, 2]));
    expect(result.current[0]).toStrictEqual([1, 2]);
  });

  it('push(2)', () => {
    const { result } = renderHook(() => useState([1]));
    const setState = result.current[1];
    const action = useQueueAction(setState);

    act(() => action.push(2));
    expect(result.current[0]).toStrictEqual([1, 2]);
  });

  it('push(2, 3)', () => {
    const { result } = renderHook(() => useState([1]));
    const setState = result.current[1];
    const action = useQueueAction(setState);

    act(() => action.push(2, 3));
    expect(result.current[0]).toStrictEqual([1, 2, 3]);
  });

  it('pop()', () => {
    const { result } = renderHook(() => useState([1, 2]));
    const setState = result.current[1];
    const action = useQueueAction(setState);

    act(() => action.pop());
    expect(result.current[0]).toStrictEqual([2]);
  });

  it('pop(2)', () => {
    const { result } = renderHook(() => useState([1, 2, 3]));
    const setState = result.current[1];
    const action = useQueueAction(setState);

    act(() => action.pop(2));
    expect(result.current[0]).toStrictEqual([3]);
  });

  it('concat([3,4])', () => {
    const { result } = renderHook(() => useState([1, 2]));
    const setState = result.current[1];
    const action = useQueueAction(setState);

    act(() => action.concat([3, 4]));
    expect(result.current[0]).toStrictEqual([1, 2, 3, 4]);
  });

  it('clear()', () => {
    const { result } = renderHook(() => useState([1, 2]));
    const setState = result.current[1];
    const action = useQueueAction(setState);

    act(() => action.clear());
    expect(result.current[0]).toStrictEqual([]);
  });
});
