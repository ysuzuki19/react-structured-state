/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { useState } from 'react';
import { QueueAction, useQueueAction } from './useQueueAction';

/**
 * @function
 */
export function useQueue<T>(initialState: T[]): [T[], QueueAction<T>] {
  const [state, setState] = useState<T[]>(initialState);
  const action = useQueueAction<T>(setState);

  return [state, action];
}
