import { useState } from 'react';
import { renderHook, act } from '@testing-library/react';

import { useMapAction } from './useMapAction';

function make_map(data?: [string, number][]): Map<string, number> {
  return new Map<string, number>(data);
}

describe('useMapAction', () => {
  it('initialize empty', () => {
    const { result } = renderHook(() =>
      useState<Map<string, number>>(make_map())
    );
    const action = useMapAction(result.current[1]);
  });

  it('initialize [["a", 1]]', () => {
    const { result } = renderHook(() =>
      useState<Map<string, number>>(make_map([['a', 1]]))
    );
    expect(result.current[0]).toStrictEqual(make_map([['a', 1]]));
  });

  it('set("a", 1)', () => {
    const { result } = renderHook(() =>
      useState<Map<string, number>>(make_map())
    );
    const action = useMapAction(result.current[1]);
    act(() => action.set('a', 1));
    expect(result.current[0]).toStrictEqual(make_map([['a', 1]]));
  });

  it('clear()', () => {
    const { result } = renderHook(() =>
      useState<Map<string, number>>(make_map([['a', 1]]))
    );
    const action = useMapAction(result.current[1]);
    act(() => action.clear());
    expect(result.current[0]).toStrictEqual(make_map());
  });

  it('delete()', () => {
    const { result } = renderHook(() =>
      useState<Map<string, number>>(
        make_map([
          ['a', 1],
          ['b', 2],
        ])
      )
    );
    const action = useMapAction(result.current[1]);
    act(() => action.delete('b'));
    expect(result.current[0]).toStrictEqual(make_map([['a', 1]]));
  });

  it('delete()', () => {
    const { result } = renderHook(() =>
      useState<Map<string, number>>(make_map())
    );
    const action = useMapAction(result.current[1]);
    act(() =>
      action.setState(
        make_map([
          ['a', 1],
          ['b', 2],
        ])
      )
    );
    expect(result.current[0]).toStrictEqual(
      make_map([
        ['a', 1],
        ['b', 2],
      ])
    );
  });
});
