import { renderHook, act } from '@testing-library/react-hooks';

import { useMap } from './useMap';

function make_map(data?: [string, number][]): Map<string, number> {
  return new Map<string, number>(data);
}

describe('useMap', () => {
  it('initialize', () => {
    const { result } = renderHook(() => useMap<string, number>());
    expect(result.current[0]).toStrictEqual(make_map());
  });

  it('call actions', () => {
    const { result } = renderHook(() => useMap<string, number>());
    const actionMap = result.current[1];
    act(() => actionMap.set('a', 1));
    expect(result.current[0]).toStrictEqual(make_map([['a', 1]]));
    act(() => actionMap.clear());
    expect(result.current[0]).toStrictEqual(make_map());
    act(() =>
      actionMap.setState(
        make_map([
          ['a', 1],
          ['b', 2],
        ])
      )
    );
    act(() => actionMap.delete('b'));
    expect(result.current[0]).toStrictEqual(make_map([['a', 1]]));
  });
});
