/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { RecoilState, useRecoilState } from 'recoil';

import { QueueAction } from './useQueueAction';
import { useQueueAction } from './useQueueAction';

/**
 * @function
 */
export function useRecoilQueue<T>(
  queueState: RecoilState<T[]>
): [T[], QueueAction<T>] {
  const [state, setState] = useRecoilState<T[]>(queueState);
  const action = useQueueAction<T>(setState);

  return [state, action];
}
