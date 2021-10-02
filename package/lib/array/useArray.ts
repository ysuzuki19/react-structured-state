/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { useState } from 'react';

import { ArrayAction } from './useArray.types';
import { useArrayAction } from './useArrayAction';

/**
 * @function
 */
export function useArray<T>(initialState: T[]): [T[], ArrayAction<T>] {
  const [state, setState] = useState<T[]>(initialState);
  const action = useArrayAction<T>(setState);

  return [state, action];
}
