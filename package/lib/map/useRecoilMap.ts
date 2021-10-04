/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { RecoilState, useRecoilState } from 'recoil';

import { MapAction } from './useMap.types';
import { useMapAction } from './useMapAction';

/**
 * @function
 */
export function useRecoilMap<TK, TV>(
  mapState: RecoilState<Map<TK, TV>>
): [Map<TK, TV>, MapAction<TK, TV>] {
  const [state, setState] = useRecoilState<Map<TK, TV>>(mapState);
  const action = useMapAction<TK, TV>(setState);

  return [state, action];
}
