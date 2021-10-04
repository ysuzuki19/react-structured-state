/**
 * @license
 * Copyright 2021- ysuzuki19
 *
 * This source code is licensed under the MIT license
 * that can be found in the LICENSE file in the
 * root directory of this source tree.
 */

import { SetterOrUpdater } from 'recoil';

import { MapAction, MapActionMethods } from './useMap.types';

export type MapSetter<TK, TV> =
  | React.Dispatch<React.SetStateAction<Map<TK, TV>>>
  | SetterOrUpdater<Map<TK, TV>>;

export function useMapAction<TK, TV>(
  setState: MapSetter<TK, TV>
): MapAction<TK, TV> {
  const set: MapActionMethods.Set<TK, TV> = (key: TK, val: TV) => {
    setState((old) => {
      old.set(key, val);
      return new Map<TK, TV>(old);
    });
  };

  const clear: MapActionMethods.Clear = () => {
    setState((old) => {
      old.clear();
      return new Map<TK, TV>(old);
    });
  };

  const deleteImpl: MapActionMethods.Delete<TK> = (key: TK) => {
    setState((old) => {
      old.delete(key);
      return new Map<TK, TV>(old);
    });
  };

  const action = {
    setState,
    set,
    clear,
    delete: deleteImpl,
  };

  return action;
}
