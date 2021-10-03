/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { RecoilState, useRecoilState } from 'recoil';

import { SetAction } from './useSet.types';
import { useSetAction } from './useSetAction';

/**
 * @function
 */
export function useRecoilSet<T>(
  arrayState: RecoilState<Set<T>>
): [Set<T>, SetAction<T>] {
  const [state, setState] = useRecoilState<Set<T>>(arrayState);
  const action = useSetAction<T>(setState);

  return [state, action];
}
