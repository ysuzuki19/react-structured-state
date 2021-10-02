import { atom, RecoilRoot } from 'recoil';
import { renderHook, act } from '@testing-library/react-hooks';

import { useRecoilQueue } from './useRecoilQueue';

const queueState = atom({
  key: 'queueState',
  default: [1],
});

describe('useRecoilQueue', () => {
  it('initialize', () => {
    const { result } = renderHook(() => useRecoilQueue(queueState), {
      wrapper: RecoilRoot,
    });
    expect(result.current[0]).toStrictEqual([1]);
  });

  it('call actions', () => {
    const { result } = renderHook(() => useRecoilQueue(queueState), {
      wrapper: RecoilRoot,
    });
    const [, actionQueue] = result.current;

    act(() => actionQueue.push(1));
    act(() => actionQueue.push(2));
    act(() => actionQueue.push(3));
    act(() => actionQueue.pop());
    expect(result.current[0]).toStrictEqual([1, 2, 3]);
  });
});
