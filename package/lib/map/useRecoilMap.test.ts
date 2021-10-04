import { renderHook, act } from '@testing-library/react-hooks';
import { atom, RecoilRoot } from 'recoil';

import { useRecoilMap } from './useRecoilMap';

const mapState = atom({
  key: 'mapState',
  default: new Map<string, number>([['a', 1]]),
});

function make_map(data?: [string, number][]): Map<string, number> {
  return new Map<string, number>(data);
}

describe('useRecoilMap', () => {
  it('initialize', () => {
    const { result } = renderHook(() => useRecoilMap(mapState), {
      wrapper: RecoilRoot,
    });
    expect(result.current[0]).toStrictEqual(make_map([['a', 1]]));
  });

  it('call actions', () => {
    const { result } = renderHook(() => useRecoilMap(mapState), {
      wrapper: RecoilRoot,
    });
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
