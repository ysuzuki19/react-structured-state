/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { RecoilState, useRecoilState } from 'recoil';

import { ArrayAction } from './useArray.types';
import { useArrayAction } from './useArrayAction';

/**
 * @function
 */
export function useRecoilArray<T>(
  arrayState: RecoilState<T[]>
): [T[], ArrayAction<T>] {
  const [state, setState] = useRecoilState<T[]>(arrayState);
  const action = useArrayAction<T>(setState);

  return [state, action];
}
