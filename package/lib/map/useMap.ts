/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { useState } from 'react';

import { MapAction } from './useMap.types';
import { useMapAction } from './useMapAction';

/**
 * @function
 */
export function useMap<TK, TV>(
  initialState?: Map<TK, TV>
): [Map<TK, TV>, MapAction<TK, TV>] {
  const [state, setState] = useState<Map<TK, TV>>(
    initialState || new Map<TK, TV>()
  );
  const action = useMapAction<TK, TV>(setState);

  return [state, action];
}
