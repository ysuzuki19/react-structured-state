/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { useState } from 'react';

import { SetAction } from './useSet.types';
import { useSetAction } from './useSetAction';

/**
 * @function
 */
export function useSet<T>(initialState?: Set<T>): [Set<T>, SetAction<T>] {
  const [state, setState] = useState<Set<T>>(initialState || new Set<T>());
  const action = useSetAction<T>(setState);

  return [state, action];
}
