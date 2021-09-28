import { useState } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { useArrayAction } from './useArrayAction';

describe('useArrayAction', () => {
  it('initialize [1]', () => {
    const { result } = renderHook(() => useState([1]));
    expect(result.current[0]).toStrictEqual([1]);
  });

  it('setState [1, 2]', () => {
    const { result } = renderHook(() => useState([1]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.setState([1, 2]));
    expect(result.current[0]).toStrictEqual([1, 2]);
  });

  it('pushBack(2)', () => {
    const { result } = renderHook(() => useState([1]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.pushBack(2));
    expect(result.current[0]).toStrictEqual([1, 2]);
  });

  it('pushBack(2, 3)', () => {
    const { result } = renderHook(() => useState([1]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.pushBack(2, 3));
    expect(result.current[0]).toStrictEqual([1, 2, 3]);
  });

  it('pushFront(2)', () => {
    const { result } = renderHook(() => useState([1]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.pushFront(2));
    expect(result.current[0]).toStrictEqual([2, 1]);
  });

  it('pushFront(2, 3)', () => {
    const { result } = renderHook(() => useState([1]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.pushFront(2, 3));
    expect(result.current[0]).toStrictEqual([2, 3, 1]);
  });

  it('insert(1, 2)', () => {
    const { result } = renderHook(() => useState([1]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.insert(1, 2));
    expect(result.current[0]).toStrictEqual([1, 2]);
  });

  it('insert(1, 2, 3, 4)', () => {
    const { result } = renderHook(() => useState([1]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.insert(1, 2, 3, 4));
    expect(result.current[0]).toStrictEqual([1, 2, 3, 4]);
  });

  it('popBack()', () => {
    const { result } = renderHook(() => useState([1, 2]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.popBack());
    expect(result.current[0]).toStrictEqual([1]);
  });

  it('popBack(2)', () => {
    const { result } = renderHook(() => useState([1, 2, 3]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.popBack(2));
    expect(result.current[0]).toStrictEqual([1]);
  });

  it('popFront()', () => {
    const { result } = renderHook(() => useState([1, 2]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.popBack());
    expect(result.current[0]).toStrictEqual([1]);
  });

  it('popFront(2)', () => {
    const { result } = renderHook(() => useState([1, 2, 3]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.popFront(2));
    expect(result.current[0]).toStrictEqual([3]);
  });

  it('concatBack([3,4])', () => {
    const { result } = renderHook(() => useState([1, 2]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.concatBack([3, 4]));
    expect(result.current[0]).toStrictEqual([1, 2, 3, 4]);
  });

  it('concatFront([3,4])', () => {
    const { result } = renderHook(() => useState([1, 2]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.concatFront([3, 4]));
    expect(result.current[0]).toStrictEqual([3, 4, 1, 2]);
  });

  it('sort()', () => {
    const { result } = renderHook(() => useState([2, 1, 3, 4]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.sort());
    expect(result.current[0]).toStrictEqual([1, 2, 3, 4]);
  });

  it('sort((a,b) => a > b)', () => {
    const { result } = renderHook(() => useState([2, 1, 3, 4]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.sort((a, b) => a > b));
    expect(result.current[0]).toStrictEqual([4, 3, 2, 1]);
  });

  it('reverse()', () => {
    const { result } = renderHook(() => useState([1, 2, 3]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.reverse());
    expect(result.current[0]).toStrictEqual([3, 2, 1]);
  });

  it('slice(2)', () => {
    const { result } = renderHook(() => useState([1, 2, 3, 4, 5]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.slice(2));
    expect(result.current[0]).toStrictEqual([3, 4, 5]);
  });

  it('slice(1, 4)', () => {
    const { result } = renderHook(() => useState([1, 2, 3, 4, 5]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.slice(1, 4));
    expect(result.current[0]).toStrictEqual([2, 3, 4]);
  });

  it('splice(2)', () => {
    const { result } = renderHook(() => useState([1, 2, 3, 4, 5]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.splice(2));
    expect(result.current[0]).toStrictEqual([1, 2]);
  });

  it('splice(1, 3)', () => {
    const { result } = renderHook(() => useState([1, 2, 3, 4, 5]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.splice(1, 3));
    expect(result.current[0]).toStrictEqual([1, 5]);
  });

  it('splice(1, 3, 6, 7)', () => {
    const { result } = renderHook(() => useState([1, 2, 3, 4, 5]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.splice(1, 3, 6, 7));
    expect(result.current[0]).toStrictEqual([1, 6, 7, 5]);
  });

  it('filter((e) => e !== 1)', () => {
    const { result } = renderHook(() => useState([1, 2, 1, 3]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.filter((e) => e !== 1));
    expect(result.current[0]).toStrictEqual([2, 3]);
  });

  it('filter((e) => e === 1)', () => {
    const { result } = renderHook(() => useState([1, 2, 1, 3]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.filter((e) => e === 1));
    expect(result.current[0]).toStrictEqual([1, 1]);
  });

  it('map((e) => e * 1)', () => {
    const { result } = renderHook(() => useState([1, 2, 3]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.map((e) => e * 2));
    expect(result.current[0]).toStrictEqual([2, 4, 6]);
  });

  it('fill(0)', () => {
    const { result } = renderHook(() => useState([1, 2]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.fill(0));
    expect(result.current[0]).toStrictEqual([0, 0]);
  });

  it('fill(0, 2)', () => {
    const { result } = renderHook(() => useState([1, 2, 3, 4, 5]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.fill(0, 2));
    expect(result.current[0]).toStrictEqual([1, 2, 0, 0, 0]);
  });

  it('fill(0, 2, 4)', () => {
    const { result } = renderHook(() => useState([1, 2, 3, 4, 5]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.fill(0, 2, 4));
    expect(result.current[0]).toStrictEqual([1, 2, 0, 0, 5]);
  });

  it('fill(0, 2, 4)', () => {
    const { result } = renderHook(() => useState([1, 2, 3, 4, 5]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.fill(0, 2, 4));
    expect(result.current[0]).toStrictEqual([1, 2, 0, 0, 5]);
  });

  it('chain((es) => es.map(e => e*2).filter(e => e!==0))', () => {
    const { result } = renderHook(() => useState([1, 2, 3, 4, 5]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() =>
      action.chain((es) => es.map((e) => e * 2).filter((e) => e !== 2))
    );
    expect(result.current[0]).toStrictEqual([4, 6, 8, 10]);
  });

  it('set(1, 0)', () => {
    const { result } = renderHook(() => useState([1, 2, 3]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.set(1, 0));
    expect(result.current[0]).toStrictEqual([1, 0, 3]);
  });

  it('erase(1)', () => {
    const { result } = renderHook(() => useState([1, 0, 1, 2]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.erase(1));
    expect(result.current[0]).toStrictEqual([0, 2]);
  });

  it('clear()', () => {
    const { result } = renderHook(() => useState([1, 2]));
    const setState = result.current[1];
    const action = useArrayAction(setState);

    act(() => action.clear());
    expect(result.current[0]).toStrictEqual([]);
  });
});
